"use client";

import React from "react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AIChatBot } from "@/components/commons/AIChatBot";
import { ContactHero } from "./_components/ContactHero";
import { ContactFormSection } from "./_components/ContactFormSection";
import { ContactFAQ } from "./_components/ContactFAQ";
import { BlogSection } from "@/components/commons/BlogSection";
import { NewsletterSection } from "@/components/commons/NewsletterSection";

export default function ContactPage() {
    return (
        <main className="bg-[var(--color-contact-bg-light)] dark:bg-[var(--color-contact-bg-dark)] min-h-screen font-sans">
            <Navbar />
            <ContactHero />
            <ContactFormSection />
            <ContactFAQ />
            <BlogSection />
            <NewsletterSection />
            <Footer />
            <AIChatBot />
        </main>
    );
}