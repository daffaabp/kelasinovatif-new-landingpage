import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { CategoryCards } from './_components/CategoryCards';
import { FAQSection } from './_components/FAQSection';
import { ContactCTA } from './_components/ContactCTA';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - KelasInovatif University',
    description: 'Temukan jawaban untuk pertanyaan yang sering diajukan tentang program, penerimaan, dan kehidupan kampus kami.',
};

export default function FAQPage() {
    return (
        <main className="bg-gray-50 dark:bg-faq-bg-dark min-h-screen">
            <Navbar />
            <Hero />
            <CategoryCards />
            <FAQSection />
            <ContactCTA />
            <Footer />
        </main>
    );
}
