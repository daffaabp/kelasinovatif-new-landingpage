import React from "react";
import { Filter, LayoutGrid, GraduationCap, BrainCircuit, Laptop, Users, Edit, Trash2 } from "lucide-react";

export function ScheduleTable() {
    return (
        <div className="bg-white dark:bg-[#1C2624] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                    <button className="text-[#263c32] dark:text-white font-semibold border-b-2 border-[#263c32] pb-1 whitespace-nowrap">
                        All Events
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
                        Workshops
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
                        Seminars
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
                        Webinars
                    </button>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Event
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Speaker
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Category
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Date & Time
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Location
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {/* Row 1 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 shrink-0 shadow-sm">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            Creative Teaching
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Workshop 101
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <img
                                        alt="Speaker"
                                        className="w-6 h-6 rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5DECcNwlr6XKaoC7QMMH9pRanwsdUswa3H1lPRzo6BB5B87vSwdhOo6KP1qqmWtI28EbqdoX0-4LQ4dDPSa2BTCRKkCZTOtenSbjyD6qqVrCacIFyRBoclWsT_0WcF8mY9-7tqsZF89YqlaI6hTZlXslXjU9h1B3zIBTGSqdtQsMHxe9xQeEmTGgwl-SuKJ_Wi4GWS9XM3OAq_32m6Bem7ezj4fvX7gr8B3Jnhkvfg9_OxxzTX7jNOsgrfCzucVA28RU5Nq6HDzSG"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Dr. Alex Morgan
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                                    Workshop
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Nov 12, 2023
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    09:00 AM - 12:00 PM
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-600 dark:text-gray-400">
                                Main Hall A
                            </td>
                            <td className="px-6 py-4 align-middle text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="text-gray-400 hover:text-[#263c32] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                        <BrainCircuit className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            AI Ethics in Ed
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Panel Discussion
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#263c32]/20 text-[#263c32] dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                                        SK
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Sarah Kim
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                    Seminar
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Nov 15, 2023
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    02:00 PM - 04:00 PM
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-600 dark:text-gray-400">
                                Auditorium
                            </td>
                            <td className="px-6 py-4 align-middle text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="text-gray-400 hover:text-[#263c32] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                                        <Laptop className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            Digital Literacy
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Online Course
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#263c32]/20 text-[#263c32] dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                                        JD
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Jane Doe
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                    Webinar
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Nov 18, 2023
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    10:00 AM - 11:30 AM
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-600 dark:text-gray-400">
                                Virtual Room 2
                            </td>
                            <td className="px-6 py-4 align-middle text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="text-gray-400 hover:text-[#263c32] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 shrink-0 shadow-sm">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            Community Building
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Networking
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#263c32]/20 text-[#263c32] dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                                        AT
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Admin Team
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                    Meetup
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Nov 20, 2023
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    05:00 PM - 07:00 PM
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-600 dark:text-gray-400">
                                Lounge Area
                            </td>
                            <td className="px-6 py-4 align-middle text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="text-gray-400 hover:text-[#263c32] dark:hover:text-white transition-colors p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Showing 1-4 of 42 events
                </p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
                        Previous
                    </button>
                    <button className="px-3 py-1 rounded bg-[#263c32] text-white text-sm">
                        1
                    </button>
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
                        2
                    </button>
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
                        3
                    </button>
                    <span className="text-gray-400 px-1 pt-1">...</span>
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
