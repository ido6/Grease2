'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <Header />
            <main className="flex flex-col gap-8">
              <section className="rounded-xl p-8 md:p-12 bg-section-light dark:bg-section-dark">
                <h1 className="text-3xl font-bold font-display mb-4">צור קשר</h1>
                <p className="text-lg font-body mb-6">נשמח לשמוע ממך! אפשר ליצור קשר דרך הטופס.</p>
                <div className="flex flex-col gap-6 max-w-xl">
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                    <input className="rounded-lg h-12 px-4" placeholder="שם מלא" autoComplete="name" required />
                    <input className="rounded-lg h-12 px-4" placeholder="אימייל" type="email" autoComplete="email" inputMode="email" />
                    <textarea className="rounded-lg min-h-32 px-4 py-3" placeholder="הודעה" required />
                    <button type="submit" className="rounded-lg h-12 bg-primary font-display font-bold active:scale-95 transition-transform">שליחה</button>
                  </form>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}


