"use client";

import React from "react";
import { AdminSidebar } from "../../_components/AdminSidebar";
import { ThemeToggle } from "../../_components/ThemeToggle";
import { CreateScheduleHeader } from "./_components/CreateScheduleHeader";
import { ScheduleForm } from "./_components/ScheduleForm";
import { ScheduleSidebar } from "./_components/ScheduleSidebar";

export default function CreateSchedulePage() {
    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full flex flex-col">
                    <CreateScheduleHeader />
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                        <ScheduleForm />
                        <ScheduleSidebar />
                    </div>
                    <footer className="mt-auto pt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2023 KelasInovatif Admin Panel. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
