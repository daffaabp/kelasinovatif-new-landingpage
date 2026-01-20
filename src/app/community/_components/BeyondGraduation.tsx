import React from 'react';

export function BeyondGraduation() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">Melampaui Kelulusan</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Komunitas kami meluas jauh melampaui ujian akhir Anda.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-community-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-community-primary transition duration-300">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons-outlined">handshake</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Program Mentorship</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Terhubung dengan alumni yang bekerja di industri terkemuka untuk bimbingan.</p>
                        <a className="text-sm font-semibold text-community-primary dark:text-white" href="#">Pelajari Lebih Lanjut</a>
                    </div>
                    <div className="bg-white dark:bg-community-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-community-primary transition duration-300">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons-outlined">card_membership</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Manfaat Alumni</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Akses eksklusif ke sumber daya perpustakaan, acara, dan jaringan.</p>
                        <a className="text-sm font-semibold text-community-primary dark:text-white" href="#">Lihat Manfaat</a>
                    </div>
                    <div className="bg-white dark:bg-community-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-community-primary transition duration-300">
                        <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons-outlined">volunteer_activism</span>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Memberi Kembali</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Dukung generasi berikutnya dari sarjana melalui donasi.</p>
                        <a className="text-sm font-semibold text-community-primary dark:text-white" href="#">Donasi Sekarang</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
