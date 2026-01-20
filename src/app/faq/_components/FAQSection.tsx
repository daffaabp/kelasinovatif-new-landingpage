"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
    {
        title: 'Penerimaan',
        questions: [
            {
                question: 'Apa saja persyaratan penerimaan?',
                answer: 'Persyaratan penerimaan bervariasi menurut program. Secara umum, kami memerlukan formulir aplikasi yang lengkap, transkrip, surat rekomendasi, dan pernyataan pribadi. Beberapa program mungkin juga memerlukan skor tes standar atau pengajuan portofolio.',
            },
            {
                question: 'Kapan batas waktu pendaftaran?',
                answer: 'Batas waktu pendaftaran bervariasi menurut program dan semester. Untuk penerimaan Fall, sebagian besar program memiliki batas waktu 1 Maret. Untuk penerimaan Spring, batas waktu biasanya 1 Oktober. Kami merekomendasikan untuk mendaftar lebih awal karena beberapa program memiliki tempat terbatas.',
            },
            {
                question: 'Apakah Anda menawarkan beasiswa?',
                answer: 'Ya, kami menawarkan berbagai beasiswa berdasarkan prestasi akademik, kebutuhan finansial, dan bakat khusus. Komite beasiswa kami meninjau semua aplikasi secara otomatis, dan Anda juga dapat mengajukan beasiswa bernama tertentu melalui portal bantuan keuangan kami.',
            },
        ],
    },
    {
        title: 'Program Akademik',
        questions: [
            {
                question: 'Bisakah saya mengambil double major?',
                answer: 'Ya, mahasiswa dapat mengejar double major dengan persetujuan dari kedua departemen. Anda perlu memenuhi semua persyaratan untuk kedua major dan bekerja dengan penasihat akademik untuk membuat jadwal kursus yang layak.',
            },
            {
                question: 'Apakah kelas online tersedia?',
                answer: 'Kami menawarkan pilihan kursus online dan hybrid yang terus berkembang. Beberapa program tersedia sepenuhnya online, sementara yang lain menawarkan campuran opsi pembelajaran tatap muka dan virtual. Periksa dengan penasihat program Anda untuk ketersediaan khusus.',
            },
            {
                question: 'Berapa rasio mahasiswa-ke-dosen?',
                answer: 'Rasio mahasiswa-ke-dosen kami adalah 12:1, memastikan perhatian yang dipersonalisasi dan peluang mentorship. Ukuran kelas kecil memungkinkan pengalaman pembelajaran yang lebih interaktif dan hubungan yang lebih kuat dengan profesor.',
            },
        ],
    },
    {
        title: 'Kehidupan Kampus',
        questions: [
            {
                question: 'Apakah perumahan dijamin untuk mahasiswa baru?',
                answer: 'Ya, perumahan di kampus dijamin untuk semua mahasiswa tahun pertama yang mengajukan aplikasi perumahan mereka sebelum batas waktu. Kami menawarkan berbagai opsi asrama untuk menyesuaikan preferensi dan anggaran yang berbeda.',
            },
            {
                question: 'Aktivitas ekstrakurikuler apa saja yang tersedia?',
                answer: 'Kami memiliki lebih dari 200 organisasi mahasiswa, termasuk klub akademik, kelompok budaya, tim olahraga, seni pertunjukan, dan organisasi layanan komunitas. Mahasiswa juga dapat memulai klub baru dengan persetujuan yang tepat.',
            },
        ],
    },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (categoryIndex: number, questionIndex: number) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <section className="py-16 bg-white dark:bg-faq-bg-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <h2 className="text-2xl font-serif font-bold text-faq-primary dark:text-white mb-6">
                            {category.title}
                        </h2>
                        <div className="space-y-3">
                            {category.questions.map((item, questionIndex) => {
                                const key = `${categoryIndex}-${questionIndex}`;
                                const isOpen = openItems[key];
                                return (
                                    <div
                                        key={questionIndex}
                                        className={`rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                                            ? 'bg-white dark:bg-faq-surface-dark shadow-lg border border-faq-primary/20 dark:border-gray-700'
                                            : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700'
                                            }`}
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors"
                                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                                        >
                                            <span className={`font-medium ${isOpen ? 'text-faq-primary dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-faq-primary' : ''
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
