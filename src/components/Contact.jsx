import React from 'react'
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // IMPORTANT: These IDs should be stored in environment variables for security.
    const serviceID = 'service_2j4m9j4';
    const templateID = 'template_6j4m9j4';
    const userID = 'user_5X3vQvqXlYhLsJcZJhO6F';

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: "wilsonikedakoffi7@gmail.com",
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Rendez-vous au debut de la page pour mecrire sur mes differents reseaux.');
      });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Contactez-moi</h2>
        <p className="text-lg text-gray-400 mt-2">N'hésitez pas à me laisser un message.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg transform transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Envoyer le Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
