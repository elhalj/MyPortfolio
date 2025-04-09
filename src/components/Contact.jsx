import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: "wilsonikedakoffi7@gmail.com",
    };
    emailjs.send(
      'service_2j4m9j4',
      'template_6j4m9j4',
      templateParams,
      'user_5X3vQvqXlYhLsJcZJhO6F'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setForm({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="name">Nom</label>
          <input name="name" onChange={handleChange} type="text" id="name" className="border border-gray-300 p-2 rounded-md" />
          <label htmlFor="email">Email</label>
          <input name="email" onChange={handleChange} type="email" id="email" className="border border-gray-300 p-2 rounded-md" />
          <label htmlFor="message">Message</label>
          <textarea name="message" onChange={handleChange} id="message" className="border border-gray-300 p-2 rounded-md" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Envoyer</button>
        </form>

        <div className="flex flex-col md:flex-row justify-evenly items-center mt-4">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-semibold">Social Media</h2>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="text-blue-600 text-2xl cursor-pointer" />
              <FaInstagram className="text-pink-600 text-2xl cursor-pointer" />
              <FaLinkedinIn className="text-blue-700 text-2xl cursor-pointer" />
              <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-center">Email Us</h2>
            <div className="flex items-center gap-2 mt-4">
              <MdOutlineMail className="text-red-500 text-2xl" />
              <p>wilsonikedakoffi7@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-center">Address</h2>
          <p className="text-center mt-2">27 Yop Ile Boulay, Abidjan</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
