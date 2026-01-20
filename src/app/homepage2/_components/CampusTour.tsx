import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function CampusTour() {
    return (
        <>
            <section className="py-20 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                    <div className="w-full md:w-1/3">
                        <img alt="Library" className="w-full h-64 object-cover rounded-tl-[3rem] rounded-bl-[1rem] rounded-tr-[1rem] rounded-br-[1rem] grayscale hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-0NWINz8PCizCXJ-_cSv_bSUSDokH4frP9W3Euurpqx0wezWd0UTIbrh8hLFtAitzvSYpOIM3v2ve9qxW1UTy9auc8QP_0vNZEzUs_gpyUOiaBYVEnLVwL4u-rN0NjEbY_rF2MhZxxW8y582ILXi0rUW3xebmwmeFHWf-gn19KyH-8QV0CSxsbVHREN55OIQio0-gVI1FifNCqb9eu7Xrd9p8v67sVk-yV2oqjd5_4hfNjmWYMtFUCzO4qrTr9H-mY0uXHv0osOcA" />
                    </div>
                    <div className="w-full md:w-1/3 text-center space-y-6">
                        <div className="inline-block relative">
                            {/* Spinning Text Ring (Simulated with raw SVG for curve text support) */}
                            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '10s' }}>
                                <svg height="80" viewBox="0 0 100 100" width="80">
                                    <path d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" id="curve"></path>
                                    <text width="100">
                                        <textPath className="text-[10px] uppercase font-bold tracking-widest fill-current text-[#1C302B] dark:text-white" xlinkHref="#curve">
                                            • Best University • Since 2025 •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <button className="bg-white dark:bg-gray-800 text-xs font-bold uppercase border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full relative z-10 transition hover:scale-105">Pesan Tur Gratis</button>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#1C302B] dark:text-white">
                            Kampus universitas <br /> KelasInovatif <br /> luar biasa.
                        </h2>
                        <a className="bg-[#1C302B] text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-opacity-90 transition text-sm" href="#">
                            HUBUNGI KAMI
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img alt="Students" className="w-full h-64 object-cover rounded-tr-[3rem] rounded-br-[1rem] rounded-tl-[1rem] rounded-bl-[1rem] grayscale hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfSBEDirUUXAaLWy8S6OkNFvmj_NsXRKJKUZa6csCKM6C9ik6Ds72k5rcPSYs95uk3Sc4KgUDbwtZxSXHnUaPPa3PgV0VKwlcOoDm-Mxy734AxKFYplqquiCSzCCdAWrnvMHBEbBqMZxl59Nn7tvnSvOt9ZR7h504MKaUMVmulBFIZEIFsccrk3bC8dP5-ihpZvDGqOlvW3EsrvVn4EFYfQ8Vp3duSKfumS5rQtnFtSlpxYIXVttxMOiOWeE81IIc9AGjnoZHqyX3C" />
                    </div>
                </div>
            </section>

            <section className="py-10 container mx-auto px-6">
                <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[450px] shadow-xl">
                    <div className="bg-[#1C302B] p-10 lg:w-2/5 flex flex-col justify-between text-white relative">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition">
                                <Play className="text-[#1C302B] ml-1 w-6 h-6" fill="currentColor" />
                            </div>
                            <h2 className="font-serif text-3xl mb-8">Upacara ke-50 Pablo Benzo 2025</h2>
                            <div className="space-y-2 text-sm text-gray-300">
                                <p><strong className="text-white">Zona Waktu:</strong> 02:36 WIB (GMT)</p>
                                <p><strong className="text-white">Harga:</strong> Gratis</p>
                                <p><strong className="text-white">Lokasi:</strong> Auditorium Utama</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mt-8">
                            <img alt="Prof" className="w-10 h-10 rounded-full border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPyuptxzQdr3GhE9L1xaNvDzwTunNB5A6GBO0K2cKvSMf-EHL06wp3tA08rP7hcRg0rSxDSrVzF8-dqc0ShCY-xI6TDUhOI75628TIrazA1qckJ0nnFYlzYUUVR9trzxSD65JgWdiTTZvy1NshjLGjGOY4QR2PC5UbWBI7ONNqbIyjYZlGKQ7fklARQg3Yh9AvJRu21FObyaiqEA_g4qFW80GVrxBq2O_eROpdA2DZ8P-AKjLmKonncaDJ5ULclKQtIA9ekuiUPV8V" />
                            <div>
                                <p className="text-xs font-bold">Natalia T. Morgan</p>
                                <p className="text-[10px] text-gray-400">Guru Sains</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 relative group">
                        <img alt="Graduation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9D6R78KfXhTSsXqO8vRmNPvpocBhA_AWojacv2FollOm_Btr02aPZd60VqMPSCYoLoNnIRY38OiKzrxjpGHMUW39ovRqjz1jF6fc09EiFebJKQeN-2YO5Mxy-mcZYAs173rV8On-Gs3Ow1J-cnJnuBSMQ3ObK9zlpXGt6VhKj376LseXKC1tnVFvFdVDUVQMwyWsPBakwFZ-DN_UDTgYkVF7vtztoIuq3B7X7h6BOdjhnsuo6lSR8FxAIfnGIiJGLvX-kAkVAyFs" />
                        <div className="absolute bottom-6 right-6">
                            <button className="w-10 h-10 bg-white text-[#1C302B] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
