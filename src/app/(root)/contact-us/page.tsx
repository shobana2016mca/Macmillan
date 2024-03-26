import Contact from '@/components/ContactUs';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div>
      {/* <div className="relative h-80 w-full bg-purple-900 opacity-80 blur-sm">
        <Image src={"/aboutbg.jpg"} alt="img" fill />
      </div> */}

      <div className='relative items-center w-full justify-center h-80 overflow-hidden'>
        <iframe
          title='map'
          className='rounded-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.55004656523!2d-0.24168174873147507!3d51.528771840981686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce9da7e795%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1648155104041!5m2!1sen!2suk'
          width='100%'
          height='650'
          loading='lazy'></iframe>
      </div>

      <div className='container mx-auto px-4 m-20'>
        <div className='flex flex-col sm:flex-row'>
          <div className='md:w-3/4 sm:w-1/2 p-4'>
            <h1 className='px-4 text-3xl font-bold mb-6'>
              Contact <span className='text-[#4e007a] '>Us</span>
            </h1>
            <p className='px-4'>
              Donec id diam ut nunc euismod elementum. Curabitur condimentum
              mauris eget condimentum faucibus. Maecenas hendrerit viverra
              congue. Nunc eget magna nisi. Proin sed odio eget metus vestibulum
              tempus.
            </p>
            <div className='container mx-auto px-4 mt-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='p-4 text-[#4e007a] font-bold'>
                  Address
                  <p className='text-black font-medium'>
                    88 Crown Street, London, WC1B 2JR
                  </p>
                </div>
                <div className='p-4  text-[#4e007a] font-bold'>
                  Call
                  <p className='text-black font-medium'>
                    +1 899 325 8533 +44 534 643 2544
                  </p>
                </div>
                <div className='p-4  text-[#4e007a] font-bold'>
                  Email
                  <p className='text-black font-medium'>
                    contact@recruitment.com
                  </p>
                </div>
              </div>
            </div>
            {/* <ContactForm /> */}
            <Contact />
          </div>

          <div className='md:w-1/4 sm:w-1/2 p-4 bg-[#4e007a]'>
            <p className='text-white text-3xl text-center font-semibold py-6 px-12'>
              Upload Your CV
            </p>
            <p className='text-white text-lg text-center px-10 mb-10'>
              Upload your CV to apply for as many jobs as you like.
            </p>
            <button className='bg-white text-[#4e007a] font-bold text-sm py-2 px-4 ml-16 rounded-lg'>
              <small className={'sr-only'}>UPLOAD YOUR CV</small>
              <Link href='#'>UPLOAD YOUR CV</Link>
            </button>
            <div className='relative h-32 w-32'>
              <div className='absolute bottom-0 ml-56 h-16 w-16'>
                <Image src={'/cv.png'} height={700} width={600} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
