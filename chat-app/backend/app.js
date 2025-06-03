import express, { response } from 'express';
import cookieParser from 'cookie-parser';
const app = express();
import cors from 'cors';
import User from './models/users.js'
import Apply from './models/apply.js'
import Jobber from './models/jobber.js'
import JobberApply from './models/jobber-apply.js';
import Customer from './models/customer.js'
import Payments from './models/payments.js'
import Attendance from './models/attendance.js';

app.use(cors({
  origin: 'http://localhost:5173',  // Frontend URL
  credentials: true                 // Allow credentials (cookies)
}));

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', async (req, res) => {
  try {
    // First parse the cookie once
    const userCookie = req.cookies.userId ? JSON.parse(req.cookies.userId) : null;

    if (!userCookie || !userCookie.email) {
      return res.status(401).json({ message: 'Unauthorized: No valid cookie found' });
    }

    const { email } = userCookie; // No need to parse email again

    let user = null;
    let role = null;

    const userModels = [Customer, Jobber]; // Array of models

    // Loop through models to find the user
    for (const model of userModels) {
      const foundUser = await model.findOne({ email });
      if (foundUser) {
        user = foundUser;
        role = model.modelName;  // Store the model name as role
        break;
      }
    }

    // If no user is found in any model
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove password from user data before sending it
    const { password, ...safeUser } = user._doc;

    // Send the response with the safe user data and role
    res.status(200).json({
      message: 'User loaded successfully',
      user: { ...safeUser, role },
    });

  } catch (err) {
    console.error('Error loading user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/vcare/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {

    if (!name || !email || !password) {
      console.log('Something error')
      return res.status(400).json({ message: 'Name, email and password are required'});
    }
    const user = await Customer.findOne({ email: email })

    if (user) {
      return res.status(400).json({ message: 'User already exist : '})
    }
    const newCustomer = await Customer.create({
      name,
      email,
      password
    })
    if (!newCustomer) {
      return res.status(400).json({ message: 'User already exists'});
    }
    res.cookie('userId', JSON.stringify({ email }))
    res.status(200).json({ message: 'User created successfully'});
  } catch (error) {
    console.log('Signup error:', error);
    res.status(500).json({ message: 'Internal server error'});
  }
})

app.post('/vcare/login', async (req, res) => {
  const { email, password} = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required'});
    }
    const models = [Customer, Jobber];

    let user = null;
    let userType = null;

    for (const model of models) {
      const foundUser = await model.findOne({ email, password });
      if (foundUser) {
        user = foundUser;
        userType = model.modelName;
        break;
      }
    }

    if (!user) {
      res.status(404).json({ message: 'User not found'});
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials'});
    }

    res.cookie('userId', JSON.stringify({ email }), {
      htppOnly: true,
      maxAge: 84600*7*1000,
      sameSite: 'lax'
    })

    res.status(200).json({ message: 'Login successful', userType, user})
  } catch (error) {
    console.log('Login error:', error);
    res.status(500).json(({ message: 'Internal server error'}));
    
  }
  // res.cookie('userId', JSON.stringify({ email }), {
  //   maxAge: 3600000, // 1 hour
  //   httpOnly: true,
  //   sameSite: 'Lax' // or 'None' if on different domains
  //   // secure: true // <-- only use this on HTTPS
  // });
  res.json({ message: 'Login successful',})
})

