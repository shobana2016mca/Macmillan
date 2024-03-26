'use client';

import { createContact } from '@/libs/contactAction';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const formData = new FormData();
    formData.set('firstName', data.firstName);
    formData.set('lastName', data.lastName);
    formData.set('email', data.email);
    formData.set('message', data.message);

    const result = await createContact(formData);
    console.log(result); // Update the type of the parameter
    if (result.status === 'success') {
      toast.success('Message sent successfully');
    } else {
      toast.error('Failed to send message');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label
          htmlFor='firstName'
          className='block text-gray-700 font-bold mb-2'>
          First Name
        </label>
        <input
          type='text'
          id='firstName'
          // name='firstName'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          defaultValue={''}
          {...register('firstName', {
            required: 'This field is required',
          })}
        />
      </div>
      {errors.firstName && (
        <p className='text-red-500 text-xs italic'>
          {errors.firstName.message}
        </p>
      )}
      <div className='mb-4'>
        <label
          htmlFor='lastName'
          className='block text-gray-700 font-bold mb-2'>
          Last Name
        </label>
        <input
          type='text'
          id='lastName'
          // name='lastName'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
          defaultValue={''}
          {...register('lastName', {
            required: 'This field is required',
          })}
        />
      </div>
      {errors.lastName && (
        <p className='text-red-500 text-xs italic'>{errors.lastName.message}</p>
      )}
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          // name='email'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          defaultValue={''}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
      </div>
      {errors.email && (
        <p className='text-red-500 text-xs italic'>{errors.email.message}</p>
      )}
      <div className='mb-6'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          // name='message'
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none`}
          defaultValue={''}
          {...register('message', {
            required: 'This field is required',
          })}
        />
      </div>
      {errors.message && (
        <p className='text-red-500 text-xs italic'>{errors.message.message}</p>
      )}
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Submit
        </button>
      </div>
    </form>
  );
}
