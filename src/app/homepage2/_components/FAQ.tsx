import React from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
    return (
        <section className="py-20 bg-[#F7F5F0] dark:bg-[#0F1210]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2 block">FAQ & JAWABAN</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#1C302B] dark:text-white">
                        Jawaban untuk pertanyaan Anda, di setiap <br /> langkah perjalanan.
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <img alt="Campus Life" className="rounded-2xl w-full object-cover h-[400px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4nH9gCdwPiR7AXkB3GThULZfS87oL3BjlyltjLuLrAD1P_d0MBPFRQQRPKHCTma83pMvJFMcBPqqsGtP_DBR1mmSoNeCuJNxrNbuWamYaV-NkLjE5DdaKi6JThRVMo8SqmidxyYpksTTk4yUKzlxpao2FFwiagG-uko4gr_Ytr59B4rEZ53wILGyewI7qdUDKavcZ07RdJI4kgRsEkTtXaC6UntCXzP5v17Mq_GxVd7o7m4pfcK1t616a6gszX2J-fIEKfphrjIRB" />
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Apakah berfungsi dengan baik di perangkat mobile?", a: "Ya, seluruh platform sepenuhnya responsif dan dioptimalkan untuk perangkat mobile, tablet, dan desktop." },
                            { q: "Apakah navigasinya sederhana dan jelas?", a: "Tentu saja. Kami memprioritaskan pengalaman pengguna dengan menu intuitif dan hierarki yang jelas." },
                            { q: "Apakah ada bilah pencarian yang efektif?", a: "Ya, pencarian canggih kami memungkinkan Anda menemukan kursus, acara, dan orang secara instan." },
                            { q: "Apakah informasi kontak/dukungan terlihat?", a: "Informasi kontak tersedia di footer dan melalui halaman Kontak khusus." },
                        ].map((item, i) => (
                            <details key={i} className="group bg-white dark:bg-[#1A2220] rounded-xl p-4 open:pb-6 transition-all duration-300 cursor-pointer">
                                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[#1C302B] dark:text-white">
                                    {item.q}
                                    <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition" />
                                </summary>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
