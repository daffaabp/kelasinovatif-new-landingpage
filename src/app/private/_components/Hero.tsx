
import React from 'react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img alt="University Campus Background" className="w-full h-full object-cover opacity-20 dark:opacity-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuYFJC2GfasulK9SL0JfmfGMZwsfQ6u3A2hAf6jLMk4qkSJ_CHSqxX5xijC0wjJN70XVJp_WLBjdHT-54E7VDiln7q0uoYbIDXLcitwgY5DxdscIBEQ9bm0cW2GAuNLs7tYRyDR89pT9qrcEK868Fh6Ly-6Xhwqdikp-rfAXDbl4lWCdKDXWFnhQRyfTYaeb4ULD0uja5C40wGhp1Tt3sCGvf4blRzLcmNQ30lH2D7XND3xPamhkp3yHHfgWdAtfIBf3rL23UeXMM" />
                <div className="absolute inset-0 bg-gradient-to-b from-private-bg-light/50 via-private-bg-light/80 to-private-bg-light dark:from-private-bg-dark/50 dark:via-private-bg-dark/80 dark:to-private-bg-dark"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-gray-200 dark:bg-gray-800 text-xs font-bold tracking-wider uppercase mb-6 text-gray-600 dark:text-gray-300">Mentorship Eksklusif 1-on-1</span>
                <h1 className="font-serif text-5xl md:text-7xl font-medium text-private-primary dark:text-white mb-6 leading-tight">
                    Pembelajaran Personal, <br /><span className="italic text-gray-600 dark:text-gray-400">Disesuaikan untuk Anda</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                    Terhubung langsung dengan ahli industri untuk sesi privat. Percepat penelitian Anda, kuasai alat baru, dan dapatkan umpan balik yang dipersonalisasi sesuai jadwal Anda.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a className="bg-private-primary hover:bg-private-primary-light text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-xl" href="#instructors">
                        Temukan Instruktur
                    </a>
                    <a className="bg-white dark:bg-private-surface-dark border border-gray-200 dark:border-gray-700 text-private-primary dark:text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 shadow-md" href="#testimonials">
                        Baca Kisah Sukses
                    </a>
                </div>
            </div>
        </section>
    );
}
