import React from 'react';
import { ArrowRight } from 'lucide-react';

export function LatestNews() {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <span className="bg-gray-100 dark:bg-gray-800 text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300 px-3 py-1 rounded mb-4 inline-block">ACARA</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#1C302B] dark:text-white max-w-md">
                        Berita tentang universitas KelasInovatif kami
                    </h2>
                </div>
                <a className="bg-[#1C302B] text-white px-5 py-2 rounded-full font-medium inline-flex items-center gap-2 hover:bg-opacity-90 transition text-xs uppercase" href="#">
                    Berita Lainnya
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
            <div className="space-y-4">
                {/* Active/Highlighted Item */}
                <div className="bg-[#1C302B] text-white p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <span className="text-[10px] opacity-60 uppercase tracking-wider font-medium min-w-[80px]">21 JUNI 2025</span>
                        <h3 className="font-medium text-lg">Portal pembelajaran jarak jauh menyederhanakan interaksi mahasiswa-dosen</h3>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                </div>

                {/* List Items */}
                {[
                    "Situs web baru meningkatkan akses ke pendidikan online",
                    "Streaming acara langsung terintegrasi ke portal pendidikan",
                    "Portal pendidikan diluncurkan untuk akademisi global"
                ].map((title, i) => (
                    <div key={i} className="bg-white dark:bg-[#1A2220] p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition cursor-pointer group">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium min-w-[80px]">21 JUNI 2025</span>
                            <h3 className="font-medium text-lg text-[#1C302B] dark:text-white group-hover:text-[#1C302B] transition">{title}</h3>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-400 group-hover:bg-[#1C302B] group-hover:text-white group-hover:border-[#1C302B] transition">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
