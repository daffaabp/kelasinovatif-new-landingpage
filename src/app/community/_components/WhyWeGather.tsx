import React from 'react';

export function WhyWeGather() {
    return (
        <section className="py-24 bg-community-bg-light dark:bg-community-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-xs font-bold tracking-widest text-community-primary dark:text-gray-400 uppercase mb-4">Mengapa Kami Berkumpul</h2>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Memupuk budaya <br /> <span className="italic text-community-primary dark:text-white/80">kolaborasi &amp; inovasi.</span>
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Di KelasInovatif, komunitas bukan hanya tambahan—ini adalah inti dari pengalaman pembelajaran. Kami percaya bahwa ide terbaik lahir dari perspektif beragam yang berkumpul dalam lingkungan yang mendukung.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group relative bg-white dark:bg-community-card-dark rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="w-14 h-14 bg-[#234234]/10 dark:bg-[#234234]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-community-primary group-hover:text-white transition-colors duration-300 text-community-primary">
                            <span className="material-icons-outlined text-3xl">diversity_3</span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Inklusivitas Utama</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Ruang aman bagi mahasiswa dari semua latar belakang untuk mengekspresikan diri, berbagi warisan mereka, dan menemukan komunitas mereka.</p>
                        <a className="inline-flex items-center text-sm font-bold text-community-primary dark:text-white hover:underline" href="#">
                            Baca piagam kami <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>
                    <div className="group relative bg-white dark:bg-community-card-dark rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="w-14 h-14 bg-[#234234]/10 dark:bg-[#234234]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-community-primary group-hover:text-white transition-colors duration-300 text-community-primary">
                            <span className="material-icons-outlined text-3xl">lightbulb</span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Kepemimpinan Mahasiswa</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Klub dan acara kami dipimpin oleh mahasiswa, memberi Anda pengalaman dunia nyata dalam manajemen, penganggaran, dan pembangunan tim.</p>
                        <a className="inline-flex items-center text-sm font-bold text-community-primary dark:text-white hover:underline" href="#">
                            Temui dewan <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>
                    <div className="group relative bg-white dark:bg-community-card-dark rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="w-14 h-14 bg-[#234234]/10 dark:bg-[#234234]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-community-primary group-hover:text-white transition-colors duration-300 text-community-primary">
                            <span className="material-icons-outlined text-3xl">school</span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Sinergi Akademik</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Kelompok belajar, peer mentoring, dan hackathon yang menjembatani kesenjangan antara teori kelas dan aplikasi praktis.</p>
                        <a className="inline-flex items-center text-sm font-bold text-community-primary dark:text-white hover:underline" href="#">
                            Temukan mentor <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
