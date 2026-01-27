import { GraduationCap, BookOpen, Users, ArrowRight } from "lucide-react";

export function PartnershipSection() {
    return (
        <section className="py-20 bg-about-surface-light dark:bg-about-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-about-primary dark:text-white mb-4">
                        Program Kerjasama
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Kelas Inovatif membuka kerjasama yang dapat menunjang pertumbuhan AI di Indonesia. 
                        Konsep kerjasama ini dirancang agar dapat memberikan manfaat kepada kedua belah pihak.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <GraduationCap className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-about-primary dark:text-white">
                            Kampus & Institusi Pendidikan
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                                <span className="text-about-primary mr-2">•</span>
                                <span><strong className="text-about-primary dark:text-white">Integrasi Kurikulum AI:</strong> Menyediakan modul pembelajaran AI yang dapat diintegrasikan ke dalam kurikulum kampus untuk memberikan pelatihan praktis kepada mahasiswa.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-about-primary mr-2">•</span>
                                <span><strong className="text-about-primary dark:text-white">Bimbingan Skripsi & Tesis:</strong> Program mentoring untuk mahasiswa yang meneliti AI atau mengembangkan aplikasi AI dalam penelitian mereka.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <BookOpen className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-about-primary dark:text-white">
                            Akademisi & Peneliti
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                                <span className="text-about-primary mr-2">•</span>
                                <span><strong className="text-about-primary dark:text-white">Kolaborasi Penulisan Publikasi:</strong> Bekerja sama dalam menulis dan menerbitkan artikel ilmiah atau buku tentang penerapan AI di berbagai bidang penelitian.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-about-primary mr-2">•</span>
                                <span><strong className="text-about-primary dark:text-white">Workshop & Seminar Eksklusif:</strong> Mengadakan acara ilmiah, workshop, atau seminar eksklusif yang didukung oleh para pakar AI untuk memperluas wawasan akademisi.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Users className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-4 text-about-primary dark:text-white">
                            Organisasi & Komunitas
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                            <li className="flex items-start">
                                <span className="text-about-primary mr-2">•</span>
                                <span><strong className="text-about-primary dark:text-white">Program Pengembangan Keterampilan:</strong> Menyediakan kursus atau bootcamp AI bersubsidi untuk anggota komunitas, fokus pada peningkatan literasi AI.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-about-primary mr-2">•</span>
                                <span><strong className="text-about-primary dark:text-white">Kolaborasi Event:</strong> Bersama-sama menyelenggarakan acara edukasi seperti seminar, webinar, atau workshop untuk mengedukasi masyarakat.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        className="inline-flex items-center px-6 py-3 bg-about-primary text-white rounded-full font-medium hover:bg-about-primary/90 transition-colors group"
                        href="/contact"
                    >
                        Hubungi Kami untuk Kerjasama
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
