import { Mail, Globe } from 'lucide-react';

export function Instructor() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg">
                    <div className="flex-shrink-0">
                        <img
                            alt="Dr. Angela Chen"
                            className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">Dr. Angela Chen</h3>
                        <p className="text-eduzin-dark dark:text-green-400 font-medium mb-4">Senior Research Fellow & Ilmuwan Informasi</p>
                        <p className="text-gray-600 dark:text-gray-400 italic mb-6">
                            "Di era kelebihan informasi, kemampuan untuk membedakan bukti berkualitas adalah keterampilan paling berharga yang dapat dimiliki seorang mahasiswa. Saya merancang kursus ini untuk memberdayakan Anda dengan alat terbaru untuk melakukan hal itu."
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a className="text-gray-400 hover:text-eduzin-dark dark:hover:text-white transition" href="#">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a className="text-gray-400 hover:text-eduzin-dark dark:hover:text-white transition" href="#">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
