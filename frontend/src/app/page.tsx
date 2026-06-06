import Hero from "@/components/layout/Hero";
import WhoAreWe from "@/components/layout/WhoAreWe";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoAreWe />
      
      {/* Services, Feedbacks, and Contact sections will follow */}
      <section className="py-20 bg-brand-bg-dark/50">
        <div className="container mx-auto px-6">
          <div className="glassy rounded-[3rem] p-20 text-center border border-white/5">
            <h2 className="text-4xl font-black text-white mb-6">Experience the Best Social Media Boosts</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Stay tuned as we launch our full service catalog and customer feedback gallery.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
