import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <header className="relative h-[85vh] w-full flex items-end pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                    Pembelajaran <br />
                    inovatif <br />
                    <span className="italic font-light">untuk semua</span>
                </h1>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <p className="text-white/80 max-w-sm text-sm md:text-base leading-relaxed">
                        Lulusan memegang posisi yang terkait dengan gelar atau tujuan karier mereka.
                    </p>
                    <a className="bg-white text-[#1C302B] px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition group" href="#">
                        GABUNG KOMUNITAS
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </header>
    );
}
