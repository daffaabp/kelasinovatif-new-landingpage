import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { NewsletterSection } from '@/components/commons/NewsletterSection';
import { Hero } from './_components/Hero';
import { StatsGrid } from './_components/StatsGrid';
import { AreasOfStudy } from './_components/AreasOfStudy';
import { WhyChooseUs } from './_components/WhyChooseUs';
import { Testimonials } from './_components/Testimonials';
import { CampusTour } from './_components/CampusTour';
import { FAQ } from './_components/FAQ';
import { LatestNews } from './_components/LatestNews';
import { BlogGrid } from './_components/BlogGrid';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KelasInovatif University',
    description: 'Pembelajaran inovatif untuk semua',
};

export default function Homepage2() {
    return (
        <main className="bg-[#F7F5F0] dark:bg-[#0F1210] text-[#1C302B] dark:text-[#E2E8F0] font-sans transition-colors duration-300 antialiased flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <StatsGrid />
            <AreasOfStudy />
            <WhyChooseUs />
            <Testimonials />
            <CampusTour />
            <FAQ />
            <LatestNews />
            <BlogGrid />
            <NewsletterSection />
            <Footer />
        </main>
    );
}