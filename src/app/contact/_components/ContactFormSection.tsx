import React from "react";

export const ContactFormSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                    <div className="bg-[var(--color-contact-primary)] text-white rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
                        {/* Use a simple CSS gradient or pattern fallback if external image fails, but using the same url for fidelity */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl font-semibold mb-6">
                                Informasi Kontak
                            </h3>
                            <p className="text-gray-300 mb-8 font-light">
                                Isi formulir dan tim kami akan menghubungi Anda dalam 24
                                jam.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/10 p-2 rounded-lg">
                                        <span className="material-icons-outlined text-[var(--color-contact-accent)]">
                                            phone
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                            Telepon
                                        </p>
                                        <p className="font-medium">+123 (456) 789 00</p>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Sen-Jum 09:00 - 18:00
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/10 p-2 rounded-lg">
                                        <span className="material-icons-outlined text-[var(--color-contact-accent)]">
                                            email
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                            Email
                                        </p>
                                        <a
                                            className="font-medium hover:text-[var(--color-contact-accent)] transition-colors"
                                            href="mailto:admissions@kelasinovatif.edu"
                                        >
                                            admissions@kelasinovatif.edu
                                        </a>
                                        <br />
                                        <a
                                            className="font-medium hover:text-[var(--color-contact-accent)] transition-colors"
                                            href="mailto:info@kelasinovatif.edu"
                                        >
                                            info@kelasinovatif.edu
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-white/10 p-2 rounded-lg">
                                        <span className="material-icons-outlined text-[var(--color-contact-accent)]">
                                            location_on
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                            Kampus Utama
                                        </p>
                                        <p className="font-medium leading-snug">
                                            102 University Avenue,
                                            <br />
                                            Innovation District,
                                            <br />
                                            Cambridge, MA 02138
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-12">
                            <div className="flex space-x-4">
                                {["FB", "TW", "IG", "LI"].map((social) => (
                                    <a
                                        key={social}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-contact-accent)] hover:text-[var(--color-contact-primary)] transition-all duration-300"
                                        href="#"
                                    >
                                        <span className="text-sm font-bold">{social}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                    <div className="bg-[var(--color-contact-surface-light)] dark:bg-[var(--color-contact-surface-dark)] rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100 dark:border-gray-800 h-full">
                        <h2 className="font-serif text-3xl font-bold text-[var(--color-contact-primary)] dark:text-white mb-2">
                            Kirimkan pesan kepada kami
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">
                            Kami senang mendengar dari Anda. Silakan isi formulir ini.
                        </p>
                        <form action="#" className="space-y-6" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="first-name"
                                    >
                                        Nama Depan
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-[var(--color-contact-primary)] focus:ring-[var(--color-contact-primary)] sm:text-sm py-3 px-4"
                                        id="first-name"
                                        name="first-name"
                                        placeholder="Jane"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="last-name"
                                    >
                                        Nama Belakang
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-[var(--color-contact-primary)] focus:ring-[var(--color-contact-primary)] sm:text-sm py-3 px-4"
                                        id="last-name"
                                        name="last-name"
                                        placeholder="Doe"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="email"
                                    >
                                        Alamat Email
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-[var(--color-contact-primary)] focus:ring-[var(--color-contact-primary)] sm:text-sm py-3 px-4"
                                        id="email"
                                        name="email"
                                        placeholder="jane@example.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="phone"
                                    >
                                        Nomor Telepon
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-[var(--color-contact-primary)] focus:ring-[var(--color-contact-primary)] sm:text-sm py-3 px-4"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        type="tel"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Saya tertarik dengan...
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Penerimaan Sarjana",
                                        "Studi Pascasarjana",
                                        "Tur Kampus",
                                        "Penelitian",
                                        "Lainnya",
                                    ].map((interest) => (
                                        <label key={interest} className="cursor-pointer">
                                            <input
                                                className="peer sr-only"
                                                name="interest"
                                                type="radio"
                                            />
                                            <span className="inline-block rounded-full px-4 py-2 text-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 peer-checked:border-[var(--color-contact-primary)] peer-checked:bg-[var(--color-contact-primary)] peer-checked:text-white transition-all hover:border-[var(--color-contact-primary)]/50">
                                                {interest}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    htmlFor="message"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-[var(--color-contact-primary)] focus:ring-[var(--color-contact-primary)] sm:text-sm py-3 px-4"
                                    id="message"
                                    name="message"
                                    placeholder="Bagaimana kami bisa membantu Anda?"
                                    rows={4}
                                ></textarea>
                            </div>
                            <div className="pt-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        className="h-4 w-4 text-[var(--color-contact-primary)] focus:ring-[var(--color-contact-primary)] border-gray-300 rounded"
                                        id="privacy"
                                        name="privacy"
                                        type="checkbox"
                                    />
                                    <label
                                        className="ml-2 block text-sm text-gray-500 dark:text-gray-400"
                                        htmlFor="privacy"
                                    >
                                        Saya setuju dengan{" "}
                                        <a
                                            className="text-[var(--color-contact-primary)] underline"
                                            href="#"
                                        >
                                            kebijakan privasi
                                        </a>
                                        .
                                    </label>
                                </div>
                                <button
                                    className="inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-[var(--color-contact-primary)] hover:bg-[var(--color-contact-primary)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-contact-primary)] transition-all duration-200 transform hover:scale-105"
                                    type="submit"
                                >
                                    Kirim Pesan
                                    <span className="material-icons-outlined ml-2 text-base">
                                        send
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
