import { useEffect, useState } from 'react';

const backgrounds = [
  'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80', // Tech support
  'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80', // Server maintenance
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80', // Network setup
  'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80', // Computer repair
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80'  // Tech consultation
];

export default function AboutBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
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
    </div>
  );
}