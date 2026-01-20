"use client";

import { useState } from 'react';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';

interface Week {
    number: string;
    title: string;
    subtitle: string;
    topics: string[];
}

export function Syllabus() {
    const [openWeek, setOpenWeek] = useState<number>(1);

    const weeks: Week[] = [
        {
            number: "01",
            title: "Pengantar NotebookLM",
            subtitle: "Memulai penelitian berbasis AI.",
            topics: [
                "Memahami kemampuan dan keterbatasan NotebookLM.",
                "Menyiapkan notebook pertama Anda dan mengunggah sumber.",
                "Aktivitas: Membuat basis pengetahuan berbasis AI pertama Anda."
            ]
        },
        {
            number: "02",
            title: "Teknik Query Lanjutan",
            subtitle: "Menguasai prompt engineering untuk penelitian.",
            topics: [
                "Membuat pertanyaan yang efektif untuk wawasan yang lebih dalam.",
                "Menggunakan query lanjutan untuk mengeksplorasi topik secara sistematis.",
                "Aktivitas: Analisis komparatif di berbagai sumber."
            ]
        },
        {
            number: "03",
            title: "Manajemen & Organisasi Sumber",
            subtitle: "Membangun basis pengetahuan terstruktur.",
            topics: [
                "Praktik terbaik untuk mengorganisir materi penelitian.",
                "Menggabungkan berbagai jenis dokumen (PDF, catatan, halaman web).",
                "Aktivitas: Membangun notebook penelitian yang komprehensif."
            ]
        },
        {
            number: "04",
            title: "Penulisan & Sintesis Berbantuan AI",
            subtitle: "Dari wawasan ke output akademik.",
            topics: [
                "Menggunakan NotebookLM untuk menghasilkan kerangka literature review.",
                "Memvalidasi konten yang dihasilkan AI terhadap sumber.",
                "Proyek Akhir: Buat ringkasan penelitian menggunakan wawasan NotebookLM."
            ]
        }
    ];

    return (
        <section className="py-20 bg-eduzin-dark/5 dark:bg-gray-800/50 transition-colors duration-300" id="syllabus">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12">
                    <div>
                        <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Kurikulum</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">Silabus Kelas</h3>
                    </div>
                    <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition">
                        <Download className="w-4 h-4 mr-2" />
                        Unduh PDF
                    </button>
                </div>
                <div className="space-y-4">
                    {weeks.map((week, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all">
                            <button
                                onClick={() => setOpenWeek(openWeek === index ? -1 : index)}
                                className="w-full flex justify-between items-center p-6 cursor-pointer text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-eduzin-dark/10 dark:bg-eduzin-dark/20 flex items-center justify-center text-eduzin-dark dark:text-green-400 font-bold font-serif text-xl">
                                        {week.number}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white hover:text-eduzin-dark dark:hover:text-green-400 transition">{week.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{week.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openWeek === index && (
                                <div className="px-6 pb-6 pt-0 ml-[4.5rem] border-l-2 border-eduzin-dark/10 dark:border-eduzin-dark/20">
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        {week.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
