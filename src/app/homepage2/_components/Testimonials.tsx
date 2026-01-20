import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function Testimonials() {
    return (
        <section className="py-20 bg-[#F7F5F0] dark:bg-[#0F1210]">
            <div className="container mx-auto px-6">
                <div className="bg-white dark:bg-[#1A2220] rounded-3xl p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="bg-gray-100 dark:bg-gray-800 text-[10px] font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300 px-3 py-1 rounded mb-4 inline-block">Testimoni</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#1C302B] dark:text-white mb-8">
                            Ungkapan mahasiswa <br /> bahagia eksklusif <br /> kami.
                        </h2>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-[#1C302B] text-white flex items-center justify-center hover:bg-opacity-90 transition">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                        <span className="text-xs font-bold text-gray-400 uppercase mb-4 block">Perjalanan Transformatif</span>
                        <p className="font-medium text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                            "Belajar di Eduzin telah menjadi pengalaman yang mengubah hidup. Fakultas sangat mendukung, dan kursusnya menantang sekaligus menginspirasi. Saya berkembang tidak hanya secara akademis, tetapi juga secara pribadi, berkat kehidupan kampus yang dinamis."
                        </p>
                        <div className="flex items-center gap-3">
                            <img alt="Student" className="w-10 h-10 rounded-full grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0G2pQNtjwHKix0XvsHGI4tdzS7Q1vkKSWnVnwguZ-8sapE6T59OR3yscLu3kx3yaxbwNiwJ_WMJTrODl78K1mfOrP0FVuqPYIFQXPFp_b1UbHHSBSIlfeYBIEL6CaXWYOx4OtBcHLPkbQGJ4TW-BOfi5OVoAm4V94kV6ChwL7ezRGRF8P0dW0VA29W3RZo-4Om8VDIXSksdUR1U9RoNNJw4DfoWw5-ciaNlaLdcC_r4ww5p4inHJshNmbcVyROYD2F2EowWsim8gi" />
                            <div>
                                <p className="text-xs font-bold text-[#1C302B] dark:text-white">Natalia T. Morgan</p>
                                <p className="text-[10px] text-gray-400">Mahasiswa Sains</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
