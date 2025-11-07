'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';

export default function Navigation() {
  const pathname = usePathname();
  // Only make header transparent on home page
  const isTransparent = pathname === '/';

  // On home page, position header absolutely to overlay hero
  if (isTransparent) {
    return (
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header transparent={isTransparent} />
      </div>
    );
  }

  return <Header transparent={isTransparent} />;
}
