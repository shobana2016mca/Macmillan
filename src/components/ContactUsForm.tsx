'use client';

import { FormEvent, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // import { useState } from 'react'; // Add this import statement

  const handleChange = (e: FormEvent): any => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
    setFormErrors({ ...formErrors, [target.name]: '' }); // Clear error when user starts typing
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let errors = {} as any;

    // Validation logic
    if (formData.firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }
    if (formData.lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (formData.message.trim() === '') {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      // Proceed with form submission
      console.log(formData);
    } else {
      // Update formErrors state with validation errors
      setFormErrors(errors);
    }
  };

  const isValidEmail = (email: any) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='firstName'
          className='block text-gray-700 font-bold mb-2'>
          First Name
        </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formErrors.firstName && 'border-red-500'
          }`}
          required
        />
        {formErrors.firstName && (
          <p className='text-red-500 text-xs italic'>{formErrors.firstName}</p>
        )}
      </div>
      <div className='mb-4'>
        <label
          htmlFor='lastName'
          className='block text-gray-700 font-bold mb-2'>
          Last Name
        </label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formErrors.lastName && 'border-red-500'
          }`}
          required
        />
        {formErrors.lastName && (
          <p className='text-red-500 text-xs italic'>{formErrors.lastName}</p>
        )}
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            formErrors.email && 'border-red-500'
          }`}
          required
        />
        {formErrors.email && (
          <p className='text-red-500 text-xs italic'>{formErrors.email}</p>
        )}
      </div>
      <div className='mb-6'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none ${
            formErrors.message && 'border-red-500'
          }`}
          required
        />
        {formErrors.message && (
          <p className='text-red-500 text-xs italic'>{formErrors.message}</p>
        )}
      </div>
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
