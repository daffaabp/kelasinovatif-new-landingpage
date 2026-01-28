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
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Fokus pada Dokumen Anda</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Riset dan belajar mendalam dari ratusan sumber dengan penjelasan yang selalu mengacu pada dokumen Anda.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Alat Riset</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">Mengapa NotebookLM?</h3>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                            <p className="mb-4">
                                NotebookLM adalah asisten riset berbasis AI dari Google yang <strong>hanya berfokus pada dokumen yang Anda berikan</strong>. Semua jawaban dan penjelasan selalu mengacu pada sumber Anda, sehingga sangat cocok untuk riset akademik dan belajar mendalam. NotebookLM dapat menampung puluhan hingga ratusan sumber sekaligus, membantu Anda memahami alur berpikir penulis jurnal dan memahami informasi kompleks lebih cepat.
                            </p>
                            <p>
                                Dalam alur kerja penelitian, setelah mendapat referensi (misalnya dari SciSpace), langkah berikutnya adalah <strong>membaca dan memahami isi jurnal</strong>. NotebookLM hadir di tahap ini untuk mempercepat pemahaman Anda dari banyak sumber sebelum mulai menulis. Kursus ini mengajarkan cara memanfaatkan 9 fitur NotebookLM untuk riset, belajar, dan menyusun literature review yang terstruktur.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Terfokus pada Sumber Anda</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Semua jawaban mengutip langsung dari dokumen yang Anda unggah, menghindari halusinasi AI.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Ratusan Sumber Sekaligus</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Pahami dan sintesis informasi dari puluhan hingga ratusan dokumen dalam satu notebook.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
