"use client";

import { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';

interface Week {
    number: number;
    title: string;
    subtitle: string;
    lessons: string[];
}

export function Syllabus() {
    const [openWeek, setOpenWeek] = useState<number>(0);

    const weeks: Week[] = [
        {
            number: 1,
            title: "Pengantar Coding Berbantuan AI",
            subtitle: "Minggu 1 • 3 Pelajaran",
            lessons: [
                "Memahami antarmuka Cursor dan kemampuan AI",
                "Menyiapkan lingkungan pengembangan Anda",
                "Kode pertama yang dihasilkan AI: Membangun aplikasi sederhana"
            ]
        },
        {
            number: 2,
            title: "Generasi Kode Lanjutan",
            subtitle: "Minggu 2 • 4 Pelajaran",
            lessons: [
                "Menulis prompt yang efektif untuk fitur kompleks",
                "Iterasi pada kode yang dihasilkan AI",
                "Debugging dengan bantuan AI"
            ]
        },
        {
            number: 3,
            title: "Refactoring & Optimisasi",
            subtitle: "Minggu 3 • 3 Pelajaran",
            lessons: [
                "Mengubah kode legacy dengan AI",
                "Teknik optimisasi performa",
                "Praktik terbaik code review dengan Cursor"
            ]
        },
        {
            number: 4,
            title: "Proyek Akhir & Sertifikasi",
            subtitle: "Minggu 4 • 2 Pelajaran",
            lessons: [
                "Membangun aplikasi full-stack dengan Cursor",
                "Mempresentasikan proyek Anda dan menerima sertifikasi"
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">Silabus Kursus</h2>
                        <p className="text-gray-600 dark:text-gray-400">10 minggu • 24 Video Pelajaran • 5 Proyek</p>
                    </div>
                    <button className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-400 font-medium hover:underline text-sm">
                        Unduh Silabus PDF
                        <Download className="w-4 h-4" />
                    </button>
                </div>
                <div className="space-y-4">
                    {weeks.map((week, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 border-gray-200 dark:border-gray-700 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenWeek(openWeek === index ? -1 : index)}
                                className="flex items-center justify-between p-6 cursor-pointer w-full text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-700 to-teal-800 text-white flex items-center justify-center font-bold font-serif shadow-lg">
                                        {week.number}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{week.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{week.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openWeek === index && (
                                <div className="px-6 pb-6 pt-2 border-t-2 border-gray-200 dark:border-gray-700">
                                    <ul className="space-y-3 mt-4">
                                        {week.lessons.map((lesson, lessonIndex) => (
                                            <li key={lessonIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                                <svg className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                                </svg>
                                                <span>{lesson}</span>
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
