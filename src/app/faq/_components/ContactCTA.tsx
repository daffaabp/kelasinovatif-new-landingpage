import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export function ContactCTA() {
    return (
        <section className="py-16 bg-faq-accent dark:bg-faq-surface-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-serif font-bold text-faq-primary dark:text-white mb-4">
                    Masih ada pertanyaan?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Tim dukungan kami siap membantu. Hubungi kami kapan saja.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-faq-primary text-white rounded-full font-medium hover:bg-faq-primary/90 transition shadow-lg"
                    >
                        <Mail className="w-5 h-5" />
                        Hubungi Dukungan
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-faq-primary dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium hover:border-faq-primary transition"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat Langsung
                    </a>
                </div>
            </div>
        </section>
    );
}
