"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { blogPosts } from './blogData';

const categories = ['Semua Postingan', 'Kehidupan Kampus', 'Penelitian', 'Acara', 'Alumni'];

export function BlogGrid() {
    const [selectedCategory, setSelectedCategory] = useState('Semua Postingan');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts
        .filter(post => !post.featured) // Exclude featured post
        .filter(post => {
            const matchesCategory = selectedCategory === 'Semua Postingan' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

    return (
        <section className="py-12 bg-blog-bg-light dark:bg-blog-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition shadow-md ${selectedCategory === category
                                    ? 'bg-blog-primary text-white'
                                    : 'bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white'
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <input
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blog-primary dark:focus:ring-white focus:border-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
                            placeholder="Cari artikel..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <a key={post.id} href="/blog-detail">
                            <article
                                className="flex flex-col bg-white dark:bg-blog-surface-dark rounded-xl overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                        src={post.image}
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded text-blog-primary dark:text-white">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide font-medium">
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold text-blog-primary dark:text-white mb-3 group-hover:text-blog-primary/80 dark:group-hover:text-white/80 transition">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <img
                                                alt={post.author.name}
                                                className="w-6 h-6 rounded-full"
                                                src={post.author.image}
                                            />
                                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {post.author.name}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400">{post.readTime}</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center items-center gap-4">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm disabled:opacity-50">
                        ←
                    </button>
                    <button className="w-10 h-10 rounded-full bg-blog-primary text-white font-medium shadow-md">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm">
                        3
                    </button>
                    <span className="text-gray-400">...</span>
                    <button className="w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm">
                        8
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm">
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
