export function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 dark:from-gray-900 dark:via-teal-950 dark:to-gray-900 relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
                </svg>
            </div>

            {/* Animated Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-teal-400/30 bg-white/10 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
                    <svg className="w-4 h-4 mr-2 text-teal-300 fill-teal-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    PENDAFTARAN KELAS KHUSUS
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Siap coding secepat pikiran?
                </h2>
                <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
                    Bergabunglah dengan kelompok elit pengembang yang menguasai pengembangan berbasis AI. Kursi terbatas tersedia untuk kursus premium ini.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-gray-100 transition shadow-xl shadow-teal-900/30 text-lg">
                        Daftar Sekarang - Akses Premium
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition text-lg">
                        Hubungi Instruktur
                    </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sertifikasi Disertakan</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>Akses Seumur Hidup</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span>Dukungan Ahli</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
