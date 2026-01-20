import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img alt="University Campus Background" className="w-full h-full object-cover opacity-10 dark:opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo7xF9BjlrPnEWcTxNeq2wJwbS0lfPuA78TwEVpvK9FpKBoiUlUaDrnKVSHtG3J4b4LG9JmNX12o_BYMkq5Sn7uEj9BJ3GTB0rsmnkhZkvAKPdC2_WU9o_qu4jwJ8HQkp2FgJt66GXFSRYJL9pytYHxwMN87_EZkxB8i3z_igaYef9ktCWHrYabbqeBT3SCgdOc8GN8S2tR8AE_N6KVp9UQy-TpqHd3XmP1W11sFFiAoI4GX81i1rUbbu70iCQjI_XrHSGV_24J34" />
                <div className="absolute inset-0 bg-gradient-to-b from-bootcamp-bg-light/0 via-bootcamp-bg-light/50 to-bootcamp-bg-light dark:from-background-dark/0 dark:via-background-dark/50 dark:to-background-dark"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bootcamp-accent/30 dark:bg-bootcamp-accent/10 border border-bootcamp-accent/50 text-bootcamp-primary dark:text-bootcamp-accent text-sm font-semibold mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-bootcamp-primary dark:bg-bootcamp-accent animate-pulse"></span>
                    Angkatan Baru Segera Dimulai
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-bootcamp-primary dark:text-white mb-6 leading-tight">
                    Kuasai Masa Depan <br /> <span className="italic font-light">dengan Bootcamp Intensif</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                    Buka potensi Anda dengan program intensif khusus kami. Baik Anda ingin menguasai alat AI atau meningkatkan kemampuan penelitian Anda, kami memiliki jalur untuk Anda.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a className="w-full sm:w-auto px-8 py-4 bg-bootcamp-primary text-white rounded-full font-medium shadow-lg hover:bg-bootcamp-primary-light transition-all flex items-center justify-center gap-2 group" href="#regular-programs">
                        Jelajahi Program Reguler
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </header>
    );
}
