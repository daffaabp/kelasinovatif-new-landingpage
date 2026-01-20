import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from './blogData';

export function FeaturedPost() {
    const featuredPost = blogPosts.find(post => post.featured);

    if (!featuredPost) return null;

    return (
        <section className="relative -mt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white dark:bg-blog-surface-dark rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-gray-800">
                    <div className="lg:w-1/2 relative h-64 lg:h-auto">
                        <img
                            alt={featuredPost.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            src={featuredPost.image}
                        />
                        <div className="absolute top-4 left-4 bg-white dark:bg-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md text-blog-primary dark:text-white">
                            Unggulan
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <span className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-blog-accent"></span> {featuredPost.category}
                            </span>
                            <span>•</span>
                            <span>{featuredPost.date}</span>
                        </div>
                        <a href="/blog-detail">
                            <h2 className="text-3xl lg:text-4xl font-serif text-blog-primary dark:text-white mb-4 leading-tight hover:underline cursor-pointer">
                                {featuredPost.title}
                            </h2>
                        </a>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                                <img
                                    alt={featuredPost.author.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700"
                                    src={featuredPost.author.image}
                                />
                                <div>
                                    <p className="text-sm font-semibold text-blog-primary dark:text-white">
                                        {featuredPost.author.name}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Profesor Sejarah Seni</p>
                                </div>
                            </div>
                            <a
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-blog-primary dark:text-white hover:bg-blog-primary hover:text-white dark:hover:bg-white dark:hover:text-blog-primary transition"
                                href="/blog-detail"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
