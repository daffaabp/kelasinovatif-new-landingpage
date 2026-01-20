import React from "react";

export const ContactHero = () => {
    return (
        <header className="relative bg-[var(--color-contact-secondary)] dark:bg-gray-900 pt-32 pb-24 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--color-contact-accent)]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[var(--color-contact-primary)]/10 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
                <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-800 border border-[var(--color-contact-primary)]/20 dark:border-gray-700 text-xs font-semibold tracking-wider text-[var(--color-contact-primary)] dark:text-gray-300 mb-4 uppercase">
                    Hubungi kami
                </span>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-[var(--color-contact-primary)] dark:text-white mb-6 leading-tight">
                    Mari mulai percakapan.
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Baik Anda memiliki pertanyaan tentang penerimaan, kehidupan kampus, atau peluang
                    penelitian, tim kami siap membantu Anda menavigasi perjalanan di
                    KelasInovatif.
                </p>
            </div>
        </header>
    );
};
