import { useEffect, useState } from 'react';

const backgrounds = [
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80', // Tech security
  'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80', // Server room
  'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80', // CCTV
  'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80', // Computer repair
  'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80'  // Network cables
];

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentIndex === index ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}