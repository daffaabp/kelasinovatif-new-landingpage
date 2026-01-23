import { ChevronsUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface EventListProps {
    events: any[];
    meta?: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export function EventList({ events, meta }: EventListProps) {
    if (!events || events.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center text-gray-500">
                Tidak ada acara yang ditemukan.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                {['Tanggal', 'Waktu', 'Kategori', 'Judul', 'Lokasi', 'Pembicara'].map((header) => (
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
                            {events.map((event, index) => {
                                const eventDate = new Date(event.date).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short'
                                });
                                // Simple category coloring logic (could be dynamic later)
                                let categoryColor = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
                                if (event.type === 'Workshop') categoryColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
                                if (event.type === 'Seminar') categoryColor = 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
                                if (event.type === 'Webinar') categoryColor = 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';

                                return (
                                    <tr key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150 ease-in-out group">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{eventDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.start_time} - {event.end_time}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${categoryColor}`}>
                                                {event.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            <Link href={`/schedule/${event.id}`} className="hover:underline group-hover:text-blog-primary dark:group-hover:text-blog-accent transition-colors">
                                                {event.title}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.speaker_name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Controls */}
            {meta && meta.totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 pt-8">
                    {meta.page > 1 ? (
                        <Link
                            href={`/schedule?page=${meta.page - 1}`}
                            className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </Link>
                    ) : (
                        <button disabled className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm cursor-not-allowed">
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </button>
                    )}

                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Halaman {meta.page} dari {meta.totalPages}
                    </span>

                    {meta.page < meta.totalPages ? (
                        <Link
                            href={`/schedule?page=${meta.page + 1}`}
                            className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm"
                        >
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    ) : (
                        <button disabled className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm cursor-not-allowed">
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
