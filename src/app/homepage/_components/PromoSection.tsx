import { ArrowRight } from 'lucide-react';

export function PromoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">

          {/* Left Student */}
          <div className="w-full md:w-1/3">
            <img src="/images/comunity.jpeg"
              alt="Student smiling"
              className="w-full h-[400px] object-cover rounded-t-[100px] rounded-b-[20px] shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Center Text */}
          <div className="w-full md:w-1/3 text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center animate-spin-slow">
                <span className="text-[8px] font-bold uppercase tracking-widest text-center transform rotate-12">Sejak 1850<br />Pendidikan Berkualitas</span>
              </div>
            </div>
            <span className="inline-block px-4 py-1 border border-gray-800 rounded-full text-xs font-bold uppercase tracking-wider">Pesan Tur Gratis</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium">Kampus universitas KelasInovatif luar biasa.</h2>
            <button className="mx-auto bg-eduzin-dark text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold cursor-pointer">
              HUBUNGI KAMI <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Student */}
          <div className="w-full md:w-1/3">
            <img src="/images/community2.jpeg"
              alt="Student smiling"
              className="w-full h-[400px] object-cover rounded-t-[20px] rounded-b-[100px] shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

