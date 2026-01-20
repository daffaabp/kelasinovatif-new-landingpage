
import React from 'react';
import { Quote, Star, StarHalf } from 'lucide-react';

export function Testimonials() {
    return (
        <section className="py-24 bg-private-surface-light dark:bg-private-surface-dark transition-colors duration-300" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-private-primary dark:text-white uppercase mb-4 inline-block px-4 py-1 border border-private-primary dark:border-white rounded-full">Hasil Nyata</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-private-primary dark:text-white mb-6">Kisah Sukses Mahasiswa</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Lihat bagaimana kelas privat kami telah membantu peneliti dan mahasiswa menembus hambatan dan mencapai tujuan akademik mereka.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Michael Chen */}
                    <div className="bg-private-bg-light dark:bg-private-bg-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 relative">
                        <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-6 w-16 h-16 opacity-50" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img alt="Student 1" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-QD2bj7jHkkm-JxLJdB8krw6111lb24xb4mOamfiZiAxxI9d9oxDAlIE90biRtJaEPYYoON23QvP-x-wjeoectSxPoquFeJUQmSgevh2P8nOtulHDKtBUiK5DpovuwDFJiHk02BW7WrsAgC52ey8av8dS7A9M4yVGEwm1ucWqRasyj0YZhDy8f6_4iKtkCXS1C4h8Nj-tj9i1V7SujD4GM7xzLXAJwWBXAV_n8tYb_g4ozAUZdx_3YxSl58f-nkPZuRF23IUnmE" />
                            <div>
                                <p className="font-bold text-private-primary dark:text-white">Michael Chen</p>
                                <p className="text-xs text-gray-500">Kandidat PhD</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                            "Sesi satu-satu dengan Dr. Jen sangat transformatif. Saya terjebak pada analisis data saya selama berbulan-bulan, dan dia membantu saya menguraikannya hanya dalam tiga sesi."
                        </p>
                        <div className="flex text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    {/* Anna Lee */}
                    <div className="bg-private-bg-light dark:bg-private-bg-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 relative">
                        <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-6 w-16 h-16 opacity-50" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img alt="Anna Lee" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeA_0C9-u524JAtKqwbXfyl84J0n_uNn5H90i4rQ6y2M6w1uJ8J4vL2r5O9P8o7I3l6K5n4m2j1h0g9f8e7d6c5b4a3Z2y1x0w9v8u7t6s5r4q3p2o1n0m9l8k7j6h5g4f3e2d1c0b9a8Z7y6x5w4v3u2t1s0r9q8p7o6n5m4l3k2j1i0h9g8f7e6d5c4b3a2Z1y0x9w8v7u6t5s4r3q2" />
                            <div>
                                <p className="font-bold text-private-primary dark:text-white">Anna Lee</p>
                                <p className="text-xs text-gray-500">Asisten Penelitian</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                            "James membuka mata saya tentang bagaimana AI dapat menyederhanakan proses literature review saya. Format coaching privat berarti kami dapat bekerja langsung pada proyek saya saat ini."
                        </p>
                        <div className="flex text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <StarHalf className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    {/* David Ross */}
                    <div className="bg-private-bg-light dark:bg-private-bg-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 relative">
                        <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-6 w-16 h-16 opacity-50" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img alt="David Ross" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzShG3o5Q2NxBgFG6in_mwqPzcQBhop42O1olN4-zYu3bLN-juTm_7yA2pqgTC6oo2NFszsWMKb-evQvfxwwlMLHUzA5DLnN4h4TNzLl3wckTJsnhzFIbAuv2o1n1v3bNdgozq2RXghXq922263D17kOMkGAuSgv-pKxtc5eQTKG5-_2QNxNk22rLMC7a88VBP_d0bNJovLLUptP4pPfpdU0Tm_72BpXEMVQ8pxmvFt_DUoOvXtM12WzmLlNnVb62lo0_5XhOgsHM" />
                            <div>
                                <p className="font-bold text-private-primary dark:text-white">David Ross</p>
                                <p className="text-xs text-gray-500">Mahasiswa Magister</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                            "Saya perlu membangun scraper kustom untuk tesis saya. Bimbingan Emily tentang Cursor sangat berharga. Layak setiap sen untuk perhatian yang dipersonalisasi."
                        </p>
                        <div className="flex text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
