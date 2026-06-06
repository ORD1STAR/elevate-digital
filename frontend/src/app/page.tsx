import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Other sections will be added here */}
      
      {/* Spacer for scroll visibility */}
      <section className="h-[200vh] container mx-auto px-6 py-20">
        <div className="glassy bubbly-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">More Content Coming Soon</h2>
          <p>We are building the Who Are We, Services, and Feedback sections...</p>
        </div>
      </section>
    </main>
  );
}
