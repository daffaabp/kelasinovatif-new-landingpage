export function AboutHero() {
    return (
        <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="University Campus Main Building"
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4-_qe17AU3qQ_289nbOlJE5KVNyNoOcz9bPaYVi2OXNlbO9QNkZ0AQEQgELo6W9oQtVf779r33P7NsREBsGY4X6qbtdDcASYp_IXiA6wOqAYyT6bILk5mHuOfERX7I2VJ96LBxh-vy6RF9P1o-vE0pm1fZ7dYEVrH3Y8X5DCbO6rFAHNpUkst1lGuERC6qRczaHpn-OFvVbDQKqSYx7k0TgEkth_xfL8MHdFQ4fNHeXDLkb2nlO_lz_Mf2yAhKytlxvWtp_F1yw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-about-bg-light dark:from-about-bg-dark to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/10 border border-gray-200 dark:border-gray-700 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-about-primary"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
                        Didirikan 1985
                    </span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-about-primary dark:text-white">
                    Merancang masa depan <br /> pendidikan.
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    KelasInovatif lebih dari sekadar universitas. Kami adalah komunitas
                    pemikir maju, pencipta, dan pemimpin yang berdedikasi untuk menyelesaikan
                    tantangan masa depan hari ini.
                </p>
            </div>
        </header>
    );
}
