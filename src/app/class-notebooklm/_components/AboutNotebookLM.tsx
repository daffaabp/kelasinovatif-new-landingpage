import { CheckCircle, TrendingUp } from 'lucide-react';

export function AboutNotebookLM() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="about-notebooklm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200/50 dark:bg-green-900/30 rounded-full blur-2xl"></div>
                        <img
                            alt="Researcher using AI tools"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                        />
                        <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Wawasan Berbasis AI</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Ubah dokumen Anda menjadi percakapan interaktif dengan bantuan AI.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Alat</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">Apa itu NotebookLM?</h3>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                            <p className="mb-4">
                                NotebookLM adalah asisten penelitian eksperimental berbasis AI dari Google yang membantu Anda memahami informasi kompleks lebih cepat. Ini menciptakan AI yang dipersonalisasi yang didasarkan pada dokumen dan sumber yang Anda berikan, memungkinkan Anda mengajukan pertanyaan, menghasilkan ringkasan, dan menemukan wawasan dari materi penelitian Anda.
                            </p>
                            <p>
                                Dalam kursus ini, kami melampaui unggahan dokumen dasar. Kami mengajarkan cara menyusun basis pengetahuan Anda, membuat query yang efektif, dan memanfaatkan kemampuan AI NotebookLM untuk <em>mempercepat</em> alur kerja penelitian Anda dan menghasilkan wawasan yang lebih dalam dari sumber Anda.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">AI Berbasis Sumber</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Dapatkan respons AI yang mengutip langsung dari dokumen yang Anda unggah.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Sintesis Cerdas</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Hasilkan ringkasan dan hubungkan ide di berbagai sumber.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
