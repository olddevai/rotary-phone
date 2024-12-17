import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn } from '../../utils/motion';

export const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        to_name: 'Your Name',
        from_email: form.email,
        to_email: 'your@email.com',
        message: form.message,
      },
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
        <div className="relative">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            className="w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-white"
          />
          <span className="absolute h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 bottom-0 left-0 transition-all duration-300 group-focus-within:w-full" />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Your Email"
            className="w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="relative">
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your Message"
            className="w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none transition-all duration-300 focus:ring-2 focus:ring-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};