"use client";

import { useState } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

interface EventData {
  id: number;
  title: string;
  timezone: string;
  price: string;
  location: string;
  speaker: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

const events: EventData[] = [
  {
    id: 1,
    title: "Upacara ke-50 Pablo Benzo 2025",
    timezone: "02:36 WIB (GMT)",
    price: "Gratis",
    location: "Auditorium Utama",
    speaker: {
      name: "Natalia T. Morgan",
      role: "Guru Sains",
      avatar: "https://i.pravatar.cc/100?img=32"
    },
    image: "/images/comunity3.jpeg"
  },
  {
    id: 2,
    title: "Workshop & Seminar Design Thinking",
    timezone: "10:00 WIB (GMT)",
    price: "$50.00",
    location: "Studio Kreatif B",
    speaker: {
      name: "Marcus Chen",
      role: "Kepala Desain",
      avatar: "https://i.pravatar.cc/100?img=11"
    },
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Masa Depan Teknologi dalam Pendidikan",
    timezone: "13:00 WIB (GMT)",
    price: "$25.00",
    location: "Aula Konferensi Virtual",
    speaker: {
      name: "Sarah Williams",
      role: "Inovator Teknologi",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
  }
];

export function EventSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">

          {/* Left: Dark Info Card */}
          <div className="bg-eduzin-dark text-white p-12 md:w-2/5 flex flex-col justify-between rounded-l-xl rounded-r-xl md:rounded-r-none relative overflow-hidden transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-eduzin-dark mb-8 cursor-pointer hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </div>

              <h3 className="text-3xl font-serif mb-6 min-h-[4rem]">{currentEvent.title}</h3>

              <div className="space-y-2 text-sm text-white/60">
                <p><span className="text-white font-bold">Zona Waktu:</span> {currentEvent.timezone}</p>
                <p><span className="text-white font-bold">Harga:</span> {currentEvent.price}</p>
                <p><span className="text-white font-bold">Lokasi:</span> {currentEvent.location}</p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3 mt-8">
              <img src={currentEvent.speaker.avatar} alt={currentEvent.speaker.name} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-xs font-bold">{currentEvent.speaker.name}</p>
                <p className="text-[10px] text-white/50">{currentEvent.speaker.role}</p>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          {/* Right: Image */}
          <div className="md:w-3/5 relative bg-gray-100">
            <img
              key={currentEvent.id}
              src={currentEvent.image}
              className="w-full h-full object-cover rounded-r-xl rounded-l-xl md:rounded-l-none animate-fadeIn"
              alt="Event"
            />

            {/* Navigation Overlay */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Acara Sebelumnya"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                aria-label="Acara Selanjutnya"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

