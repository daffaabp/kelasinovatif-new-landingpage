import React from 'react';
import { ArrowRight, Monitor, GraduationCap } from 'lucide-react';

export function WhyChooseUs() {
    return (
        <section className="py-16 bg-white dark:bg-[#1A2220]">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 translate-y-8">
                        <img alt="Students" className="rounded-2xl object-cover h-48 w-full shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaqKah2oMED462ozfCXNmZJqp8fWDtXRRjPJAzGZPTqWZe2CKuUq7cSG6eBGq3hBpdHH5yJagRa4CUfUbWs8MoneZL6ggRGM7-EGkuc4HZ04Gq4D-j_A41xtZKnv44U1a97EnOgKI6IcWNvTiOeC8gU35tfhBbNjgqU1JLFAOZqY_nthaL7_cBVPIlmPxbG065QrpSt9jAKlozY9qW7n0ZHESvr6_FL1nVhrLTp_PSIinuCW9QMv9fldf3ejio6eS3ZqlePR_PibuY" />
                        <img alt="Learning" className="rounded-2xl object-cover h-64 w-full shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgXGurlrpCdjTdhTzS5Udbber2xg1GK64DTXS0MpeacwPNYXH5RGkCu03JoFuuR7O9VxfiV0u1CG7198YxS1xsgbLg94trUAzYMuT0hfZoSpAcnrj6DFupWftuMYjXJc9CFUeDaNap4Qh2CRgEBDUNPH9THYyqilBhGeAxHm2tiZWIa9UnI0f0RIXPS_xSIsAwErzWaKwJgrjTA7svAvLoBx0FEwE8aL6f45b9n6RerpPsAQ8x1mAHBA6CUIC6U1_R5-vt_wfHfh0y" />
                    </div>
                    <div className="space-y-4">
                        <img alt="Graduation" className="rounded-2xl object-cover h-64 w-full shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg27F7QyIR8o8piyCIbMVoXJMQ12b9lKoqbXa53qJDmDS-ixW6MANL0Gk6SnmG71Q4w5pbzCgs5yR1kfH3EDoz6Y2ODCxnt48jilhHM88EtRuwr856flUkTyZvkH2Ev549zujkaIuQ_J5E4DCAqM1aIYL8hHwcqFitolCLJ-1b60eYvShQ_JUGVWHxhRnZVhuFHkZLQH-wWqPu9-8ZEu4prZ_6yKYoa38soSrKTV0vReH8m-TkS9sAQoUVXUpb3gto2QwbDT55rFrc" />
                        <img alt="Discussion" className="rounded-2xl object-cover h-48 w-full shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQfybUjNVtQ_HNdp62huWH26A0qVzv2l4hOn-TXXfp1p89YicI5Q0ve1eaZ9PdLlYxufsBBTzyxE7uD-XtiusCc6UIg9b3le1XSX84ujLXbhDwtjOXw-IrslPNK4W50VC8358b0FAyBN5V34_cShXsXVf3xHHK3VWBBX87qEHo_PG6iHp2kDPboQkaMbUWFyvuEQPm_ICyn5bLdYMdSNFJ9PnPGd8ydFCOtryXuIolMee8xbI1Q7AmNCVQ_A9h01nqluCxbI8Tiof8" />
                    </div>
                </div>

                {/* Content */}
                <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2 block">MENGAPA PILIH KAMI?</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#1C302B] dark:text-white mb-6">
                        Kampus KelasInovatif adalah tempat untuk penemuan
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        Rasakan kehidupan kampus yang dinamis dan inklusif dengan fasilitas canggih, acara budaya, organisasi mahasiswa, dan kesuksesan tak terbatas bersama universitas.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#F7F5F0] dark:bg-gray-800 flex items-center justify-center shrink-0">
                                <Monitor className="text-[#1C302B] dark:text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[#1C302B] dark:text-white">On-time teaching & learning</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Strategic Management for Future Leaders.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#F7F5F0] dark:bg-gray-800 flex items-center justify-center shrink-0">
                                <GraduationCap className="text-[#1C302B] dark:text-white w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-[#1C302B] dark:text-white">Expert & experienced instructors</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Learned from the best in the industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <a className="inline-flex items-center gap-2 text-sm font-bold text-[#1C302B] dark:text-white hover:underline decoration-2 underline-offset-4" href="#">
                            DAFTAR SEKARANG
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
