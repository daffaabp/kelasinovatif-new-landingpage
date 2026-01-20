"use client";

import React from "react";
import { Filter, MoreVertical, Edit, Trash2 } from "lucide-react";

export function BlogTable() {
    return (
        <div className="bg-white dark:bg-[#1C2624] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex gap-6 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                    <button className="text-[#263c32] dark:text-white font-semibold border-b-2 border-[#263c32] pb-1 whitespace-nowrap">
                        All Posts
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
                        Published
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
                        Drafts
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors whitespace-nowrap">
                        Scheduled
                    </button>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <Filter className="text-xl w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                        <MoreVertical className="text-xl w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Title
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Author
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Status
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-left">
                                Date
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
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 shadow-sm">
                                        <img
                                            alt="Blog Thumb"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtxWnpZEK7z3GuwTvnmN1Hc4maoPPqAGrKG82X4NE_k3odZaTaIkUmJaTawxHBkxBR7vDvYSp3ZAVem4Srw5r6k4xFEr5pQ3QoD-j_tSZ4vRn75Mymql493bhata7L__slw1t7YbKvnLy0F8LY4_1ONthTAi7pZIFMH4KhFGkI-3QFjvxaPNEDbR73hmb6lAINoGfstnRGex1gqFqFnUx5GsjHtXLash2NVvdivjI1_ZUSRME6hEQKVawMB4528fLGOlB2CHZ6zKPL"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            Pembelajaran Inovatif
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Education, Future
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
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                    Published
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-500 dark:text-gray-400">
                                Oct 24, 2023
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
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 shadow-sm">
                                        <img
                                            alt="Blog Thumb"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSjOUJIAi1Uutt0d8mf2n6W3I6bAmvjiAmG3Ff7EZW4p0Q6fcx-5LE2bzhJi8Xs5QTMjwPMRkP-v9R7Xlw_OvNt8BDoiP2fLBLNSpBbojmxwR8WwAguBNY0BNxMr0yaof6kVa_Vd6QVuerlLEr-SB3_ol4GlorRpCDcQUPzdA_33FnGfTjoOwnHsVy3f1IAShgWPdArXBBmhXsxoLXBKJxFhPEJkiwvfMM1SoJRYP482w_yXMEQVYLnq86sfF8_BNE42-VAuPseAEi"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            AI in Modern Classrooms
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Technology, AI
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <img
                                        alt="Avatar"
                                        className="w-6 h-6 rounded-full shrink-0"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5DECcNwlr6XKaoC7QMMH9pRanwsdUswa3H1lPRzo6BB5B87vSwdhOo6KP1qqmWtI28EbqdoX0-4LQ4dDPSa2BTCRKkCZTOtenSbjyD6qqVrCacIFyRBoclWsT_0WcF8mY9-7tqsZF89YqlaI6hTZlXslXjU9h1B3zIBTGSqdtQsMHxe9xQeEmTGgwl-SuKJ_Wi4GWS9XM3OAq_32m6Bem7ezj4fvX7gr8B3Jnhkvfg9_OxxzTX7jNOsgrfCzucVA28RU5Nq6HDzSG"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Alex Morgan
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                                    Draft
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-500 dark:text-gray-400">
                                Oct 22, 2023
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
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 shadow-sm">
                                        <img
                                            alt="Blog Thumb"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS8Sop7nLxsbuXNWBEoj1QYcxUygziDfBV4hgDnbm6EI2DCjv40ENG0Le7v6nHE6v4MA2gi095J45dYyXywpfn_4sa0mnhtDuW0pDaxxIUkPEieoB1m-GaKbQcdM-mrKDT2-0nCNK5o_l0m9BjLziDKmkvx2JB_ADwePENADSBfTbq-WmlRg1Obcu_Fn-0L0cM_KDrHDYtJ2e97k0CCCpCfR4kTHlMOxlEJC8sxKKWJvuaHfmKKVQ1baM9mke2_nCmxgleks1Oj2Oz"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            Role of Empathy
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Psychology
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0">
                                        SK
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Sarah Kim
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                    Scheduled
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-500 dark:text-gray-400">
                                Nov 01, 2023
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
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 shadow-sm">
                                        <img
                                            alt="Blog Thumb"
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1hZuuz8R0o_ymMZypBBBXTno5_cIBgdyY46aUz_Opmd8lgfToWYbEO6wsfJ07QTv4V1Hb_yqcbGSk4dkpNSRh4A17QUuaO2LVjIXoCttCNfLTQpBbYCADbvSdHD7i_qVGzYkRwgnFOVft91cvYfMyjAr476Lw9bHGseLAX50siORC2Q4tPjSzX5OC91r8bZbgwqI2x4J5qXbJZ7Aww-abidTfWucMiuzmGlOTvR3BGVTAkW4gKTjzfyUAYovKchpKmuaktwZScxr7"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-serif font-semibold text-gray-900 dark:text-gray-100 text-lg line-clamp-1">
                                            Student Stories
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Community
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#263c32]/20 text-[#263c32] dark:text-white flex items-center justify-center text-xs font-bold shrink-0">
                                        AD
                                    </div>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Admin Team
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 align-middle">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                    Published
                                </span>
                            </td>
                            <td className="px-6 py-4 align-middle text-sm text-gray-500 dark:text-gray-400">
                                Sep 15, 2023
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
                    Showing 1-4 of 124 results
                </p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors cursor-pointer">
                        Previous
                    </button>
                    <button className="px-3 py-1 rounded bg-[#263c32] text-white text-sm">
                        1
                    </button>
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors cursor-pointer">
                        2
                    </button>
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors cursor-pointer">
                        3
                    </button>
                    <span className="text-gray-400 px-1 pt-1">...</span>
                    <button className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm transition-colors cursor-pointer">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
