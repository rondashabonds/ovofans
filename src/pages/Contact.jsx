import React from "react";
import "../styles/contact.css"; 

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // put your real Web3Forms key here
    formData.append("access_key", "5243af34-9a10-457c-9eb9-3005b1d4fc7a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Contact OVO Fans</h2>
        <p className="contact-sub">
          Business inquiries, collabs, or just wanna talk Drake.
        </p>

        <form className="contact-form" onSubmit={onSubmit}>
          <label className="field">
            <span>Name *</span>
            <input type="text" name="name" required placeholder="Your name" />
          </label>

          <label className="field">
            <span>Email *</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </label>

          <label className="field">
            <span>Message *</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us what's up..."
            />
          </label>

          <button className="submit-btn" type="submit">
            Submit Form
          </button>

          <span className="form-status" role="alert">
            {result}
          </span>
        </form>
      </div>
    </section>
  );
}

