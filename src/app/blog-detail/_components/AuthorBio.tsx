import React from 'react';
import { Mail, Globe, CheckCircle } from 'lucide-react';

export function AuthorBio() {
    return (
        <div className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
                <div className="w-24 h-24 rounded-full p-1 border-2 border-dashed border-blog-accent">
                    <img
                        alt="Natalia T. Morgan"
                        className="w-full h-full rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSFmWiDYuJnvrPwYJ69MGEJg6-482Wf-_44x3l25zmqao8jYWwIVgHUtJKMIHejYCcUn13h3IfmCd9L2nHsZPr5v5-9TaT-sThn8ghH9i0YC1rOyieUqShfyHbUEQWCHaHtaA-qG8c2fq5Uy9cfhjz_p-iwEtxSD-casg9e-tAVv8w9Xx4rowpkVdx2mPMGF9pU2hOafen06_T4E_krjM8ZL_uzvrYojkCHUbu6f7CyeXiX1UoAMyNWIPDYcZUxQhjhoUNoCW8t8"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-blog-primary rounded-full flex items-center justify-center text-white border-2 border-white dark:border-blog-surface-dark">
                    <CheckCircle className="w-4 h-4" />
                </div>
            </div>
            <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                        <h4 className="text-xl font-serif font-bold text-blog-primary dark:text-white">
                            Natalia T. Morgan
                        </h4>
                        <p className="text-xs text-blog-primary/60 dark:text-blog-accent font-bold uppercase tracking-wide mt-1">
                            Profesor Sejarah Seni
                        </p>
                    </div>
                    <a className="hidden md:inline-flex items-center text-xs font-bold text-blog-primary dark:text-white border-b-2 border-blog-accent pb-0.5 hover:text-opacity-80 transition" href="#">
                        LIHAT PROFIL
                    </a>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 mt-4">
                    Natalia memiliki pengalaman lebih dari 15 tahun di pendidikan tinggi, fokus pada persimpangan seni klasik dan teknologi modern. Dia memimpin kelompok penelitian humaniora digital di KelasInovatif dan sering menjadi pembicara di konferensi ed-tech internasional.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <a className="text-gray-400 hover:text-blog-primary dark:hover:text-white transition" href="#">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a className="text-gray-400 hover:text-blog-primary dark:hover:text-white transition" href="#">
                        <Globe className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
