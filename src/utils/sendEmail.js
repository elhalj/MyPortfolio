export const sendEmail = ({ form }) => {
  // Replace with your EmailJS service ID, template ID, and user ID
  const serviceID = "your_service_id";
  const templateID = "your_template_id";
  const userID = "your_user_id";

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    message: form.message,
    to_email: "wilsonikedakoffi7@gmail.com",
  };

  window.emailjs
    .send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Failed to send email.", error);
    });
};
