import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial() {
    return (
        <section className="py-20 bg-program-accent/30 dark:bg-program-surface-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <Quote className="text-program-primary/40 dark:text-white/20 w-12 h-12 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 dark:text-white mb-8">
                    "Kelas Cursor benar-benar mengubah cara saya mendekati pemrograman. Integrasi AI bukan hanya gimmick; ini adalah pergeseran fundamental dalam alur kerja yang ditangkap dengan sempurna oleh kursus ini."
                </h3>
                <div className="flex items-center justify-center space-x-4">
                    <img alt="Student Portrait" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeRw3p4hSwj1QtBmDHZOAza32pzcTq1CEvoG8eSPXPuEL48Z5VkC4Xjs5S4ccgfqtQHmsOX42lBAjrXvghLnMKVXPVidAnzmwotuZ7XVMIvsUxWOotqzpfk-Dl37QeAQN8yQ8FQ7G62zwFVP_3gpIpwwsZxO6vRvbAWaptD8u5Pz3yPtScFMiw9Mn8s8k2T3Hen9AQMT4wFo9ZKRzOAXlPuVQXRNq-z2BrVlx4JWL6tMnAWM3dlkXBFpQ6uVyevC664ySHeXf635Q" />
                    <div className="text-left">
                        <p className="font-bold text-gray-900 dark:text-white text-sm">David Chen</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Insinyur Perangkat Lunak @ TechCorp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
