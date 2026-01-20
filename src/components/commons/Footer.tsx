import { Facebook, Camera, AtSign, Briefcase, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#27272A] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-about-primary rounded-full flex items-center justify-center text-white font-serif font-bold">K</div>
                            <span className="font-serif font-bold text-xl text-about-primary dark:text-white">KelasInovatif</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering the next generation of leaders through innovative education and inclusive community building.
                        </p>
                        <div className="flex space-x-4">
                            <a className="text-gray-400 hover:text-about-primary dark:hover:text-white transition" href="#">
                                <Facebook size={24} strokeWidth={1.5} />
                            </a>
                            <a className="text-gray-400 hover:text-about-primary dark:hover:text-white transition" href="#">
                                <Camera size={24} strokeWidth={1.5} />
                            </a>
                            <a className="text-gray-400 hover:text-about-primary dark:hover:text-white transition" href="#">
                                <AtSign size={24} strokeWidth={1.5} />
                            </a>
                            <a className="text-gray-400 hover:text-about-primary dark:hover:text-white transition" href="#">
                                <Briefcase size={24} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-about-primary dark:text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/about">About Us</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/community">Community</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/program">Programs</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/bootcamp">Bootcamps</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/contact">Hubungi Kami</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/blogs">Blog</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/schedule">Schedule</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-about-primary dark:text-white mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="#">Library</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="#">Career Services</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="#">Alumni Association</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="#">Student Portal</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="/faq">FAQ</a></li>
                            <li><a className="hover:text-about-primary dark:hover:text-white transition" href="#">Staff Directory</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-about-primary dark:text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-about-primary w-5 h-5 shrink-0" />
                                <span>123 University Ave, <br />Education City, CA 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-about-primary w-5 h-5 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-about-primary w-5 h-5 shrink-0" />
                                <span>admissions@kelasinovatif.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© 2024 KelasInovatif Community. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a className="hover:text-about-primary dark:hover:text-white transition" href="/privacy">Privacy Policy</a>
                        <a className="hover:text-about-primary dark:hover:text-white transition" href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
