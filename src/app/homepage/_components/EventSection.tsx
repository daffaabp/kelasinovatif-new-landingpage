"use client";

import { useState, useEffect } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { getLatestSchedules } from '@/app/actions/schedule';

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

// Helper function to format time
const formatTime = (time: string): string => {
  if (!time) return '';
  // If time is already in format like "19:00", just add WIB
  if (time.includes(':')) {
    return `${time} WIB`;
  }
  return time;
};

// Helper function to get default image based on type
const getDefaultImage = (type: string): string => {
  const typeLower = type?.toLowerCase() || '';
  if (typeLower.includes('workshop')) {
    return 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop';
  }
  if (typeLower.includes('webinar') || typeLower.includes('seminar')) {
    return 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop';
  }
  if (typeLower.includes('bootcamp')) {
    return '/images/comunity3.jpeg';
  }
  // Default image
  return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop';
};

export function EventSection() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const schedules = await getLatestSchedules(10);
        
        // Map schedule data to EventData format
        const mappedEvents: EventData[] = schedules.map((schedule) => ({
          id: schedule.id,
          title: schedule.title,
          timezone: formatTime(schedule.start_time),
          price: 'Gratis untuk Member', // Default price
          location: schedule.location || 'Online via Zoom',
          speaker: {
            name: schedule.speaker_name || 'Speaker',
            role: schedule.speaker_role || 'Pembicara',
            avatar: schedule.speaker_image || 'https://i.pravatar.cc/100?img=32'
          },
          image: getDefaultImage(schedule.type)
        }));

        setEvents(mappedEvents);
        setCurrentIndex(0); // Start with first event (most recent)
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const handleNext = () => {
    if (events.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    if (events.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Show loading state
  if (loading) {
    return (
      <section className="bg-white pb-20 pt-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Event Komunitas
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Bergabung dalam Event & Workshop Eksklusif
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tingkatkan skill AI untuk akademik Anda melalui workshop, bootcamp, dan webinar eksklusif yang diadakan khusus untuk member komunitas Kelas Inovatif.
            </p>
          </div>
          <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
            <div className="bg-gray-200 animate-pulse rounded-xl w-full md:w-2/5 h-96 md:h-full"></div>
            <div className="bg-gray-200 animate-pulse rounded-xl w-full md:w-3/5 h-96 md:h-full mt-4 md:mt-0 md:ml-4"></div>
          </div>
        </div>
      </section>
    );
  }

  // Show empty state
  if (events.length === 0) {
    return (
      <section className="bg-white pb-20 pt-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Event Komunitas
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Bergabung dalam Event & Workshop Eksklusif
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tingkatkan skill AI untuk akademik Anda melalui workshop, bootcamp, dan webinar eksklusif yang diadakan khusus untuk member komunitas Kelas Inovatif.
            </p>
          </div>
          <div className="text-center py-12 text-gray-500">
            <p>Tidak ada event tersedia saat ini.</p>
          </div>
        </div>
      </section>
    );
  }

  const currentEvent = events[currentIndex];

  return (
    <section className="bg-white pb-20 pt-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Event Komunitas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            Bergabung dalam Event & Workshop Eksklusif
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Tingkatkan skill AI untuk akademik Anda melalui workshop, bootcamp, dan webinar eksklusif yang diadakan khusus untuk member komunitas Kelas Inovatif.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[500px]">

          {/* Left: Dark Info Card */}
          <div className="bg-eduzin-dark text-white p-12 md:w-2/5 flex flex-col justify-between rounded-l-xl rounded-r-xl md:rounded-r-none relative overflow-hidden transition-all duration-300">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-eduzin-dark mb-8 cursor-pointer hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </div>

              <h3 className="text-3xl font-serif mb-6 min-h-[4rem]">{currentEvent.title}</h3>

              <div className="space-y-2 text-sm text-white/60">
                <p><span className="text-white font-bold">Waktu:</span> {currentEvent.timezone}</p>
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
            {events.length > 1 && (
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
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
