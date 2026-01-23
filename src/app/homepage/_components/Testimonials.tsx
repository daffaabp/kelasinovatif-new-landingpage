"use client";

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialData {
  id: number;
  title: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Perjalanan Transformasi Bersama Kelas Inovatif",
    quote: "Saya awam dengan AI, namun di Kelas Inovatif saya justru 'tersesat di jalan yang benar'. Di sini, pembelajaran diberikan perlahan dan bertahap. Hasilnya, saya bisa menyelesaikan studi magister saya, dan tahun depan berencana melanjutkan ke jenjang doktoral S3.",
    author: "Wayan Tangun Setiarien, M.M.",
    role: "Alumni Magister Manajemen",
    image: "/images/testimonials/Wayan Tangun.avif"
  },
  {
    id: 2,
    title: "Solusi Tepat Saat Membutuhkan",
    quote: "Saya mahasiswa hukum. Syukurnya, saya bertemu Kelas Inovatif di waktu yang tepat. Dengan bimbingan step by step yang sangat detail, saya berhasil menyusun proposal tesis dengan revisi yang sangat sedikit. Tingkat plagiasi juga rata-rata di bawah 10%. Materinya mudah dipahami, prosesnya jelas dan terstruktur.",
    author: "Akhmad Suhaidi, S.H",
    role: "Mahasiswa Hukum",
    image: "/images/testimonials/AKHMAD SUHAIDI.avif"
  },
  {
    id: 3,
    title: "Dari Workshop ke Buku Ber-ISBN",
    quote: "Jujur, saya sangat bersyukur mengenal kelas ini. Pak Arianto sangat sabar membimbing. Saya sudah ikut banyak workshop AI, tapi di Kelas Inovatif jauh lebih simple dan mudah dipraktikkan. Setelah menerapkan trik penulisan buku dari kelas intensif Cursor, alhamdulillah kini 6 buku saya terbit ber-ISBN. Target saya sekarang, setiap bulan menerbitkan satu buku baru.",
    author: "Dr. R. Arif Muljohadi, S.H., M.Hum.",
    role: "Dosen dan Penulis Buku",
    image: "/images/testimonials/Arif Mulyohadi.avif"
  },
  {
    id: 4,
    title: "Menjadi Doktor S3 Berkat Dukungan Kelas Inovatif",
    quote: "Alhamdulillah, saya berhasil menyelesaikan studi S3 Doktoral dengan predikat Cumlaude. Untuk teman-teman yang sedang dalam proses penulisan disertasi, tetap semangat—kalian pasti bisa! Terima kasih Kelas Inovatif atas support-nya; saya sangat terbantu dalam menelusuri jurnal-jurnal yang dibutuhkan dan menyelesaikan disertasi tepat waktu.",
    author: "Nur Aridha",
    role: "Alumni Doktoral S3",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    id: 5,
    title: "Disertasi Selesai & Publikasi Scopus Berkat Kelas Inovatif",
    quote: "Puji Tuhan, dengan mengikuti Kelas Inovatif, khususnya kelas intensif Cursor bersama mentor Pak Arianto, disertasi saya berhasil selesai. Skor Turnitin saya waktu itu 11% dan sebenarnya masih bisa lebih rendah lagi dengan bantuan Cursor, karena sangat akurat. Saya dan tim juga sudah membuktikan, artikel yang kami tulis dengan Cursor sudah berhasil tembus Scopus Q1.",
    author: "Dr. Leopold Baginda, S.Pd., M.Th.",
    role: "Alumni Doktoral & Publikasi Scopus",
    image: "/images/testimonials/LEOPOLD BAGINDA.avif"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  const current = testimonialData[currentIndex];

  return (
    <section className="py-20 bg-eduzin-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider">Testimoni</span>
            <h2 className="text-4xl font-medium max-w-xs">Kisah sukses dari anggota komunitas kami.</h2>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-eduzin-dark hover:text-white transition-colors cursor-pointer"
                aria-label="Testimoni sebelumnya"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-eduzin-dark text-white flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Testimoni selanjutnya"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white flex flex-col justify-between h-full min-h-[300px] transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-eduzin-dark mb-4 block">{current.title}</span>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                &quot;{current.quote}&quot;
              </p>
            </div>

             <div className="flex items-center gap-4">
               <img 
                 src={current.image} 
                 alt={current.author} 
                 className="w-12 h-12 rounded-full object-cover" 
               />
               <div>
                 <p className="font-bold text-sm">{current.author}</p>
                 <p className="text-xs text-gray-500">{current.role}</p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
