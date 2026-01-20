import React from 'react';

export function Hero() {
    return (
        <header className="relative bg-community-primary overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
                </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-xs font-semibold tracking-widest uppercase mb-4">
                            Kehidupan Kampus
                        </div>
                        <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight">
                            Lebih dari sekadar <br />
                            <span className="italic font-normal opacity-90">universitas.</span>
                        </h1>
                        <p className="text-lg text-gray-200 max-w-lg leading-relaxed font-light">
                            Bergabunglah dengan ekosistem pemikir, pencipta, dan pemimpin yang dinamis. Komunitas KelasInovatif adalah tempat di mana koneksi seumur hidup dibentuk dan kolaborator masa depan bertemu.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-white text-community-primary px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 cursor-pointer">
                                Jelajahi Grup <span className="material-icons-outlined text-sm">arrow_forward</span>
                            </button>
                            <button className="border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 cursor-pointer">
                                <span className="material-icons-outlined">play_circle</span> Tonton Video
                            </button>
                        </div>
                    </div>
                    <div className="relative lg:h-[500px] w-full hidden lg:block">
                        <div className="absolute top-0 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500 z-10 border-4 border-white/10">
                            <img alt="Graduates in Togas" className="w-full h-full object-cover" src="/community/graduation.png" />
                        </div>
                        <div className="absolute bottom-10 left-10 w-72 h-64 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition duration-500 z-20 border-4 border-white/10">
                            <img alt="Campus exterior gathering" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgxp2Z7OkT22WAbGQLWQ7VKZbWk0eO3Q_Xy_-ZfwR8zWGdnGPRWuy0acL5AdGzIHsTS0A6-aZU7BYjbYB3b_a8IrYhdrBvjF6pHqNva5JccDl50CPomlUIMfjZfVLRI8WhI4qrvA3cq1yVR15HzpENncgwHjkiGFvfzeeRtAHdbJxy6yIQu4k40r3NUBpuowXv35jUoRGuc7aTUPR4sUekAPCD7JuyaNDn1Ra6nuATyXpL2JYG2ImP9v93EdLqklgN9tEhTGXyBK4" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full z-0 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