app.post('/logout', (req, res) => {
  res.clearCookie('userId', {
    httpOnly: true,
    secure: true,       // only if using HTTPS
    sameSite: 'Lax'     // or 'Strict' depending on your needs
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

app.post('/attendance', async (req, res) => {
    const { email, status, date } = req.body;
    console.log( email, status, date);
    const newAttendance = await Attendance.findOne({
      email: email,
      date: date
    });

    if (!newAttendance) {
      const newAttendance = await Attendance.create({
        email: email,
        status: status,
        date: date
      })
    } else {
      return res.status(400).json({ message: 'Attendance already marked for this date'})
    }
    res.status(200).json({ message: 'Attendance Done'})
})


app.get('/attendance', async (req, res) => {
    const AttendanceData = await Attendance.find({email: "a@gmail.com"})
  res.status(200).json({ message: 'Attendance Done', AttendanceData})
})

app.post('/apply', async (req, res) => {
  const { user, duty } = req.body;
  if (!user || !duty) {
    res.status(400).json({ message: 'Your or Customer data is required'});
  }

  const newApply = await JobberApply.create({
    user: user,
    duty: duty
  }) 

  if(!newApply) {
    res.status(400).json({ message: 'Apply failed'})
  }

  console.log(user.email, duty.name, duty.gender, duty.phone, duty.adhar, duty.role, duty.address);
  res.status(200).json({ message: 'Apply Done'})
})

app.post('/api/get-applied-duties', async (req, res) => {
  try {
    const data = await JobberApply.find(); // assuming model is called ApplyModel
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch duties' });
  }
});

app.post('/api/update-applied-duties/:id', async (req, res) => {
  const { id } = req.params;
  const { field } = req.body;

  // Validate field
  const validFields = ['isRead', 'hasCalled', 'isConfirmed'];
  if (!validFields.includes(field)) {
    return res.status(400).json({ success: false, message: 'Invalid field' });
  }

  try {
    const updated = await JobberApply.findByIdAndUpdate(
      id,
      { [field]: true },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Duty not found' });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    console.error('Error updating duty:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/vcare', async(req, res)=> {
    const { applier, email, name, phone, city, requirement } = req.body;
    console.log(applier, email, name, phone, city, requirement);
    res.status(200).json({ message: 'User Done'})
})



app.post('/api/get-user', async (req, res) => {
  const { userId } = req.cookies;
  const email = JSON.parse(userId).email;

  if (!email) return res.status(400).json({ error: 'Email required'});
  try {
    const user = await User.findOne({ email});
    if (!user) return res.status(404).json({error: 'User not found'});
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'server error'})
  }
  // const { email } = req.body;
  // if (!email) return res.status(400).json({ error: 'Email required' });

  // try {
  //   const user = await User.findOne({ email }); // adjust for your DB
  //   console.log('User:', user)
  //   if (!user) return res.status(404).json({ error: 'User not found' });

  //   res.json(user); // send full user data
  // } catch (err) {
  //   console.error('DB error:', err);
  //   res.status(500).json({ error: 'Server error' });
  // }
});

// app.post('/', (req, res) => {
//   const { email, password } = req.body;
//     res.cookie('userID', `${email}`, {
//        maxAge: 900000,
//        httpOnly: true,
//        sameSite: 'Lax'
//     })
//     res.status(200).json({ message: 'User data received successfully'})
// })

app.post('/applied', async (req, res) => {
    const { name, email, gender, phone, adhar, address, role } = req.body;
    console.log(name, email, gender, phone, adhar, address, role);
    const newUser = await Apply.create({
        name,
        email,
        gender,
        phone,
        adhar,
        address,
        role
    })

    res.status(200).json({ message : 'Apply User data received successfully'})
})

app.post('/vcare/callback', async (req, res) => {
    const {name, phone, city, requirement} = req.body;
    const newUser = await User.create({
        name,
        phone,
        city,
        requirement
    })
    console.log(name, phone, city, requirement);
    res.status(200).json({ message : 'Sign Up User data received successfully'})
})



// POST: Get all duties
app.post('/api/get-duties', async (req, res) => {
    try {
      const data = await Apply.find(); // assuming model is called ApplyModel
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch duties' });
    }
  });
  
  // POST: Update duty
// POST /api/update-duty/:id
app.post('/api/update-duty/:id', async (req, res) => {
    const { id } = req.params;
    const { field } = req.body;
  
    // Validate field
    const validFields = ['isRead', 'hasCalled', 'isConfirmed'];
    if (!validFields.includes(field)) {
      return res.status(400).json({ success: false, message: 'Invalid field' });
    }
  
    try {
      const updated = await Apply.findByIdAndUpdate(
        id,
        { [field]: true },
        { new: true }
      );
  
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Duty not found' });
      }
  
      res.json({ success: true, data: updated });
    } catch (err) {
      console.error('Error updating duty:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  
  

app.post('/vcare/member/login', (req, res) => {
    const { email, password} = req.body;
    console.log(email, password);
    res.status(200).json({ message: 'Member Login User data received successfully'})
    res.cookie('email', email, { maxAge: 900000})
})


app.post('/vcare/member/change-password', async (req, res) => {
    const { email, phone, name, currentPassword, newPassword } = req.body;
    console.log(email, phone, name, currentPassword, newPassword)
    // const userId = req.user.id; // e.g., from token/middleware
    // const user = await User.findById(userId);
    // const isMatch = await bcrypt.compare(currentPassword, user.password);
    // if (!isMatch) return res.status(400).json({ message: 'Incorrect current password' });
    // user.password = await bcrypt.hash(newPassword, 10);
    // await user.save();
    res.json({ message: 'Password changed successfully' });
  });
  

const otpStore = new Map(); // key: email or phone, value: { otp, expires }

app.post('/vcare/send-otp', (req, res) => {
  const { contact } = req.body;
  if (!contact) return res.status(400).json({ message: 'Contact is required' });

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit
  const expires = Date.now() + 5 * 60 * 1000; // 5 min expiry

  // Store OTP with expiry
  otpStore.set(contact, { otp, expires });

  // TODO: Send OTP via email/SMS here
  console.log(`OTP for ${contact} is ${otp}`);

  res.json({ message: 'OTP sent' });
});

app.post('/vcare/verify-otp', (req, res) => {
    const { contact, otp } = req.body;
    if (!contact || !otp) return res.status(400).json({ message: 'Missing fields' });
  
    const record = otpStore.get(contact);
    if (!record) return res.status(400).json({ message: 'OTP not found' });
  
    if (record.expires < Date.now()) {
      otpStore.delete(contact);
      return res.status(400).json({ message: 'OTP expired' });
    }
  
    if (record.otp != otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  
    // Success – OTP verified
    otpStore.delete(contact); // Clean up after success
    res.json({ message: 'OTP verified' });
  });
  

app.post('/vcare/reset-password', (req, res) => {
    res.status(200).json({ message : "Forgot Password User data received successfully"})
})

app.get('/vcare/newusers', async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
})

app.post('/vcare/forgot-password', (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(200).json({ message : 'Forgot Password User data received successfully'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})