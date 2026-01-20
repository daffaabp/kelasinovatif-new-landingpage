import React from 'react';
import { Share2, ArrowLeft, ArrowRight, Star } from 'lucide-react';

export function StudentVoices() {
    return (
        <div className="container mx-auto px-6 relative -mt-12 z-20">
            <div className="relative w-full max-w-6xl mx-auto">
                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8">
                    {/* Story 1 */}
                    <div className="snap-center shrink-0 w-[90%] md:w-[600px] bg-white dark:bg-[#1A2220] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col relative group hover:-translate-y-2 transition duration-500">
                        <span className="absolute top-8 right-8 text-6xl text-gray-100 dark:text-gray-800 font-serif leading-none select-none">“</span>
                        <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="font-serif text-xl md:text-2xl text-[#1C302B] dark:text-white leading-relaxed mb-8 flex-grow">
                            "The curriculum here is challenging but incredibly rewarding. I've gained skills that I use daily in my career as a software engineer. The mentorship I received was world-class."
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6">
                            <div className="flex items-center gap-4">
                                <img alt="Sarah Jenkins" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDra2yLzh8b63D6hW7SL078woRDORt2wqbZrBfuVvaOG_W7X1OAvo4PYrr1w85sCfah0TGJfcDcx-1KDj6txK2rc-csOMHrxmmNLmLPIAmk4r3SgjUaydPAwRYxyGcWVv8uq-fp5HQQUv0io5OesmzOS2KQ4YaUHiZJSFLfoW0mH9LAHOhTFn-uFmvFF48DwDsY7voey1qkLdYDZlUEbPzzuHZ5mYV0G1P4wGCImyNuifAnofgEzsKVFTNMdlYVDkrQiJ5WYyWcBQnp" />
                                <div>
                                    <h4 className="font-bold text-base text-[#1C302B] dark:text-white">Sarah Jenkins</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Computer Science, Class of 2022</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-[#1C302B] dark:hover:text-white transition" title="Share this story">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    {/* Story 2 */}
                    <div className="snap-center shrink-0 w-[90%] md:w-[600px] bg-[#1C302B] text-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#1C302B] flex flex-col relative group hover:-translate-y-2 transition duration-500">
                        <span className="absolute top-8 right-8 text-6xl text-white/10 font-serif leading-none select-none">“</span>
                        <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-8 flex-grow">
                            "What sets this university apart is the community. I never felt alone in my studies. The collaborative projects prepared me perfectly for the corporate world."
                        </p>
                        <div className="flex items-center justify-between border-t border-white/20 pt-6">
                            <div className="flex items-center gap-4">
                                <img alt="Michael Chen" className="w-14 h-14 rounded-full object-cover border-2 border-[#1C302B] shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgFseRy5W0sXzFqmFlIa0btd80HLXsIKTtSTnZE1VOlPHYi-_ayyzDu2l0HR5YSSadXIKr2TvfjtJINFCUxfKlU1Y_dEkpfpuWYODh0bs9vuLW2y9fE7cvbLrllJD3VMPgil5l-UuFlQn4lWilGsLVciTVK0kAY1XobaqNK98h0kYPJQY12L8e3wkiQvShn8vs5QvnnSkw4nqMdTLw0Eve4YGWkUWhl9yafx0MliG4PCe48KshvUKJWWFla-Dq9UdfXfKZZk7L197" />
                                <div>
                                    <h4 className="font-bold text-base text-white">Michael Chen</h4>
                                    <p className="text-xs text-white/60 uppercase tracking-wide">MBA Graduate, Class of 2023</p>
                                </div>
                            </div>
                            <button className="text-white/60 hover:text-white transition" title="Share this story">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    {/* Story 3 */}
                    <div className="snap-center shrink-0 w-[90%] md:w-[600px] bg-white dark:bg-[#1A2220] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col relative group hover:-translate-y-2 transition duration-500">
                        <span className="absolute top-8 right-8 text-6xl text-gray-100 dark:text-gray-800 font-serif leading-none select-none">“</span>
                        <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                            <Star className="w-4 h-4 fill-current opacity-50" />
                        </div>
                        <p className="font-serif text-xl md:text-2xl text-[#1C302B] dark:text-white leading-relaxed mb-8 flex-grow">
                            "Fasilitasnya sangat canggih. Mampu bekerja di lab modern memberi saya keuntungan besar saat melamar posisi penelitian setelah lulus."
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6">
                            <div className="flex items-center gap-4">
                                <img alt="Elena Rodriguez" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHnEccr2zdLyREmYA6M4Jge9DGDPEdSQFBW114R1x8FzDDfiaX0DTm7doYIRv3T1-MhR3_7iSi9pw_bn0uW6M7j_rL9afIPxFICrjaiSo8c5A5Oua-fN3LluuJTPaWuelUkxaE0T1ZywLKPXTPm_I9Jp3hJW0eiBj5P3rgrQqFqCoYJ5YSdjCVIEeu1E89LSVWPJdSueTchloLVd0BMbgEiQvAEsukdVjEJTUXRa4zB5E-g2odAmB3HCL9SUly1OdR89qO420ai1T5" />
                                <div>
                                    <h4 className="font-bold text-base text-[#1C302B] dark:text-white">Elena Rodriguez</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Biokimia, Angkatan 2021</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-[#1C302B] dark:hover:text-white transition" title="Share this story">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-8 pb-12">
                    <button className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-white dark:hover:bg-[#1A2220] hover:shadow-lg transition group">
                        <ArrowLeft className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-[#1C302B] text-white flex items-center justify-center hover:bg-opacity-90 shadow-lg transition group">
                        <ArrowRight className="group-hover:scale-110 transition" />
                    </button>
                </div>
            </div>
        </div>
    );
}
