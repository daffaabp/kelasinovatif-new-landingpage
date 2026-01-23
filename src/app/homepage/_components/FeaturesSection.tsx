import { Monitor, Award, ArrowRight } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Mosaic */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop" className="w-full h-48 object-cover rounded-lg" alt="Student" />
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg" alt="Campus" />
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2670&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg" alt="Library" />
              <img src="/images/comunity4.jpeg" className="w-full h-48 object-cover rounded-lg" alt="Group" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="pl-0 lg:pl-10">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Mengapa pilih kami?</span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">Komunitas Kelas Inovatif adalah tempat untuk bertumbuh bersama</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Bergabung dengan komunitas AI terbesar di Indonesia. Dapatkan akses ke mentoring, bedah kasus, prompt library, dan jaringan profesional yang mendukung perjalanan belajar AI Anda. Dari akademik hingga bisnis dan kreator—semua ada di sini.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduzin-light rounded-lg">
                  <Monitor size={20} className="text-eduzin-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Pengajaran & pembelajaran tepat waktu</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduzin-light rounded-lg">
                  <Award size={20} className="text-eduzin-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Instruktur ahli & berpengalaman</h4>
                </div>
              </div>
            </div>

            <button className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-800 hover:text-eduzin-dark cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-eduzin-dark group-hover:text-white transition-colors">
                <ArrowRight size={14} />
              </span>
              Daftar Sekarang
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

