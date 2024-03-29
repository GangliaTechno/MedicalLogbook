import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Image from '../../Components/Assets/photo/login.mp4';

const Loginform = () => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });

 

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });

    // Play the video when the email input is clicked
    if ((e.target.name === 'email' || e.target.name === 'password') && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleBlur = () => {
    // Pause the video when the email input loses focus
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // const handleSubmit = async (e) => {

  //   e.preventDefault();

  //   // Basic validation
  //   const newErrors = {};
  //   if (!formData.emailId.trim()) {
  //     newErrors.emailId = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
  //     newErrors.emailId = 'Invalid email format';
  //   }
  //   if (!formData.password.trim()) {
  //     newErrors.password = "Password is required";
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:8000/admin/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Login successful');
  //       navigate('/Adminhomepage');
  //     } else {
  //       const responseData = await response.json();
  //       setErrors(responseData.errors || {});
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }

  //   console.log("Login data submitted:", formData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Basic validation
  //   const newErrors = {};
  //   if (!formData.emailId.trim()) {
  //     newErrors.emailId = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
  //     newErrors.emailId = 'Invalid email format';
  //   }
  //   if (!formData.password.trim()) {
  //     newErrors.password = "Password is required";
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:8000/faculty/faculty-login', { // Assuming '/faculty/login' is your backend endpoint for faculty login
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Login successful');
  //       navigate('/Facultyhomepage'); // Redirect to faculty homepage upon successful login
  //     } else {
  //       const responseData = await response.json();
  //       setErrors(responseData.errors || {});
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }

  //   console.log("Login data submitted:", formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const adminEmails = ['admin123@gmail.com', 'john@example.com'];
  
    // Basic validation
    const newErrors = {};
    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
      newErrors.emailId = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      let endpoint;
      if (adminEmails.includes(formData.emailId.trim())) {
        endpoint = 'http://localhost:8000/admin/login';
      } else {
        endpoint = 'http://localhost:8000/faculty/faculty-login';
      }
  
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Login successful');
        if (endpoint === 'http://localhost:8000/admin/login') {
          navigate('/Adminhomepage');
        } else {
          navigate('/Facultyhomepage');
        }
      } else {
        const responseData = await response.json();
        setErrors(responseData.errors || {});
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  
    console.log("Login data submitted:", formData);
  };
  

  const isForgotPasswordVisible = !['admin123@gmail.com', 'john@example.com'].includes(formData.emailId.toLowerCase());

  return (
    <section className="bg-blue-500 min-h-screen flex items-center justify-center p-5">
      <div className="bg-blue-900 flex rounded-2xl 
      shadow-lg max-w-3xl p-4">
        {/* form */}
        <div className="sm:w-1/2 px-14">
          <h2 className="font-bold text-2xl text-blue-100 my-4">Login</h2>
          <form action=""  onSubmit={handleSubmit}  >
            <label className="flex text-xl text-blue-100 -mb-6">
            Email
            </label>
            <input
              className="w-full my-4 text-blue-950 sm:w-64 px-3 py-2 border rounded sm:mb-0"
              type="text"
              placeholder="Enter your email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.emailId && <div className="text-red-500">{errors.emailId
            }</div>}

            <label className="flex text-xl text-blue-100">
            Password
            </label>
            <input
              className="w-full text-blue-950 sm:w-64 px-3 py-2 border rounded"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}

            {isForgotPasswordVisible && (
              <button
                type="button"
                className="my-4 w-auto text-sm bg-white ml-1 text-black rounded"
              >
                Forgot Password
              </button>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-sm w-auto h-15 text-center ml-3 rounded-md"
            >
              Login
            </button>



          </form>
        </div>
        {/* image */}
        <div className="w-1/2 sm:block hidden">
          <video ref={videoRef} className="rounded-2xl" autoPlay volume={1}>
            <source src={Image} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Loginform;