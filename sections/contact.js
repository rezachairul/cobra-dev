// sections/contact.js

// Import 


// Export
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="grid gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border p-3 rounded-lg"
        ></textarea>

        <button className="bg-black text-white py-3 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}