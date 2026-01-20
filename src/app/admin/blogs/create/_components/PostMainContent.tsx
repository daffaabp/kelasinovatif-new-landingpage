"use client";

import React from "react";
import { Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon, Image, Quote } from "lucide-react";

export function PostMainContent() {
    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="post-title"
                    >
                        Post Title
                    </label>
                    <input
                        id="post-title"
                        type="text"
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] shadow-sm text-lg py-3 px-4 font-serif placeholder:font-sans transition-colors bg-transparent border focus:outline-none"
                        placeholder="Enter an engaging title..."
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            htmlFor="post-slug"
                        >
                            Slug
                        </label>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <span>Auto-generate</span>
                            <button
                                type="button"
                                className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#263c32] focus:ring-offset-2 bg-[#263c32]"
                                role="switch"
                                aria-checked="true"
                            >
                                <span
                                    aria-hidden="true"
                                    className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                ></span>
                            </button>
                        </div>
                    </div>
                    <div className="flex rounded-lg shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 text-gray-500 sm:text-sm">
                            kelasinovatif.com/blog/
                        </span>
                        <input
                            id="post-slug"
                            type="text"
                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] sm:text-sm p-2 bg-transparent border focus:outline-none"
                            placeholder="post-title-slug"
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="post-excerpt"
                    >
                        Excerpt
                    </label>
                    <textarea
                        id="post-excerpt"
                        rows={3}
                        className="w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white focus:border-[#263c32] focus:ring-[#263c32] shadow-sm text-sm p-3 bg-transparent border focus:outline-none"
                        placeholder="Write a brief summary for search results and cards..."
                    ></textarea>
                    <p className="mt-1 text-xs text-gray-500 text-right">
                        0/160 characters
                    </p>
                </div>
            </div>
            <div className="bg-white dark:bg-[#1C2624] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col min-h-[500px]">
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center gap-1 flex-wrap bg-gray-50/50 dark:bg-gray-800/30 rounded-t-xl">
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Bold"
                        >
                            <Bold className="w-5 h-5" />
                        </button>
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Italic"
                        >
                            <Italic className="w-5 h-5" />
                        </button>
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Underline"
                        >
                            <Underline className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="H1"
                        >
                            <span className="font-serif font-bold text-lg px-1">H1</span>
                        </button>
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="H2"
                        >
                            <span className="font-serif font-bold text-base px-1">H2</span>
                        </button>
                    </div>
                    <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Bullet List"
                        >
                            <List className="w-5 h-5" />
                        </button>
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Numbered List"
                        >
                            <ListOrdered className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Link"
                        >
                            <LinkIcon className="w-5 h-5" />
                        </button>
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Image"
                        >
                            <Image className="w-5 h-5" />
                        </button>
                        <button
                            className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                            title="Quote"
                        >
                            <Quote className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="flex-1 p-6 relative">
                    <textarea
                        className="w-full h-full min-h-[400px] border-none focus:ring-0 bg-transparent text-gray-800 dark:text-gray-200 resize-none font-sans text-base leading-relaxed focus:outline-none"
                        placeholder="Start writing your masterpiece here..."
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
