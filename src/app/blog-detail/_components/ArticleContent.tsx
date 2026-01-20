import React from 'react';
import { Share2 } from 'lucide-react';

export function ArticleContent() {
    return (
        <article className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12">
            <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
                <img
                    alt="Students collaborating in a modern library"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_3RKJfP18_u2RRxn_-k7j3aTyUnTO5Ey4XIpgijO5hFMBTqnNx2TC-4R_ZhvlBrx6xBoBd7yYx9a0JF3sV-hIzHXHt4xA5_3cVSmtqQUJC7OhSgTFcFHChfGb9hMF3MKu1cTsLfi-Y3J-jy-B5zs7qp2Hb3fRkEwikZqst9IEVpl4p1FbkzRjbJlUi6qWs2dDNhUCZkX-Xm311S6__bz2O3RtHTaa-XFe7Eq2Dm198J1FNiOciToYyX46wVx8SCTloBFoJqWAy6E"
                />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-blog-primary dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blog-primary dark:prose-a:text-blog-accent prose-blockquote:border-blog-accent">
                    <p className="lead font-serif italic text-2xl text-blog-primary dark:text-white/90 mb-8">
                        Seiring teknologi mengubah cara kita belajar dan berinteraksi, universitas harus beradaptasi. KelasInovatif memimpin dengan ruang kelas hybrid, kurikulum berbasis AI, dan fokus pada aplikasi dunia nyata.
                    </p>
                    <p>
                        Model aula kuliah tradisional telah melayani kita dengan baik selama berabad-abad, tetapi laju kemajuan teknologi yang cepat menuntut pendekatan baru. Mahasiswa saat ini adalah digital native, terbiasa dengan informasi instan dan lingkungan kolaboratif online. Untuk mempersiapkan mereka menghadapi tenaga kerja masa depan, kita harus mengintegrasikan alat-alat ini ke dalam inti pendidikan mereka.
                    </p>
                    <p>
                        Di KelasInovatif, kami percaya bahwa pengalaman universitas harus imersif, fleksibel, dan terhubung erat dengan komunitas global. Ini bukan hanya tentang memindahkan kuliah ke online; ini tentang menata ulang pedagogi itu sendiri.
                    </p>
                    <h2 className="mt-10 mb-6 text-3xl">Ruang Kelas Hybrid</h2>
                    <p>
                        Salah satu inisiatif unggulan kami adalah "ruang kelas tanpa batas." Dengan menggabungkan kehadiran fisik dengan partisipasi virtual definisi tinggi, kami memungkinkan mahasiswa dari benua yang berbeda untuk bekerja sama dalam proyek secara real-time. Ini tidak hanya mendemokratisasi akses ke pendidikan berkualitas tetapi juga memupuk keterampilan komunikasi lintas budaya yang penting untuk tempat kerja modern.
                    </p>
                    <blockquote className="my-10 border-l-4 border-blog-accent bg-gray-50 dark:bg-gray-800/50 py-6 px-8 rounded-r-xl not-italic">
                        <p className="font-serif text-xl leading-relaxed text-blog-primary dark:text-white mb-2">
                            "Pendidikan tidak lagi tentang transmisi pengetahuan, tetapi tentang penciptaan bersama. Mahasiswa kami bukan hanya konsumen; mereka adalah peserta aktif dalam proses penemuan."
                        </p>
                        <cite className="not-italic text-sm font-bold text-gray-500 block mt-4">
                            — Dr. Elena Rodriguez, Dekan Inovasi
                        </cite>
                    </blockquote>
                    <h3 className="mt-8 mb-4 text-2xl">Mengintegrasikan AI secara bertanggung jawab</h3>
                    <p>
                        Kecerdasan Buatan mengubah setiap industri, dan pendidikan tidak terkecuali. Alih-alih melarang alat AI, kami mengajarkan mahasiswa cara menggunakannya secara etis dan efektif. Dari asisten pembelajaran yang dipersonalisasi yang menyesuaikan dengan kecepatan setiap mahasiswa hingga analisis data kompleks dalam proyek penelitian, AI menjadi mitra dalam perjalanan pembelajaran.
                    </p>
                    <p>
                        Namun, kami tetap teguh dalam komitmen kami terhadap humaniora. Pemikiran kritis, empati, dan penalaran etis adalah keterampilan yang tidak dapat direplikasi oleh algoritma. Kurikulum kami memastikan bahwa sambil mahasiswa memperoleh keahlian teknis, mereka juga memperdalam pemahaman tentang kondisi manusia.
                    </p>
                    <figure className="my-10">
                        <img
                            alt="Students using tablets in a bright classroom"
                            className="rounded-xl w-full h-auto object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuf4qno2Jwc74tkxip7k3r85qAa6-kdqP6QieN26q0Qm-thIVCLIwQjGIGVTMuuHz_bM0_OWrEaTP8k3qopFPqTC7XRgAwFH4X8SvFoR_bXwB6JXbXRr4L04adKZrQ_SbKQwmAj7kpzFz5_FfPFxFLQ3xnmHlcgpIo68KLOQ2Sy6zEIxZdI8rmZ9WxICAhJpPYFFOH-jNkKLZT93S8B9wtQZBiJQQjz9tmLiMRaMxpsMTgzq4E54BfBPGHbWbdXowsYA_A_RlGpyQ"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                            Mahasiswa memanfaatkan alat AI untuk proyek penelitian kolaboratif.
                        </figcaption>
                    </figure>
                        <p>
                        Bergabunglah dengan kami saat kami melangkah berani ke era baru ini. Masa depan pendidikan ada di sini, dan ini lebih menarik, inklusif, dan inovatif dari sebelumnya.
                    </p>
                </div>

                {/* Tags and Share */}
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Tag:</span>
                        <a className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                            Pendidikan
                        </a>
                        <a className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                            Teknologi
                        </a>
                        <a className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                            Inovasi
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Bagikan:</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#3b5998] hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-blog-primary hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
