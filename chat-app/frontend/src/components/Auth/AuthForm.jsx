import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const [otpForm, setOtpForm] = useState({ identifier: '', otp: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setShowForgot(false);
    navigate(isLogin ? '/signup' : '/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (showForgot || otpSent) {
      setOtpForm({ ...otpForm, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showForgot && !otpSent) {
      // Call backend to send OTP to email/phone
      console.log('Sending OTP to:', otpForm.identifier);
      setOtpSent(true);
    } else if (showForgot && otpSent) {
      // Verify OTP here
      console.log('Verifying OTP:', otpForm);
    } else if (isLogin) {
      console.log('Logging in with:', formData);
    } else {
      console.log('Signing up with:', formData);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        {showForgot ? 'Forgot Password' : isLogin ? 'Login' : 'Sign Up'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!showForgot && !isLogin && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
          />
        )}

        {(showForgot || isLogin || !isLogin) && (
          <input
            type="email"
            name="email"
            value={showForgot || otpSent ? otpForm.identifier : formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />
        )}

        {!isLogin && !showForgot && (
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
          />
        )}

        {!showForgot && (
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
          />
        )}

        {otpSent && showForgot && (
          <input
            type="text"
            name="otp"
            value={otpForm.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="w-full border px-4 py-2 rounded"
          />
        )}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
          {showForgot ? (otpSent ? 'Verify OTP' : 'Send OTP') : isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {!showForgot && (
        <div className="mt-4 flex justify-between text-sm">
          <button onClick={handleToggle} className="text-blue-600 hover:underline">
            {isLogin ? 'Create an account' : 'Already have an account?'}
          </button>

          {isLogin && (
            <button onClick={() => setShowForgot(true)} className="text-red-600 hover:underline">
              Forgot Password?
            </button>
          )}
        </div>
      )}

      {showForgot && (
        <div className="text-sm text-center mt-4">
          <button onClick={() => { setShowForgot(false); setOtpSent(false); }} className="text-blue-600 hover:underline">
            Back to Login
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
