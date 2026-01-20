import React from "react";

export const ContactMap = () => {
    return (
        <section className="py-16 bg-[var(--color-contact-secondary)] dark:bg-gray-900">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div>
                        <span className="text-[var(--color-contact-primary)] dark:text-[var(--color-contact-accent)] font-semibold tracking-wider text-sm uppercase">
                            Find Us
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-contact-primary)] dark:text-white mt-2">
                            Visit Our Campus
                        </h2>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="flex items-center text-[var(--color-contact-primary)] dark:text-white font-medium hover:underline">
                            Get Directions on Google Maps
                            <span className="material-icons-outlined ml-1">north_east</span>
                        </button>
                    </div>
                </div>
                <div className="relative w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md">
                    <iframe
                        allowFullScreen={true}
                        height="100%"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.844146051756!2d-71.09404328468154!3d42.34584214309395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1e0507727f%3A0x6774c83088942b03!2sFenway%20Park!5e0!3m2!1sen!2sus!4v1629828556396!5m2!1sen!2sus"
                        style={{
                            border: 0,
                            filter: "grayscale(1) contrast(1.2) opacity(0.8)",
                        }}
                        title="Campus Map Location"
                        width="100%"
                    ></iframe>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="relative">
                            <div className="w-16 h-16 bg-[var(--color-contact-primary)]/20 rounded-full animate-ping absolute inset-0"></div>
                            <div className="w-16 h-16 bg-[var(--color-contact-primary)] rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-white dark:border-gray-800">
                                <span className="material-icons-outlined text-white text-3xl">
                                    school
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {[
                        {
                            title: "Pusat Sains",
                            desc: "Lab, Fasilitas Penelitian & Perpustakaan",
                            loc: "Ged. 4, Kampus Utara",
                        },
                        {
                            title: "Paviliun Seni",
                            desc: "Galeri, Studio & Aula Pertunjukan",
                            loc: "Ged. 7, Kampus Timur",
                        },
                        {
                            title: "Gedung Serbaguna Mahasiswa",
                            desc: "Kafetaria, Toko Buku & Klub",
                            loc: "Ged. 1, Kampus Pusat",
                        },
                    ].map((place) => (
                        <div
                            key={place.title}
                            className="bg-[var(--color-contact-surface-light)] dark:bg-[var(--color-contact-surface-dark)] p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[var(--color-contact-primary)]/30 transition-colors"
                        >
                            <h4 className="font-serif text-lg font-bold text-[var(--color-contact-primary)] dark:text-white mb-2">
                                {place.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {place.desc}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                {place.loc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
