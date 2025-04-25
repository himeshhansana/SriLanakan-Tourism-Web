import React, { useState } from 'react';
import { CalendarIcon, UsersIcon } from 'lucide-react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDates: '',
    groupSize: '',
    interests: [],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      checked
    } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value]
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        };
      }
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      travelDates: '',
      groupSize: '',
      interests: [],
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return <div className="bg-white p-6 rounded-lg shadow-md">
      {submitted ? <div className="text-center py-8">
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p>
              Your message has been submitted successfully. Our team will
              contact you shortly.
            </p>
          </div>
          <button onClick={() => setSubmitted(false)} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
            Send Another Message
          </button>
        </div> : <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name *
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address *
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="travelDates" className="block text-gray-700 font-medium mb-2">
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-green-600" />
                  Preferred Travel Dates
                </div>
              </label>
              <input type="text" id="travelDates" name="travelDates" placeholder="MM/DD/YYYY - MM/DD/YYYY" value={formData.travelDates} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label htmlFor="groupSize" className="block text-gray-700 font-medium mb-2">
                <div className="flex items-center">
                  <UsersIcon className="w-5 h-5 mr-2 text-green-600" />
                  Group Size
                </div>
              </label>
              <select id="groupSize" name="groupSize" value={formData.groupSize} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Select group size</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3-5">3-5 people</option>
                <option value="6-10">6-10 people</option>
                <option value="10+">More than 10 people</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Interests (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <label className="flex items-center">
                <input type="checkbox" name="interests" value="cultural" checked={formData.interests.includes('cultural')} onChange={handleCheckboxChange} className="mr-2 h-5 w-5 text-green-600" />
                Cultural Sites
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="interests" value="wildlife" checked={formData.interests.includes('wildlife')} onChange={handleCheckboxChange} className="mr-2 h-5 w-5 text-green-600" />
                Wildlife & Nature
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="interests" value="beaches" checked={formData.interests.includes('beaches')} onChange={handleCheckboxChange} className="mr-2 h-5 w-5 text-green-600" />
                Beaches
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="interests" value="adventure" checked={formData.interests.includes('adventure')} onChange={handleCheckboxChange} className="mr-2 h-5 w-5 text-green-600" />
                Adventure Activities
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="interests" value="food" checked={formData.interests.includes('food')} onChange={handleCheckboxChange} className="mr-2 h-5 w-5 text-green-600" />
                Food & Culinary
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="interests" value="wellness" checked={formData.interests.includes('wellness')} onChange={handleCheckboxChange} className="mr-2 h-5 w-5 text-green-600" />
                Wellness & Ayurveda
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message *
            </label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required placeholder="Please tell us about your travel plans and any specific requirements..."></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Send Message
            </button>
          </div>
        </form>}
    </div>;
};
export default ContactForm;