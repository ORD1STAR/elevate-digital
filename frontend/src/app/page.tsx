import Hero from "@/components/layout/Hero";
import WhoAreWe from "@/components/layout/WhoAreWe";
import Services from "@/components/layout/Services";
import Feedbacks from "@/components/layout/Feedbacks";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoAreWe />
      <Services />
      <Feedbacks />
      
      {/* Contact section will follow */}
      <section className="py-24 bg-brand-bg-dark/50">
        <div className="container mx-auto px-6 text-center">
          <div className="glassy rounded-[4rem] p-20 border border-white/5 shadow-2xl">
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">Ready to Elevate <br /> Your Business?</h2>
            <button className="px-12 py-5 rounded-full bg-white text-[#063188] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
