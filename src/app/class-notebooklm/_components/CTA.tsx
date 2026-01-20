export function CTA() {
    return (
        <section className="py-24 bg-eduzin-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid)" height="100%" width="100%"></rect>
                </svg>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Siap memperkuat penelitian Anda?</h2>
                <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Bergabunglah dengan 800+ mahasiswa yang telah mengubah alur kerja penelitian mereka dengan AI. Daftar hari ini dan dapatkan akses eksklusif ke teknik NotebookLM lanjutan dan template penelitian.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-eduzin-dark font-bold rounded-full hover:bg-gray-100 transition shadow-lg text-lg" href="#">
                        Daftar dengan $49
                    </a>
                    <a className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition text-lg" href="#">
                        Unduh Silabus
                    </a>
                </div>
            </div>
        </section>
    );
}
