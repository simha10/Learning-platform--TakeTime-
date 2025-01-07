import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmissionStatus('error');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          apikey: '64a405da-a825-4dab-a507-d4108df4da60',
          subject: 'New Submission from Web3Forms',
          redirect: 'https://yourwebsite.com/thank-you',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">simhachalammandapudi@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">+91 8639445966</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-300">123 Learning Street, Education City, 12345</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in border border-gray-700">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600                  text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                aria-label="Send message"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            {submissionStatus === 'success' && (
              <div className="mt-4 text-green-500 text-center" aria-live="polite">
                Message sent successfully!
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="mt-4 text-red-500 text-center" aria-live="assertive">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}