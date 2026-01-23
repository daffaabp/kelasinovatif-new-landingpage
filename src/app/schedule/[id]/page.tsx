import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { ScheduleHero } from './_components/ScheduleHero';
import { ScheduleContent } from './_components/ScheduleContent';
import { SpeakerBio } from './_components/SpeakerBio';
import { getScheduleById } from '@/app/actions/schedule';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const scheduleId = parseInt(id);

    if (isNaN(scheduleId)) {
        return {
            title: 'Acara Tidak Ditemukan - Kelas Inovatif',
        };
    }

    const schedule = await getScheduleById(scheduleId);

    if (!schedule) {
        return {
            title: 'Acara Tidak Ditemukan - Kelas Inovatif',
        };
    }

    return {
        title: `${schedule.title} - Kelas Inovatif`,
        description: schedule.description,
    };
}

export default async function ScheduleDetailPage({ params }: Props) {
    const { id } = await params;
    const scheduleId = parseInt(id);

    if (isNaN(scheduleId)) notFound();

    const schedule = await getScheduleById(scheduleId);

    if (!schedule) notFound();

    const formattedDate = new Date(schedule.date).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const speaker = {
        name: schedule.speaker_name,
        image: schedule.speaker_image,
        role: schedule.speaker_role,
    };

    return (
        <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
            <Navbar />
            <ScheduleHero
                title={schedule.title}
                type={schedule.type}
                date={formattedDate}
                startTime={schedule.start_time}
                endTime={schedule.end_time}
                location={schedule.location}
                speaker={speaker}
            />

            <div className="relative -mt-24 lg:-mt-32 pb-16 px-4 sm:px-6 lg:px-8 z-20">
                <div className="max-w-4xl mx-auto">
                    <ScheduleContent
                        description={schedule.description}
                        image={undefined} // Or add an image field to schedule later
                    />
                    <SpeakerBio speaker={speaker} />
                </div>
            </div>

            <Footer />
        </main>
    );
}
