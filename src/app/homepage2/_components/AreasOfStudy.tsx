import React from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';

export function AreasOfStudy() {
    return (
        <section className="py-20 md:py-28 container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2 block">Bidang Studi</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#1C302B] dark:text-white">
                        Tingkatkan karier dan <br />pendidikan Anda melalui.
                    </h2>
                </div>
                <a className="bg-[#1C302B] text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-opacity-90 transition text-sm" href="#">
                    DAFTAR SEKARANG
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Arts Card */}
                <div className="bg-white dark:bg-[#1A2220] rounded-2xl p-4 shadow-sm hover:shadow-lg transition group">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <img alt="Arts" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxS-eydiZjBtUPTer5xYhJxGxeT83Lo6APAot5Aw1GtMpJCANvpBa761wPj9OO7ph23_9ZFyzbZI7EoGTuCYfooqXAUlW95eILjTQXNjObDJEwljwUyCZ6ckT5BS4w9x9F51uN9gHk3bGbpKToKvLCut-LpmaXEm1TIrQx0BgQOVFCrJVEe3SVwbspl5eTdiWfwco65z3gbonWKij584y6OvFBk4PpgF2sa8OPsdHZ8y_oDUb8dh2oN4lPjww-0F7UGlN2BcfTtkI" />
                        <span className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 text-[#1C302B] dark:text-white text-[10px] font-bold px-2 py-1 rounded">BEGINNER</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#1C302B] dark:text-white">Seni & Humaniora</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Temukan esensi ekspresi manusia dan budaya.</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 Minggu</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 1240</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                        <div className="flex items-center gap-2">
                            <img alt="Prof" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHnEccr2zdLyREmYA6M4Jge9DGDPEdSQFBW114R1x8FzDDfiaX0DTm7doYIRv3T1-MhR3_7iSi9pw_bn0uW6M7j_rL9afIPxFICrjaiSo8c5A5Oua-fN3LluuJTPaWuelUkxaE0T1ZywLKPXTPm_I9Jp3hJW0eiBj5P3rgrQqFqCoYJ5YSdjCVIEeu1E89LSVWPJdSueTchloLVd0BMbgEiQvAEsukdVjEJTUXRa4zB5E-g2odAmB3HCL9SUly1OdR89qO420ai1T5" />
                            <div>
                                <p className="text-xs font-bold text-[#1C302B] dark:text-white">Natalia T. Morgan</p>
                                <p className="text-[10px] text-gray-400">Profesor Seni</p>
                            </div>
                        </div>
                        <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-[#1C302B] hover:text-white dark:hover:bg-white dark:hover:text-[#1C302B] transition">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Science Card */}
                <div className="bg-white dark:bg-[#1A2220] rounded-2xl p-4 shadow-sm hover:shadow-lg transition group">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <img alt="Science" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqpJOyZ08W-_ykAgnJxcB0zcX8cc7xehMABhpfSWZAL9da0BfPK08StnO266mukyc9hcJrqGBkVaD7iyrqAn4BA6j9LpKXOMaRK-VZQKLJI0MQqaGasqqIYf6isd-1qWJLgCx7uzkB4aOLXgpADxkG-PS9G4uPjrM-ahGK4EqvzVK9DhW4VpRSLEUoqXwHX8Bv0aTiIBVHsunIkiUJuIuslClP6FE5MxwEX7xV7znEzAVGiSwsMsSkF23AQAa1C8fd2FH6BCFIm1zU" />
                        <span className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 text-[#1C302B] dark:text-white text-[10px] font-bold px-2 py-1 rounded">MENENGAH</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#1C302B] dark:text-white">Sains & Teknologi</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Dasar-dasar Ilmu Komputer dan Logika.</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 12 Minggu</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 2100</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                        <div className="flex items-center gap-2">
                            <img alt="Prof" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6nnz6IfDjl88ptrQUJfciArps9cMw4t1BWpm8UTGf1Ihtnix9RtXVTJ-2IojmSYu3temobbQWM782zL8LO6Ldd85HjTM_CLbKJmSzuo_wrYoMAQvv4bN2E6PHNqlD6iy8BtJoKo10BcahO4v1a6ehf6vHMgsKZ6xgYSesz65gJOh7fYyYPcFUrRwy1AbLdDfOXrtScv7MONc2C3m-kuVB8GnHNUXECfTZRHY8HK-_T8Gy6ZSyGG7v_38cnZWXId7NB_tSODiFBOWq" />
                            <div>
                                <p className="text-xs font-bold text-[#1C302B] dark:text-white">Gabriella S. Adams</p>
                                <p className="text-[10px] text-gray-400">Insinyur Perangkat Lunak Senior</p>
                            </div>
                        </div>
                        <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-[#1C302B] hover:text-white dark:hover:bg-white dark:hover:text-[#1C302B] transition">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Business Card */}
                <div className="bg-white dark:bg-[#1A2220] rounded-2xl p-4 shadow-sm hover:shadow-lg transition group">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <img alt="Business" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCp-UDgINrSGvMhUJypHsptroHEoA2lUXkG0pPF4K_czbJWfssLRFyNCKwMUPSCC88EaPx_SHWGDTSaBkg99mjNL39GErvy9O49QXz1_EVtWswIul4aet6pu726a5UoCHhjaX9Cc59HJUlG-q1jFLIWSB4pum_jwUVz4oSf7M72bNpCIi7er6QzbK5AfEgghQwJYCDmqyOQSQKSROG9tlF9nvxGQls14j0kfMoW3y-KKgl8AWOGpMP2OdyScRmFvG95M0k1PpGpeBU" />
                        <span className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 text-[#1C302B] dark:text-white text-[10px] font-bold px-2 py-1 rounded">LANJUTAN</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#1C302B] dark:text-white">Bisnis & Ekonomi</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Manajemen Strategis untuk Pemimpin Masa Depan.</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 10 Minggu</span>
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 850</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                        <div className="flex items-center gap-2">
                            <img alt="Prof" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgFseRy5W0sXzFqmFlIa0btd80HLXsIKTtSTnZE1VOlPHYi-_ayyzDu2l0HR5YSSadXIKr2TvfjtJINFCUxfKlU1Y_dEkpfpuWYODh0bs9vuLW2y9fE7cvbLrllJD3VMPgil5l-UuFlQn4lWilGsLVciTVK0kAY1XobaqNK98h0kYPJQY12L8e3wkiQvShn8vs5QvnnSkw4nqMdTLw0Eve4YGWkUWhl9yafx0MliG4PCe48KshvUKJWWFla-Dq9UdfXfKZZk7L197" />
                            <div>
                                <p className="text-xs font-bold text-[#1C302B] dark:text-white">Eliana M. Thompson</p>
                                <p className="text-[10px] text-gray-400">MBA, Konsultan Bisnis</p>
                            </div>
                        </div>
                        <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-[#1C302B] hover:text-white dark:hover:bg-white dark:hover:text-[#1C302B] transition">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
