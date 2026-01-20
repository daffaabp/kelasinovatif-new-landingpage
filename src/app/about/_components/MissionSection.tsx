import { ArrowRight } from "lucide-react";

export function MissionSection() {
    return (
        <section className="py-16 md:py-24 bg-about-surface-light dark:bg-about-surface-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-about-primary/10 rounded-full blur-xl"></div>
                        <img
                            alt="Students collaborating in library"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZM29Kg70Obla5JfBvCV2jQr6Pfo2LFUWdNFWI9jlyCYw5t4NfjK3A7r5oW8OmfFJTx4MU6vhRDxBnCXUkuzFCKbjN7ATvBNDPDjPAgBUz34i7TUisZtjq1_i0YGRZoWiSa1CcCuDmMjpBm8msp8LX0_rWYc0cJDGf4mc_DTv2WaJPOIgOOxaIkne7IaXtUYTau7SpTjam5nGvfguw81X-XRbtZxgcjAsH6x-Gux6KOFmACUBNWI9iFlRFNJl93cCfLQeMcEc8Fgc"
                        />
                        <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                            <p className="font-serif text-lg italic text-about-primary dark:text-white">
                                &quot;Education is the most powerful weapon which you can use to
                                change the world.&quot;
                            </p>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-bold">
                                — Nelson Mandela
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-about-primary mb-2">
                            Misi Kami
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-about-primary dark:text-white">
                            Mendorong inovasi melalui pemikiran kritis.
                        </h3>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                            <p>
                                Di KelasInovatif, kami percaya bahwa pembelajaran sejati terjadi ketika
                                rasa ingin tahu bertemu dengan kesempatan. Misi kami adalah menyediakan
                                lingkungan inklusif di mana mahasiswa dari berbagai latar belakang dapat
                                berkembang.
                            </p>
                            <p>
                                Kami mengintegrasikan teknologi mutakhir dengan nilai-nilai seni liberal
                                tradisional untuk menciptakan pengalaman pendidikan yang komprehensif. Lulusan
                                kami tidak hanya mencari pekerjaan; mereka menciptakan industri.
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-about-primary pl-4">
                                <h4 className="font-bold text-xl text-about-primary dark:text-white mb-1">
                                    98%
                                </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Tingkat Ketenagakerjaan Lulusan
                                </p>
                            </div>
                            <div className="border-l-4 border-about-primary pl-4">
                                <h4 className="font-bold text-xl text-about-primary dark:text-white mb-1">
                                    12:1
                                </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Rasio Mahasiswa-ke-Dosen
                                </p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <a
                                className="inline-flex items-center text-about-primary dark:text-white font-bold hover:underline group"
                                href="#"
                            >
                                Baca rencana strategis lengkap kami
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
