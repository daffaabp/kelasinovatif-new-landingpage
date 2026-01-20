import React from 'react';

export function BlogGrid() {
    return (
        <section className="py-20 bg-[#F7F5F0] dark:bg-[#0F1210] border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 block">TERBARU DARI BLOG</span>
                    <a className="text-xs font-bold underline decoration-2 underline-offset-4 text-[#1C302B] dark:text-white" href="#">LIHAT SEMUA</a>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            category: "Akademik",
                            date: "21 Juli",
                            title: "Mendefinisikan ulang pengalaman universitas untuk era modern.",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2-Ozc9WyJWE_sZfKMzso5W2WP1Ku4g_c5iur5lEwuUZWAWyUzr3li1DNxSWZMGRr11KWkI4PBhVdXD1gYL6TXxhMM3TfZA2yorUhmnYioaGiZNmaLNMvfSbVVdtCwetAdMQ8NvfWLRCLrvEbiIdNOGveLF0_iSKyKQd0mz1iztRCPyN1V9it-iWrCKVj3eLQuQwnuXwH6K8s1lNrKforKDjjF5k5kbpWHqNORQVBLgpsd1SSX71EBG5YiB5kX9Q2YsKCJJ7iUP7n"
                        },
                        {
                            category: "Kehidupan Kampus",
                            date: "20 Juli",
                            title: "5 tips untuk menyeimbangkan studi dan kehidupan sosial di kampus.",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRtZLyHAel3sZeiV-rUO1DrH432H0kDL9FjmxrBJC-DIPPmpAaGQ526PAqWXeTZwQYa8dVVnQ-4lfOXCbe4shd74b7LC7hq_yspC7DugzcHMlvV7Tcx7NKVzbRnH-sQb6cIOHwmTa_t-PAp1YyCbVRTfuba04w9Dhb2YIXkCu4UtR-Loy5rgFC2sLiLshOWtyY3Vr-mFHuA3mAF_Dg6js7SUmJtMqCRxFq1r1-_KfX0Jhffl2yCpI5aMkFkDvde1nuFOhmANznYNYk"
                        },
                        {
                            category: "Penelitian",
                            date: "18 Juli",
                            title: "Lab penelitian baru dibuka untuk studi energi berkelanjutan.",
                            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIso1zX41xaWOpI0HTjp2ljEy_dmtFj5VIuO6b_QWLC6Kx9TbALuPyWScEasCaXNqAs9GSqW8uGGMyBAL2THfztXBn_eZznNzYe58zmTGfzD0nN93xu6cDRkkUKlcScMI_3dq4Pzst1055Q3njIrG6gCEwkiJiPYHVcJ2pkmBS1IMCD6B9QOyV9TT4KDAzZoiK0QFVMIf5aCOoqVjv_WBz--ecOYX_4sUWktH-PyPcOh5e6PxOmtTjlhS_MwSur4HyxzGEMCp4RzQ7"
                        }
                    ].map((item, i) => (
                        <article key={i} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-xl mb-4 h-48">
                                <img alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src={item.image} />
                            </div>
                            <div className="flex gap-2 text-[10px] font-bold uppercase text-gray-400 mb-2">
                                <span>{item.category}</span>
                                <span>•</span>
                                <span>{item.date}</span>
                            </div>
                            <h3 className="font-serif text-lg text-[#1C302B] dark:text-white leading-snug group-hover:text-gray-600 dark:group-hover:text-gray-300 transition">
                                {item.title}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
