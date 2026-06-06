import Hero from "@/components/layout/Hero";
import WhoAreWe from "@/components/layout/WhoAreWe";
import Services from "@/components/layout/Services";
import Feedbacks from "@/components/layout/Feedbacks";
import ContactUs from "@/components/layout/ContactUs";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Footer' });

  return (
    <main className="mesh-gradient min-h-screen">
      <Hero />
      <WhoAreWe />
      <Services />
      <Feedbacks />
      <ContactUs />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-brand-bg-dark/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <Image src="/logo.jpg" alt="Elevate Digital" fill className="object-cover" />
              </div>
              <span className="font-bold text-lg text-white">Elevate Digital</span>
            </div>
            
            <p className="text-white/40 text-sm font-medium">
              {t('rights')}
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors">{t('instagram')}</a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors">{t('facebook')}</a>
              <a href="#" className="text-white/60 hover:text-brand-accent transition-colors">{t('tiktok')}</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
