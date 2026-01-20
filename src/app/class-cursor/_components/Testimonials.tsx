import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            quote: "Kursus ini benar-benar mengubah alur kerja pengembangan saya. Yang dulu memakan waktu berjam-jam sekarang hanya memakan waktu beberapa menit. Cursor adalah pengubah permainan.",
            name: "Elena Rodriguez",
            role: "Pengembang Full-Stack",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            quote: "Modul refactoring berbantuan AI adalah emas murni. Saya telah memodernisasi seluruh codebase legacy kami dalam hitungan minggu, bukan bulan.",
            name: "James Chen",
            role: "Insinyur Senior",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
        },
        {
            quote: "Cursor sangat diperlukan, dan kursus ini adalah panduan sempurna. Instruktur menjelaskan konsep AI yang kompleks dengan cara yang sangat jelas.",
            name: "Marcus Johnson",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <span className="text-teal-700 dark:text-teal-400 font-semibold tracking-wider text-xs uppercase">Kisah Mahasiswa</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-2">Apa yang dikatakan pembelajar</h2>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <button className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-700 to-teal-800 text-white flex items-center justify-center hover:from-teal-800 hover:to-teal-900 transition shadow-lg">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl relative border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-900 transition-all duration-300">
                            <span className="text-6xl text-gray-200 dark:text-gray-700 font-serif absolute top-4 left-6 leading-none">"</span>
                            <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-6 mt-4 font-light italic text-lg leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-300 dark:ring-teal-800"
                                    src={testimonial.image}
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
