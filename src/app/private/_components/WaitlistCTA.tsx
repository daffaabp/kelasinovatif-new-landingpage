
import React from 'react';

export function WaitlistCTA() {
    return (
        <section className="py-24 bg-private-bg-light dark:bg-private-bg-dark border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl text-private-primary dark:text-white mb-6">Siap mempercepat kemajuan Anda?</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                    Slot untuk mentorship privat terbatas setiap semester. Bergabunglah dengan daftar tunggu kami untuk mendapat notifikasi ketika slot baru dibuka.
                </p>
                <form className="max-w-md mx-auto mb-8 flex flex-col sm:flex-row gap-2">
                    <input className="flex-grow px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-private-surface-dark focus:ring-2 focus:ring-private-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="Masukkan alamat email Anda" type="email" />
                    <button className="bg-private-primary hover:bg-private-primary-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg whitespace-nowrap" type="submit">
                        Bergabung Daftar Tunggu
                    </button>
                </form>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    Dengan mendaftar, Anda setuju dengan <a className="underline hover:text-private-primary dark:hover:text-white" href="#">Syarat Layanan</a> dan <a className="underline hover:text-private-primary dark:hover:text-white" href="#">Kebijakan Privasi</a> kami.
                </p>
            </div>
        </section>
    );
}
