import { Lightbulb, Users, Globe } from "lucide-react";

export function ValuesSection() {
    return (
        <section className="py-20 bg-about-bg-light dark:bg-about-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-about-primary dark:text-white mb-4">
                        Nilai-Nilai Inti Kami
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Prinsip-prinsip yang memandu kurikulum, kehidupan kampus, dan interaksi
                        komunitas kami.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Lightbulb className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Inovasi Utama
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Kami mendorong ide-ide berani dan pemecahan masalah yang kreatif. Laboratorium kami adalah
                            tempat bermain untuk terobosan besar berikutnya.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Users className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Komunitas Inklusif
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Keberagaman adalah kekuatan kami. Kami berkomitmen untuk menciptakan ruang
                            di mana setiap suara didengar dan dihargai.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Globe className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Perspektif Global
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Kami mempersiapkan mahasiswa untuk menjadi warga global, memupuk kemitraan
                            dengan institusi di seluruh dunia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
