"use client";

import React, { useState } from "react";
import { CloudUpload, X, Clock } from "lucide-react";

export function PostSidebar() {
    const [featured, setFeatured] = useState(false);

    return (
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-[#1C2624] p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                        Featured Post
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Pin this post to the top</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                        type="checkbox"
                        name="toggle"
                        id="toggle"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 checked:right-0 checked:border-[#263c32]"
                        checked={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                    />
                    <label
                        htmlFor="toggle"
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${featured ? "bg-[#263c32]" : "bg-gray-300"
                            }`}
                    ></label>
                </div>
            </div>
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <h3 className="font-serif font-bold text-lg text-gray-800 dark:text-white mb-4">
                    Cover Image
                </h3>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                    <div className="w-12 h-12 bg-[#263c32]/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <CloudUpload className="text-[#263c32] text-2xl w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Click to upload
                    </p>
                    <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-2">SVG, PNG, JPG (max. 2MB)</p>
                </div>
                <div className="mt-4">
                    <label className="text-xs font-medium text-gray-500 mb-1 block">
                        Or use image URL
                    </label>
                    <input
                        type="text"
                        className="w-full text-sm rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] shadow-sm p-2 bg-transparent border"
                        placeholder="https://..."
                    />
                </div>
            </div>
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-5">
                <h3 className="font-serif font-bold text-lg text-gray-800 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                    Settings
                </h3>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="category"
                    >
                        Category
                    </label>
                    <select
                        id="category"
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] shadow-sm text-sm p-2 bg-transparent border"
                    >
                        <option>Select a category</option>
                        <option>Akademik</option>
                        <option>Kehidupan Kampus</option>
                    </select>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="tags"
                    >
                        Tags
                    </label>
                    <div className="relative">
                        <input
                            id="tags"
                            type="text"
                            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] shadow-sm text-sm pb-8 p-2 bg-transparent border"
                            placeholder="Add tags..."
                        />
                        <div className="absolute bottom-2 left-2 flex gap-1">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#263c32]/10 text-[#263c32] dark:text-white dark:bg-[#263c32]/30">
                                Education{" "}
                                <button className="ml-1 text-[#263c32] hover:text-red-500">
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#263c32]/10 text-[#263c32] dark:text-white dark:bg-[#263c32]/30">
                                Tips{" "}
                                <button className="ml-1 text-[#263c32] hover:text-red-500">
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="read-time"
                    >
                        Read Time (min)
                    </label>
                    <div className="relative">
                        <input
                            id="read-time"
                            type="number"
                            className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] shadow-sm text-sm pl-10 p-2 bg-transparent border"
                            placeholder="5"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="text-gray-400 text-lg w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
