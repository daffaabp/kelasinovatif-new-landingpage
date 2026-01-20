"use client";

import React, { useState } from 'react';
import { ThumbsUp, Reply, MoreHorizontal, Send } from 'lucide-react';

const commentsData = [
    {
        id: 1,
        author: 'John Doe',
        avatar: null,
        initials: 'JD',
        date: 'October 25, 2023 at 2:30 PM',
        content: 'Ini adalah inisiatif yang fantastis! Saya sangat tertarik dengan bagaimana integrasi AI akan bekerja untuk kursus penulisan kreatif. Apakah ada informasi lebih lanjut tentang itu? Saya pikir menyeimbangkan kreativitas manusia dengan bantuan AI adalah tantangan utama.',
        likes: 12,
    },
    {
        id: 2,
        author: 'Sarah Jenkins',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4eDBix9oUV3rqN64a7w-xzh2bIC6nQCWrNngUWRS7zi5MZJLYDRntjtpQUVQs-7fUky5ncx0Gjh4wU6EoWWOOjrEfXxS2YGOhxzZX6mVIRSXgNHdEZT18IZD9Z298d_s3jnwvbVnKnaU-ADZE979t3WAy8EzmOTTUxtYPWd2x-uBhpaklpJOz3yXKalnxmEtWwYm-gbHmdPKllEM4qi2qbNZlBqUURC0fWllLwbSyw1a73lC2eTAMi2gMUgiVDCwIbCiVk2IpaJs',
        initials: 'SJ',
        date: 'October 26, 2023 at 9:15 AM',
        content: 'Sepenuhnya setuju dengan sentimen tentang pemikiran kritis. Itu adalah satu hal yang tidak bisa digantikan oleh AI. Bacaan yang bagus, Profesor Morgan! Penekanan pada kolaborasi lintas budaya sangat tepat waktu.',
        likes: 5,
    },
];

export function Comments() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, comment, saveInfo });
    };

    return (
        <div className="mb-16 scroll-mt-24" id="comments">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-blog-primary dark:text-white">
                    Komentar ({commentsData.length})
                </h3>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Urutkan berdasarkan:</span>
                    <select className="bg-transparent text-sm font-bold text-blog-primary dark:text-white border-none focus:ring-0 p-0 cursor-pointer">
                        <option>Terbaru</option>
                        <option>Terlama</option>
                        <option>Populer</option>
                    </select>
                </div>
            </div>

            {/* Comments List */}
            <div className="space-y-8 mb-12">
                {commentsData.map((commentItem) => (
                    <div key={commentItem.id} className="flex gap-4 md:gap-6 group">
                        <div className="flex-shrink-0">
                            {commentItem.avatar ? (
                                <img
                                    alt={commentItem.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                    src={commentItem.avatar}
                                />
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-blog-secondary dark:bg-gray-700 flex items-center justify-center text-blog-primary dark:text-white font-bold text-lg font-serif">
                                    {commentItem.initials}
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="bg-white dark:bg-blog-surface-dark p-6 md:p-8 rounded-3xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-800 transition-shadow hover:shadow-md">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h5 className="font-bold text-blog-primary dark:text-white text-base">
                                            {commentItem.author}
                                        </h5>
                                        <span className="text-xs text-gray-400 font-medium">{commentItem.date}</span>
                                    </div>
                                    <button className="text-gray-400 hover:text-blog-primary transition">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {commentItem.content}
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <button className="flex items-center gap-1.5 text-xs font-bold text-blog-primary dark:text-blog-accent hover:underline">
                                        <Reply className="w-4 h-4" /> BALAS
                                    </button>
                                    <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-blog-primary dark:hover:text-white">
                                        <ThumbsUp className="w-4 h-4" /> {commentItem.likes}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Comment Form */}
            <div className="bg-blog-primary/5 dark:bg-blog-surface-dark/50 p-8 md:p-10 rounded-3xl border border-dashed border-blog-primary/20 dark:border-gray-700">
                <h4 className="text-xl font-serif font-bold text-blog-primary dark:text-white mb-2">
                    Bergabunglah dalam percakapan
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                    Alamat email Anda tidak akan dipublikasikan. Bidang yang wajib diisi ditandai dengan *
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                Nama *
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-blog-surface-dark text-sm focus:outline-none focus:ring-2 focus:ring-blog-primary dark:focus:ring-white transition"
                                placeholder="John Doe"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                Email *
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-blog-surface-dark text-sm focus:outline-none focus:ring-2 focus:ring-blog-primary dark:focus:ring-white transition"
                                placeholder="john@example.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Komentar *
                        </label>
                        <textarea
                            className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-blog-surface-dark text-sm focus:outline-none focus:ring-2 focus:ring-blog-primary dark:focus:ring-white transition resize-none"
                            placeholder="Tuliskan pemikiran Anda di sini..."
                            rows={5}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            className="w-4 h-4 rounded text-blog-primary focus:ring-blog-primary border-gray-300 dark:border-gray-600 dark:bg-blog-surface-dark"
                            id="save-info"
                            type="checkbox"
                            checked={saveInfo}
                            onChange={(e) => setSaveInfo(e.target.checked)}
                        />
                        <label className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none" htmlFor="save-info">
                            Simpan nama dan email saya untuk komentar berikutnya.
                        </label>
                    </div>
                    <button
                        className="px-8 py-3 bg-blog-primary text-white rounded-full text-sm font-bold uppercase tracking-wide hover:bg-blog-primary/90 transition shadow-lg mt-2 inline-flex items-center gap-2"
                        type="submit"
                    >
                        Kirim Komentar <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}
