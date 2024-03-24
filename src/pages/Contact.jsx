import { useState, lazy, Suspense } from 'react';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const GlobeNew = lazy(() => import('../components/GlobeNew'));

const Contact = ({ isMobile }) => {
  const [formUsername, setFormUsername] = useState('');
  const [formUserEmail, setFormUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formUserEmail.trim()) {
      setError('Email is required');
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formUserEmail)) {
      setError('Invalid email address');
      return false;
    }
    setError('');
    return true;
  };

  const getEmailDomain = (email) => {
    const [, domain] = email.split('@');
    return domain.toLowerCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const recipient = 'hrithikgupta52@gmail.com'; // Replace with the recipient's email address
      let redirectUrl = '';

      const domain = getEmailDomain(formUserEmail);
      console.log(domain)
      switch (domain) {
        case 'gmail.com':
        case 'google.com':
          redirectUrl = 'https://mail.google.com/mail/?view=cm&fs=1';
          break;
        case 'yahoo.com':
          redirectUrl = 'https://compose.mail.yahoo.com/';
          break;
        case 'outlook.com':
          redirectUrl = 'https://outlook.live.com/mail/0/deeplink/compose?';
          break;
        default:
          redirectUrl = `https://mail.${domain}`;
          break;
      }
      console.log(redirectUrl)

      const subjectEncoded = encodeURIComponent(subject);
      const messageEncoded = encodeURIComponent(
        `Hi,
My name is ${formUsername},

I hope this email finds you well.

Here is the message:

${message}

Regards,
${formUsername}`
      );
      const emailUrl = `${redirectUrl}&to=${recipient}&subject=${subjectEncoded}&body=${messageEncoded}`;
      console.log(emailUrl)
      window.open(emailUrl, '_blank');
    }
  };

  return (
    <section id='contact' className='sm:min-h-[80vh] my-3 relative overflow-hidden'>
      <div className=" absolute inset-0 z-0 dark:block hidden">
        <Canvas>
          <Stars radius={100} depth={100} count={5000} factor={5} saturation={0} fade speed={2} />
        </Canvas>
      </div>
      <h2 className="text-3xl font-bold mb-8 z-10">Contact Me</h2>
      <div className='w-full flex flex-col-reverse sm:flex-row max-h-[500px] z-10 relative'>
        <div className='dark:bg-transparent dark:border dark:border-gray-500/50 w-full sm:w-1/2 bg-slate-400/60 rounded-lg p-5 flex flex-col gap-2 backdrop-blur-[2px]'>
          <form onSubmit={handleSubmit}>
            <div className=' my-6'>
              <input
                className='w-full px-4 py-2 text-black bg-white dark:text-white dark:bg-[#3c3c3c] border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                type="text"
                id="name"
                placeholder='Your Name'
                required
                value={formUsername}
                onChange={(e) => setFormUsername(e.target.value)}
              />
            </div>
            <div className=' my-6'>
              <input
                className='w-full px-4 py-2 text-black bg-white dark:text-white dark:bg-[#3c3c3c] border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                type="email"
                id="email"
                placeholder='Your Email'
                required
                value={formUserEmail}
                onChange={(e) => setFormUserEmail(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className=' my-6'>
              <input
                className='w-full px-4 py-2 text-black bg-white dark:text-white dark:bg-[#3c3c3c] border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                type="text"
                id="subject"
                placeholder='Subect for mail'
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className=' my-6'>
              <textarea
                className='w-full px-4 py-2 text-black bg-white dark:text-white dark:bg-[#3c3c3c] border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                id="message"
                placeholder='Message'
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='flex justify-end'>
              <button
                className="bg-yellow-400 text-black sm:mt-5 w-fit px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none focus:border-2 focus:border-blue-500"
                type="submit"
              >
                Send&nbsp;Email
              </button>
            </div>
          </form>
        </div>
        {isMobile ? null :
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <GlobeNew isMobile={isMobile} />
            </Suspense>
          </>
        }

      </div>
    </section>
  );
};

export default Contact;
