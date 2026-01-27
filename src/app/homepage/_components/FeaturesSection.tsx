import { Monitor, Award, Users, MessagesSquare, ArrowRight } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Mosaic */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4 pt-12">
              <img src="/images/documentation-alumni/dokumentasi2.avif" className="w-full h-48 object-cover rounded-lg" alt="Kegiatan bersama member 1" />
              <img src="/images/documentation-alumni/dokumentasi6.avif" className="w-full h-64 object-cover rounded-lg" alt="Kegiatan bersama member 2" />
            </div>
            <div className="space-y-4">
              <img src="/images/documentation-alumni/dokumentasi3.avif" className="w-full h-64 object-cover rounded-lg" alt="Kegiatan bersama member 3" />
              <img src="/images/documentation-alumni/dokumentasi5.avif" className="w-full h-48 object-cover rounded-lg" alt="Kegiatan bersama member 4" />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop" className="w-full h-48 object-cover rounded-lg" alt="Kegiatan bersama member" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg" alt="Seminar AI Kelas Inovatif" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2670&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg" alt="Sesi mentoring AI" />
              <img src="/images/comunity4.jpeg" className="w-full h-48 object-cover rounded-lg" alt="Sesi komunitas" />
            </div>
          </div> */}

          {/* Right: Content */}
          <div className="pl-0 lg:pl-10">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Mengapa Memilih Kami?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-eduzin-dark">
              Jadilah Inovator Bersama Kelas Inovatif
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Kelas Inovatif adalah komunitas AI untuk akademisi yang ingin belajar, berkolaborasi, dan berkembang bersama — didukung jalur pembelajaran, mentoring, networking, serta bukti nyata dari ribuan alumni sukses.
            </p>

            <div className="space-y-7 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduzin-light rounded-lg">
                  <Award size={20} className="text-eduzin-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mentor & Alumni Terpercaya</h4>
                  <p className="text-md text-gray-600">
                    Dibimbing instruktur berpengalaman, serta support nyata dari alumni doktoral dan peneliti AI Indonesia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduzin-light rounded-lg">
                  <Users size={20} className="text-eduzin-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Komunitas Aktif & Supportif</h4>
                  <p className="text-md text-gray-600">
                    Lingkungan belajar yang terbuka, ramah, dan inklusif — mendukung sharing pengetahuan, kolaborasi, dan pengembangan jaringan profesional.
                  </p>
                </div>
              </div>
            </div>

            <a href="#daftar" className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-eduzin-dark hover:text-white">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-eduzin-dark group-hover:text-white transition-colors">
                <ArrowRight size={14} />
              </span>
              Gabung Sekarang
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
