import React from 'react';

export function CommunityLeader() {
    return (
        <section className="py-24 bg-community-bg-light dark:bg-community-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-community-card-dark rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-96 lg:h-auto">
                            <img alt="Student Leader" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7z_l5TXYb3pw6TVi7Lqkedngaa3MU9vdiv9U-vtm5W6xsQnNscJTmKYUYEMbuAgiN2Wl_G_lN3C2o8MkYqVOZyWT2sJEEhqcP9UI9JG6lw2BVSKuxZ3dBEInPiUPUqbh6DcT24bH4K9dVuwZQuli0wqGwuvbuicpGZMgrgYaKj6Z287yoIVMkB0gGtiphrvPYxpGQ9Cn2YKZHVJlm6QTOYRcL2YsvDS1SDgKtN0IkecW8ZQUxSPsGfv309wvp2ERJ8o077F8HBds" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-lg">Amara Okafor</p>
                                <p className="text-gray-300 text-sm">Presiden, Serikat Mahasiswa '24</p>
                            </div>
                        </div>
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-6xl text-community-primary opacity-20 font-serif leading-none">"</span>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                                Komunitas di sini bukan hanya tentang bersosialisasi; ini tentang dukungan. Ketika saya ingin memulai inisiatif amal, saya menemukan mentor, relawan, dan pendanaan dalam seminggu.
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                KelasInovatif menyediakan platform, tetapi mahasiswa yang memberikan hati. Menjadi bagian dari keluarga ini telah menjadi bagian paling transformatif dari gelar saya.
                            </p>
                            <a className="text-community-primary dark:text-white font-bold tracking-wide hover:underline flex items-center" href="#">
                                Baca Lebih Banyak Kisah <span className="material-icons-outlined text-lg ml-2">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
