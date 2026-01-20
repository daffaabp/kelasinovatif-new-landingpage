"use client";

import React from "react";
import { AdminSidebar } from "../_components/AdminSidebar";
import { BlogHeader } from "./_components/BlogHeader";
import { StatsCards } from "./_components/StatsCards";
import { BlogTable } from "./_components/BlogTable";
import { ThemeToggle } from "../_components/ThemeToggle";

export default function AdminBlogsPage() {
    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full">
                    <BlogHeader />
                    <StatsCards />
                    <BlogTable />
                    <footer className="mt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2023 KelasInovatif Admin Panel. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
