import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { Stats } from './_components/Stats';
import { InstructorList } from './_components/InstructorList';
import { InquiryForm } from './_components/InquiryForm';
import { Testimonials } from './_components/Testimonials';
import { WaitlistCTA } from './_components/WaitlistCTA';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas Privat - Kelas Inovatif University',
    description: 'Rasakan pembelajaran yang dipersonalisasi dengan Kelas Privat kami. Mentorship satu-satu dan kurikulum yang disesuaikan.',
};

export default function PrivatePage() {
    return (
        <div className="min-h-screen bg-private-bg-light dark:bg-private-bg-dark font-sans text-gray-800 dark:text-gray-200">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <InstructorList />
                <InquiryForm />
                <Testimonials />
                <WaitlistCTA />
            </main>
            <Footer />
        </div>
    );
}
