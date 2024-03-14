import React, { useState } from 'react';

const Contact = () => {
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
      const recipient = 'aec.ece.hrithikgupta.2024.123@gmail.com'; // Replace with the recipient's email address
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

  // console.log(formUserEmail)

  return (
    <section id='contact' className='flex sm:flex-col sm:justify-center sm:min-h-[70vh]'>
      <div className='sm:w-1/2 w-full'>
        <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
        <div className='dark:bg-slate-300/15 bg-slate-300/60 rounded-md p-5 my-2 flex flex-col gap-2'>
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
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='flex justify-end'>
              <button
                className="bg-yellow-400 text-black mt-5 w-fit px-4 py-2 rounded-full hover:bg-yellow-500 focus:outline-none focus:border-2 focus:border-blue-500"
                type="submit"
              >
                Send&nbsp;Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
