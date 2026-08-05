export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Let's Talk</h2>
      <p className="contact-subtext">
        Have a project in mind? Drop me a message and let's build something great together.
      </p>

      <form
        className="contact-form"
        action="https://formspree.io/f/myzjavdo"
        method="POST"
      >
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Pappu Dey"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="hello@example.com"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          Send Message →
        </button>
      </form>
    </section>
  );
}
