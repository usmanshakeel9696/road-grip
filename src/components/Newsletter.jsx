function Newsletter() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded mr-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
    </section>
  );
}

export default Newsletter;
