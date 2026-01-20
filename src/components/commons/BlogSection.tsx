export function BlogSection() {
    return (
        <section className="py-12 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500">Terbaru dari Blog</h4>
                    <a href="#" className="text-xs font-bold underline decoration-1 underline-offset-4 hover:text-eduzin-dark cursor-pointer">LIHAT SEMUA</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Blog 1 */}
                    <a href="#" className="group block cursor-pointer">
                        <div className="overflow-hidden rounded-sm mb-4">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop"
                                alt="Blog 1"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 rounded-full bg-eduzin-dark"></span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Akademik</p>
                            <p className="text-[10px] font-bold text-gray-300">25 JUNI 2025</p>
                        </div>
                        <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                            Mendefinisikan ulang pengalaman universitas untuk era modern.
                        </h3>
                    </a>

                    {/* Blog 2 */}
                    <a href="#" className="group block cursor-pointer">
                        <div className="overflow-hidden rounded-sm mb-4">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                                alt="Blog 2"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Kehidupan Kampus</p>
                            <p className="text-[10px] font-bold text-gray-300">2 JULI 2025</p>
                        </div>
                        <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                            5 tips untuk menyeimbangkan studi dan kehidupan sosial di kampus.
                        </h3>
                    </a>

                    {/* Blog 3 */}
                    <a href="#" className="group block cursor-pointer">
                        <div className="overflow-hidden rounded-sm mb-4">
                            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2574&auto=format&fit=crop"
                                alt="Blog 3"
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Penelitian</p>
                            <p className="text-[10px] font-bold text-gray-300">10 JULI 2025</p>
                        </div>
                        <h3 className="font-serif font-medium text-lg leading-snug group-hover:text-eduzin-dark transition-colors">
                            Lab penelitian baru dibuka untuk studi energi berkelanjutan.
                        </h3>
                    </a>
                </div>
            </div>
        </section>
    );
}
