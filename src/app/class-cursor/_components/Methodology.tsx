export function Methodology() {
    const steps = [
        {
            number: "01",
            title: "Coding Berbantuan AI",
            description: "Pelajari cara memanfaatkan AI Cursor untuk menulis kode lebih cepat. Jelaskan maksud Anda dalam bahasa Inggris sederhana dan lihat editor menghasilkan kode siap produksi.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Smart Refactoring",
            description: "Master the art of refactoring with AI assistance. Transform legacy code into modern, maintainable solutions with simple prompts.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Kecerdasan Codebase",
            description: "Buka kekuatan pemahaman seluruh codebase. Ajukan pertanyaan tentang seluruh proyek Anda dan dapatkan jawaban instan yang memahami konteks.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14 116 144) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></div>
                        <span className="text-teal-800 dark:text-teal-300 font-medium tracking-wide text-xs uppercase">Metodologi</span>
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Menguasai Pengembangan Berbasis AI
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Pendekatan terstruktur kami memastikan Anda menjadi mahir dengan editor kode paling canggih yang tersedia.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-teal-200 via-teal-300 to-transparent dark:from-teal-800 dark:via-teal-700 dark:to-transparent"></div>
                            )}

                            {/* Card */}
                            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 group-hover:border-teal-200 dark:group-hover:border-teal-800 h-full">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                <div className="relative z-10">
                                    {/* Number Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                            <div className="relative w-14 h-14 bg-gradient-to-br from-teal-700 to-teal-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-2xl font-serif font-bold text-white">{step.number}</span>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 transform group-hover:rotate-6 transition-transform duration-300">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
