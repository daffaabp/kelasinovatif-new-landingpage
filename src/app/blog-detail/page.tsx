import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Breadcrumb } from './_components/Breadcrumb';
import { Hero } from './_components/Hero';
import { ArticleContent } from './_components/ArticleContent';
import { AuthorBio } from './_components/AuthorBio';
import { Comments } from './_components/Comments';
import { RelatedArticles } from './_components/RelatedArticles';
import { Newsletter } from './_components/Newsletter';

export default function BlogDetailPage() {
    return (
        <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
            <Navbar />
            <Breadcrumb />
            <Hero />

            <div className="relative -mt-24 lg:-mt-32 pb-16 px-4 sm:px-6 lg:px-8 z-20">
                <div className="max-w-4xl mx-auto">
                    <ArticleContent />
                    <AuthorBio />
                    <Comments />
                </div>
            </div>

            <RelatedArticles />
            <Newsletter />
            <Footer />
        </main>
    );
}