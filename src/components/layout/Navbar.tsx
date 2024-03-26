'use client';

import { useScreensize } from '@/hooks/useScreensize';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Sidebar from './Sidebar';

export default function Navbar() {
  const { isMobile } = useScreensize();

  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Form validation logic here
    if (!username.trim()) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        username: 'Username is required',
      }));
    } else if (!password.trim()) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
    } else {
      // Form submission logic here
      console.log('Form submitted:', { username, password });
      // Clear form fields and errors after successful submission
      setUsername('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <nav className='border-2 relative sticky top-0 bg-white z-50'>
      <div className='md:mx-20 flex items-center justify-between'>
        <div className='flex items-center gap-12 justify-between md:justify-normal w-full'>
          <Link href={'/'}>
            <Image src={'/logo.jpeg'} alt='logo' height={80} width={110} />
          </Link>

          {!isMobile && (
            <ul className='flex items-center gap-8'>
              <Link
                href={'/'}
                className='hover:text-blue-500 transition-all duration-300'>
                Home
              </Link>
              <Link
                href={'/about-us'}
                className='hover:text-blue-500 transition-all duration-300'>
                About
              </Link>

              <Link
                href={'/contact-us'}
                className='hover:text-blue-500 transition-all duration-300'>
                Contact Us
              </Link>
            </ul>
          )}
        </div>

        <div className='flex items-center gap-8 w-full justify-end flex-grow pr-8 md:pr-0'>
          <div className=' flex items-center gap-2 transition-all duration-300 cursor-pointer'>
            {isMobile && (
              <button className='mr-2 hover:text-blue-500' onClick={toggleOpen}>
                {open ? <IoMdClose size={28} /> : <FiMenu size={28} />}
              </button>
            )}
            {!isMobile && <span className='text-sm'>LOGIN/REGISTER</span>}
            <button onClick={toggleOpenLogin}>
              <Image
                src={
                  'https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/icon-login.png'
                }
                alt='login'
                height={30}
                width={30}
              />
            </button>

            {openLogin ? (
              <div className='absolute top-20 right-10 w-80 min-h-40 bg-white p-4 shadow rounded'>
                <h2 className='text-lg text-bold text-center font-extrabold text-[#4e007a]'>
                  Login Using Account
                </h2>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
  
    
    <div className="flex gap-2 w-80">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded w-full">candidate</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  p-2 rounded w-full">candidate</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded w-full">candidate</button>
</div> 
  
</div> */}

                <div className='flex flex-wrap pt-6'>
                  <div className='w-full sm:w-1/2 md:w-1/3 px-2 mb-2 '>
                    {' '}
                    <button className='bg-[#ebeef0] hover:text-purple-700 text-[#bfc0c0] rounded border-2 w-full text-sm'>
                      Candidate
                    </button>
                  </div>
                  <div className='w-full sm:w-1/2 md:w-1/3 px-2 mb-2 '>
                    {' '}
                    <button className='bg-[#ebeef0] hover:text-purple-700 text-[#bfc0c0] rounded border-2 w-full text-sm'>
                      Employeer
                    </button>
                  </div>{' '}
                  <div className='w-full sm:w-1/2 md:w-1/3 px-2 mb-2'>
                    {' '}
                    <button className='bg-[#ebeef0] hover:text-purple-700 text-[#bfc0c0] rounded border-2 w-full text-sm'>
                      Admin
                    </button>
                  </div>
                </div>
                <h3 className='text-lg text-center font-extrabold text-[#4e007a] mt-4 mb-4'>
                  Existing User Login Below
                </h3>

                <div>
                  <div className='flex justify-center items-center'>
                    {/* <form className="w-full max-w-xs">
    <div className="mb-4">
      
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form> */}
                    <form className='w-full max-w-xs' onSubmit={handleSubmit}>
                      <div className='mb-4'>
                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.username ? 'border-red-500' : ''
                          }`}
                          id='username'
                          type='text'
                          placeholder='Username'
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.username}
                          </p>
                        )}
                      </div>
                      <div className='mb-6'>
                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.password ? 'border-red-500' : ''
                          }`}
                          id='password'
                          type='password'
                          placeholder='Password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.password}
                          </p>
                        )}
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                          <input
                            type='checkbox'
                            id='checkbox'
                            className='form-checkbox h-5 w-5 text-blue-600'
                          />
                          <label className='ml-2 text-gray-700'>
                            Remember Me
                          </label>
                        </div>

                        <a
                          className='inline-block align-baseline  text-sm text-blue-500 hover:text-blue-800'
                          href='#'>
                          Forgot Password?
                        </a>
                      </div>
                      <div className='flex items-center justify-between mt-10'>
                        <button
                          className='bg-[#4e007a] hover:bg-[#000000] text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline'
                          type='submit'>
                          LOGIN
                        </button>
                        <button
                          className='border-2 border-[#4e007a] hover:bg-[#000000] hover:text-white text-[#4e007a] font-bold py-2 px-6 rounded inline-flex items-center'
                          type='submit'>
                          REGISTER
                        </button>
                      </div>

                      <div></div>
                    </form>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className='hover:text-blue-500 flex items-center gap-2 transition-all duration-300 cursor-pointer relative'>
            {!isMobile && <span className='text-sm'>JOB BASKET</span>}
            <Image
              src={
                'https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/icon-cart.png'
              }
              alt='login'
              height={30}
              width={30}
            />

            <div className='flex items-center justify-center absolute border-2 rounded-full -top-3 -right-2 w-5 h-5 text-xs border-[#4e007a]'>
              0
            </div>
          </div>
        </div>

        {isMobile && <Sidebar open={open} toggleOpen={toggleOpen} />}
      </div>
    </nav>
  );
}
