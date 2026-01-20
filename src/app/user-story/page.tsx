import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { StudentVoices } from './_components/StudentVoices';
import { MasonryStories } from './_components/MasonryStories';
import { CTA } from './_components/CTA';
import { Newsletter } from './_components/Newsletter';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kisah Mahasiswa - KelasInovatif University',
    description: 'Dengarkan dari komunitas kami yang berkembang. Temukan bagaimana KelasInovatif memberdayakan mahasiswa untuk mewujudkan impian mereka.',
};

export default function UserStoryPage() {
    return (
        <main className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-gray-800 dark:text-gray-200 antialiased transition-colors duration-300 font-sans min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <StudentVoices />
            <MasonryStories />
            <CTA />
            <Newsletter />
            <Footer />
        </main>
    );
}