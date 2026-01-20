import React from 'react';

export function Hero() {
    return (
        <header className="relative bg-blog-secondary dark:bg-blog-surface-dark pt-16 pb-32 lg:pt-20 lg:pb-48 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blog-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blog-primary/10 rounded-full blur-3xl"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                    <span className="bg-blog-accent text-blog-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Akademik
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">24 Oktober 2023</span>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">5 menit baca</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-blog-primary dark:text-white mb-8 leading-tight">
                    Mendefinisikan ulang pengalaman universitas untuk era digital modern
                </h1>
                <div className="flex items-center justify-center gap-4">
                    <img
                        alt="Natalia T. Morgan"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSFmWiDYuJnvrPwYJ69MGEJg6-482Wf-_44x3l25zmqao8jYWwIVgHUtJKMIHejYCcUn13h3IfmCd9L2nHsZPr5v5-9TaT-sThn8ghH9i0YC1rOyieUqShfyHbUEQWCHaHtaA-qG8c2fq5Uy9cfhjz_p-iwEtxSD-casg9e-tAVv8w9Xx4rowpkVdx2mPMGF9pU2hOafen06_T4E_krjM8ZL_uzvrYojkCHUbu6f7CyeXiX1UoAMyNWIPDYcZUxQhjhoUNoCW8t8"
                    />
                    <div className="text-left">
                        <p className="text-base font-bold text-blog-primary dark:text-white leading-none mb-1">
                            Natalia T. Morgan
                        </p>
                        <p className="text-xs text-blog-primary/60 dark:text-blog-accent font-bold uppercase tracking-wide">
                            Profesor Sejarah Seni
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
