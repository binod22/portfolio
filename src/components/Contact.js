import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    emailjs.init("tiHL0g85LDVQUWObY"); // Replace with your actual public key
  }, []);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    emailjs
      .send(
        'service_0eco9i8', // Your EmailJS service ID
        'template_4rxup6t', // Your EmailJS template ID
        {
          from_name: form.name,
          to_name: 'Binod Regmi',
          from_email: form.email,
          to_email: 'regbinod22@gmail.com',
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`
        }
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setError('Something went wrong. Please try again.');
        console.error('Error:', error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textSecondary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textSecondary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textSecondary mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary min-h-[150px]"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
                {success && (
                  <span className="text-green-500">Message sent successfully!</span>
                )}
                {error && <span className="text-red-500">{error}</span>}
              </div>
            </form>
            <div className="mt-12 text-center">
              <p className="text-textSecondary mb-4">Or reach me directly at:</p>
              <a
                href="mailto:regbinod22@gmail.com"
                className="text-secondary hover:text-tertiary transition-colors"
              >
                regbinod22@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
