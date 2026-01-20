import { ChevronsUpDown, ChevronDown } from 'lucide-react';

export function EventList() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                {['Tanggal', 'Waktu', 'Kategori', 'Judul', 'Lokasi/Virtual', 'Pembicara'].map((header) => (
                                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <div className="flex items-center">
                                            {header}
                                            <ChevronsUpDown className="w-3 h-3 ml-1 opacity-40" />
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {[
                                { date: '22 Okt', time: 'Sepanjang Hari', category: 'Sorotan', categoryColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', title: 'KTT Inovasi Tahunan', location: 'Auditorium Utama', speaker: 'Berbagai Pemimpin' },
                                { date: '12 Okt', time: '10:00 - 12:30', category: 'Workshop', categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', title: 'Dasar-dasar Desain Digital', location: 'Lab Kreatif 204', speaker: 'Sarah Jenkins & tim' },
                                { date: '15 Okt', time: '14:00 - 15:30', category: 'Kuliah', categoryColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', title: 'Masa Depan AI dalam Pendidikan', location: 'Virtual (Zoom)', speaker: 'Dr. Alan Grant' },
                                { date: '28 Okt', time: '18:00 - 20:00', category: 'Sosial', categoryColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', title: 'Acara Jaringan Musim Gugur', location: 'Atap Pusat Mahasiswa', speaker: 'Tidak Ada' },
                            ].map((event, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150 ease-in-out">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{event.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.time}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${event.categoryColor}`}>
                                            {event.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{event.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.speaker}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center pt-8">
                <button className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 cursor-pointer shadow-sm">
                    Muat Lebih Banyak Acara
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
