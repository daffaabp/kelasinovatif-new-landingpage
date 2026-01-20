"use client";

import React, { useState } from 'react';

export function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribing:', email);
    };

    return (
        <section className="py-16 bg-blog-bg-light dark:bg-blog-bg-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-blog-surface-dark rounded-3xl p-8 md:p-12 border border-dashed border-gray-300 dark:border-gray-700 relative overflow-hidden shadow-sm">
                    <div
                        className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(#1f3a33 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                        }}
                    ></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 bg-blog-primary rounded-full flex items-center justify-center text-white font-bold text-2xl font-serif flex-shrink-0">
                                K
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-medium text-blog-primary dark:text-white">
                                    Bergabunglah dengan newsletter kami
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Dapatkan pembaruan terbaru langsung ke kotak masuk Anda.
                                </p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                            <input
                                className="w-full sm:w-80 px-6 py-3.5 rounded-full border border-gray-300 dark:border-gray-600 bg-blog-bg-light dark:bg-[#252525] text-sm focus:outline-none focus:ring-2 focus:ring-blog-primary dark:focus:ring-white"
                                placeholder="Email bisnis..."
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="px-8 py-3.5 bg-blog-primary text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition shadow-lg"
                                type="submit"
                            >
                                BERLANGGANAN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
