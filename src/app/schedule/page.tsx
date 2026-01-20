import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { HighlightedEvent } from './_components/HighlightedEvent';
import { EventList } from './_components/EventList';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jadwal - KelasInovatif University',
    description: 'Lihat kelas, acara, dan workshop yang akan datang. Rencanakan perjalanan pembelajaran Anda dengan jadwal interaktif kami.',
};

export default function SchedulePage() {
    return (
        <main className="bg-[#FAF9F6] dark:bg-[#0F172A] text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen">
            <Navbar />
            <Hero />
            <HighlightedEvent />
            <EventList />
            <Footer />
        </main>
    );
}