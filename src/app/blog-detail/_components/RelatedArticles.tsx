import React from 'react';
import { ArrowRight } from 'lucide-react';

const relatedArticles = [
    {
        id: 1,
        title: 'Laboratorium penelitian baru dibuka untuk studi energi berkelanjutan.',
        excerpt: 'Universitas meluncurkan fasilitas mutakhirnya yang didedikasikan untuk menyelesaikan tantangan energi global.',
        category: 'Penelitian',
        date: '10 Juli 2023',
        readTime: '4 menit baca',
        author: {
            name: 'Eliana M.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG6rYoszsTnOTgHKDr3RHVu6VwJw6IxY4cWovJ74c-0RHzdLlgyxzA7YUB6DZB66YhqXacBIkFcfpiDt-NL4iJDq8ExVPmlONlwV84vOpyodhl8Ec3cA_S4W-hgbDt_j4EbmqFp9DPAvFT6753IknPtkDtZLoKq9Ra4Ea7gU671xOo1JTcvf2Rankf82Q7-566J2HPZGF2TW32pJ25wV-HffziGY3tEe2dOIEv8fPKmQ7HzeQbR3ufh6yezqEAjiqwLdkLrLoqMYs',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCba148ME9ezU6z6fj0u-cVKrCO_3W1CFWrATXwdVikZBAg736QaEdxZawmw5Zfo_OEgTLdodjBiv4qX17P4Ye3XQgMcp4ep5OBPQ5ZmFfcZxALtpyBq9Lry4OFFlApCDTx-IMT2GvhbNzcZ578_svNFmsPHx9jaI08g5GaCcW6A8Jd29A-fPUO-lwpxss5uly8EnrZgLueXM8LFdMhPqkQb2EoxkpdXQ9xJvAyaSMbxplLJeqeMMaQRfmkvWUp4CNQ1XNk36qEuNg',
    },
    {
        id: 2,
        title: '5 tips untuk menyeimbangkan studi dan kehidupan sosial di kampus.',
        excerpt: 'Nasihat ahli tentang mengelola waktu Anda secara efektif sambil menikmati pengalaman universitas penuh.',
        category: 'Kehidupan Kampus',
        date: '07 Juli 2023',
        readTime: '3 menit baca',
        author: {
            name: 'Gabriella S.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC_Q_2YNLWSUDQ2GwTHvydgThFZejMYorndjSLDNbVd7nDHaaqK_Haxxcd4ydVc05xnC0of0i-6kdsYZp_0ldr3ljA-AzRTRGE3r0Tlkl4D7zXngF8mLvkSVA4yaWI0sZ8rDKNUCBD_EGi_FeBx8NyGk-GNYlpjb33biGFDbPmtoJXh6DR9tcT_P4OXrlPXbPKNKs-wtdnNv8qCwgL_PSn6V3pbJsaafVeJ6UikZfqfzVLG8LqDxc1FZCHcBv2AKFy51inq4W1JD8',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuf4qno2Jwc74tkxip7k3r85qAa6-kdqP6QieN26q0Qm-thIVCLIwQjGIGVTMuuHz_bM0_OWrEaTP8k3qopFPqTC7XRgAwFH4X8SvFoR_bXwB6JXbXRr4L04adKZrQ_SbKQwmAj7kpzFz5_FfPFxFLQ3xnmHlcgpIo68KLOQ2Sy6zEIxZdI8rmZ9WxICAhJpPYFFOH-jNkKLZT93S8B9wtQZBiJQQjz9tmLiMRaMxpsMTgzq4E54BfBPGHbWbdXowsYA_A_RlGpyQ',
    },
    {
        id: 3,
        title: 'Merayakan Kelas 2023: Sorotan & Foto.',
        excerpt: 'Kilas balik momen-momen tak terlupakan dari upacara kelulusan dan perayaan tahun ini.',
        category: 'Acara',
        date: '15 Agustus 2023',
        readTime: '6 menit baca',
        author: {
            name: 'Marcus L.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY-sN1dGpKtzQ-a6s6z0hXES0YEI7JI_Dzoe3F_krIF3TXnFtkv6cQ418uftvjhDJ93U1KDEN7V29giO8PCDlnwPa0jyfg1X3XWojVQPT-_A4f3ok_JviTMKWm6-VqBCiRLeRWiKhINCfsinVnsWmymG4StKGSLHPQhySC9NOTR2xI64qTlpUDeGgGMAAx_3UiojZfbXd7bAndhE25oJjh0JKFNamgJIzeXhcGXK_N9P_oLC8Ih5AYUwGkPmV5j1MOP89k7u9CYLg',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2GLu1MTjtPSfIGsyt_gJ3CXCO3DZ_x5AnBjl0pq01DJmlG_FOyb-mR00t9IjJNaQakHilzVMm9yRktQxbVC1e57aoywfhAMFFwstRBW9Jaz8p1rOlzVzIGmppSopwJo_2X7RLMBJ1vww_rmaJ9F9f3yGp7GTEyGxTieaDA0A8zY8UAR1Fu27PpzKTiHmGLDdvclbLOCt5vwDh7sT-aWW4oKIf0d9Lrhy-tRdXJUVlbhyvV4jTuc8gSL5l13O8dBdB1Oa-BaSih1M',
    },
];

export function RelatedArticles() {
    return (
        <section className="py-20 bg-white dark:bg-blog-surface-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-blog-accent font-bold tracking-wider text-xs uppercase mb-3 block">
                            Lebih banyak untuk dijelajahi
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-blog-primary dark:text-white">
                            Artikel Terkait
                        </h2>
                    </div>
                    <a className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blog-primary dark:text-white hover:text-blog-accent transition uppercase tracking-wide" href="/blogs">
                        Lihat semua postingan <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedArticles.map((article) => (
                        <article
                            key={article.id}
                            className="flex flex-col bg-blog-bg-light dark:bg-[#252525] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group h-full"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                    src={article.image}
                                />
                                <div className="absolute top-4 left-4 bg-white/95 dark:bg-blog-surface-dark/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full text-blog-primary dark:text-white shadow-sm">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                                        {article.date}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        {article.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-blog-primary dark:text-white mb-3 group-hover:text-blog-primary/70 dark:group-hover:text-blog-accent transition leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-3 pt-6 border-t border-gray-200 dark:border-gray-700/50">
                                    <img
                                        alt={article.author.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                        src={article.author.image}
                                    />
                                    <span className="text-xs font-bold text-blog-primary dark:text-white">
                                        {article.author.name}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 md:hidden text-center">
                    <a className="inline-flex items-center gap-2 text-sm font-bold text-blog-primary dark:text-white hover:text-blog-accent transition uppercase tracking-wide border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full" href="/blogs">
                        Lihat semua postingan <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
