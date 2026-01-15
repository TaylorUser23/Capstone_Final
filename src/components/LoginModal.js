import React, { useState, useEffect } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Validation and UI State
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset form when modal opens/closes or toggles between login/register
  useEffect(() => {
    setFormData({ fullName: '', email: '', password: '' });
    setErrors({});
    setShowSuccess(false);
  }, [isOpen, isLoginView]);

  const validateForm = () => {
    let newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Name validation (only for Registration)
    if (!isLoginView && !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // If validation passes
      setShowSuccess(true);
      
      // Auto-close modal after 2 seconds so they can see the success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
        
        {/* Success Popup Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 z-[120] bg-white rounded-lg flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {isLoginView ? 'Login Successful!' : 'Account Created!'}
            </h3>
            <p className="text-gray-600 mt-2">Welcome to Little Lemon!</p>
          </div>
        )}

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl">✕</button>

        <h2 className="text-3xl font-bold text-green-800 mb-6">
          {isLoginView ? 'Login' : 'Create Account'}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLoginView && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input 
                name="fullName"
                type="text" 
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600`}
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              name="password"
              type="password" 
              value={formData.password}
              onChange={handleChange}
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 rounded hover:bg-green-800 transition-colors mt-4">
            {isLoginView ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>
            {isLoginView ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLoginView(!isLoginView)} 
              className="text-green-700 font-bold hover:underline"
            >
              {isLoginView ? 'Create Account' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;