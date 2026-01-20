
import React from 'react';

export function Stats() {
    return (
        <section className="py-12 bg-private-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid)" height="100%" width="100%"></rect>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                    <div className="p-4">
                        <p className="font-serif text-4xl md:text-5xl mb-2">1-on-1</p>
                        <p className="text-sm uppercase tracking-widest opacity-80">Perhatian Langsung</p>
                    </div>
                    <div className="p-4">
                        <p className="font-serif text-4xl md:text-5xl mb-2">100%</p>
                        <p className="text-sm uppercase tracking-widest opacity-80">Jadwal Fleksibel</p>
                    </div>
                    <div className="p-4">
                        <p className="font-serif text-4xl md:text-5xl mb-2">Ahli</p>
                        <p className="text-sm uppercase tracking-widest opacity-80">Mentor Terverifikasi</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
