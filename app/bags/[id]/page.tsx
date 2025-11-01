'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BAGS } from '@/lib/data';

export default function BagDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = BAGS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
              <Header />
              <main className="flex flex-col gap-8 items-center justify-center min-h-[60vh]">
                <h1 className="text-3xl font-bold font-display">מוצר לא נמצא</h1>
                <p className="text-lg font-body mb-4">המוצר שחיפשת אינו קיים.</p>
                <Link href="/bags" className="px-6 py-3 bg-primary text-text-light rounded-lg font-bold hover:brightness-90 transition-all">
                  חזרה לקטלוג תיקים
                </Link>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sizeLabels = {
    small: 'קטן',
    medium: 'בינוני',
    large: 'גדול'
  };

  const materialLabels = {
    leather: 'עור',
    woven: 'קלוע',
    fabric: 'בד'
  };

  const colorLabels = {
    brown: 'חום',
    beige: 'בז׳',
    black: 'שחור'
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <Header />
            <main className="flex flex-col gap-8">
              {/* Back Button */}
              <Link href="/bags" className="flex items-center gap-2 text-primary hover:underline">
                <span className="material-symbols-outlined">arrow_forward</span>
                <span className="font-body">חזרה לקטלוג</span>
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="aspect-[3/4] w-full bg-cover bg-center rounded-xl overflow-hidden"
                     style={{ backgroundImage: `url(${product.image})` }} />

                {/* Product Info */}
                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl md:text-4xl font-bold font-display">{product.title}</h1>
                  <p className="text-2xl font-bold text-primary font-display">₪{product.price.toFixed(2)}</p>

                  {/* Product Details */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="font-bold mb-2 font-display">מידת התיק</h3>
                      <div className="inline-block">
                        <span className="px-4 py-2 bg-section-light dark:bg-section-dark rounded-lg font-body">
                          {sizeLabels[product.size]}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold mb-2 font-display">פרטי המוצר</h3>
                      <dl className="grid grid-cols-2 gap-3 font-body">
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">צבע:</dt>
                          <dd>{colorLabels[product.color as keyof typeof colorLabels] || product.color}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">חומר:</dt>
                          <dd>{materialLabels[product.material as keyof typeof materialLabels] || product.material}</dd>
                        </div>
                      </dl>
                    </div>

                    {/* Contact Button */}
                    <Link href="/contact" className="w-full px-6 py-4 bg-primary text-text-light rounded-lg font-bold text-center hover:brightness-90 transition-all font-display">
                      צרי קשר לרכישה
                    </Link>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

