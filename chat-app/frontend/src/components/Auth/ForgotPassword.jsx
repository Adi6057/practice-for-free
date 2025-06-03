import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate(); // ✅ must be inside component

  const [step, setStep] = useState(1); // 1 = Contact input, 2 = OTP + new password
  const [formData, setFormData] = useState({
    contact: '',
    otp: '',
    newPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Send OTP to email or phone
  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const res = await fetch('http://localhost:3000/vcare/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: formData.contact }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('OTP sent to your email and phone.');
        setStep(2); // ✅ Move to next step
      } else {
        setError(data.message || 'Failed to send OTP.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Verify OTP and reset password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      // Step 1: Verify OTP
      const otpRes = await fetch('http://localhost:3000/vcare/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: formData.contact,
          otp: formData.otp,
        }),
      });

      const otpData = await otpRes.json();

      if (!otpRes.ok) {
        setError(otpData.message || 'OTP verification failed');
        setLoading(false);
        return;
      }

      // Step 2: Reset password
      const res = await fetch('http://localhost:3000/vcare/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact: formData.contact,
          newPassword: formData.newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Password reset successfully. Redirecting to login...');
        setFormData({ contact: '', otp: '', newPassword: '' });
        setStep(1);

        navigate('/login')
      } else {
        setError(data.message || 'Failed to reset password');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
          {step === 1 ? 'Forgot Password' : 'Reset Password'}
        </h2>

        {message && <p className="text-green-600 text-sm mb-2">{message}</p>}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Step 1: Ask for email or phone */}
        {step === 1 ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div>
              <label className="block text-gray-600">Email or Phone</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email or phone number"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          // Step 2: Ask for OTP and new password
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-gray-600">OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter the OTP sent to you"
              />
            </div>
            <div>
              <label className="block text-gray-600">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter new password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
