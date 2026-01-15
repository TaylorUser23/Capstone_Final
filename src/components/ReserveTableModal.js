import React, { useState } from 'react';

// Reserve Table Modal Component
const ReserveTableModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        return '';
      
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      
      case 'phone':
        if (!value.trim()) {
          return 'Phone number is required';
        }
        const phoneRegex = /^[\d\s\-()]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
          return 'Please enter a valid phone number (at least 10 digits)';
        }
        return '';
      
      case 'date':
        if (!value) {
          return 'Date is required';
        }
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          return 'Please select a future date';
        }
        return '';
      
      case 'time':
        if (!value) {
          return 'Time is required';
        }
        return '';
      
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, formData[name]);
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = () => {
    // Validate all fields
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      date: true,
      time: true
    });

    if (isValid) {
      alert(`Reservation confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\n\nWe look forward to seeing you!`);
      onClose();
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
      });
      setErrors({});
      setTouched({});
    }
  };

  if (!isOpen) return null;

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
    >
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close reservation form"
        >
          ×
        </button>
        <h2 id="reservation-title" className="text-2xl font-bold text-gray-800 mb-6">Reserve a Table</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
              Name <span className="text-red-600" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.name && touched.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-green-600'
              }`}
              aria-required="true"
              aria-invalid={errors.name && touched.name ? 'true' : 'false'}
              aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
            />
            {errors.name && touched.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
              Email <span className="text-red-600" aria-label="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.email && touched.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-green-600'
              }`}
              aria-required="true"
              aria-invalid={errors.email && touched.email ? 'true' : 'false'}
              aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
            />
            {errors.email && touched.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
              Phone <span className="text-red-600" aria-label="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="(123) 456-7890"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.phone && touched.phone
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-green-600'
              }`}
              aria-required="true"
              aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
              aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
            />
            {errors.phone && touched.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="date">
              Date <span className="text-red-600" aria-label="required">*</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              onBlur={handleBlur}
              min={today}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.date && touched.date
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-green-600'
              }`}
              aria-required="true"
              aria-invalid={errors.date && touched.date ? 'true' : 'false'}
              aria-describedby={errors.date && touched.date ? 'date-error' : undefined}
            />
            {errors.date && touched.date && (
              <p id="date-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="time">
              Time <span className="text-red-600" aria-label="required">*</span>
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errors.time && touched.time
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-green-600'
              }`}
              aria-required="true"
              aria-invalid={errors.time && touched.time ? 'true' : 'false'}
              aria-describedby={errors.time && touched.time ? 'time-error' : undefined}
            />
            {errors.time && touched.time && (
              <p id="time-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.time}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="guests">
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-800 text-white py-3 rounded hover:bg-green-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReserveTableModal;