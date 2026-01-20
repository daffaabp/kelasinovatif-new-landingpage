import { Search, GitBranch, Filter } from 'lucide-react';

export function CourseFocus() {
    const focuses = [
        {
            icon: Search,
            title: "Organisasi Dokumen & Query",
            description: "Kuasai seni menyusun basis pengetahuan Anda dan membuat query yang efektif untuk mengekstrak nilai maksimum dari materi penelitian Anda menggunakan pencarian berbasis AI."
        },
        {
            icon: GitBranch,
            title: "Sintesis Lintas Sumber",
            description: "Pelajari cara menghubungkan ide di berbagai dokumen. Kami mengajarkan cara menggunakan NotebookLM untuk mengidentifikasi pola, kontradiksi, dan hubungan antara berbagai sumber."
        },
        {
            icon: Filter,
            title: "Analisis Berbantuan AI",
            description: "Kembangkan keterampilan dalam prompt engineering untuk penelitian. Pelajari cara mengajukan pertanyaan yang tepat dan memvalidasi wawasan yang dihasilkan AI terhadap materi sumber Anda."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Fokus Kursus</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Menguasai Penelitian Berbasis AI</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Kami tidak hanya mengajarkan alat; kami mengajarkan metodologi. Pelajari cara memanfaatkan AI untuk mempercepat penelitian Anda sambil mempertahankan ketelitian akademik.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {focuses.map((focus, index) => {
                        const Icon = focus.icon;
                        return (
                            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-eduzin-dark/20 dark:hover:border-eduzin-dark/40">
                                <div className="w-12 h-12 bg-eduzin-dark/10 dark:bg-eduzin-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{focus.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {focus.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
