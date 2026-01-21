'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getSchedules() {
    try {
        const schedules = await db('schedules').select('*').orderBy('date', 'asc');
        // Convert dates to string to avoid serialization issues in Next.js
        return schedules.map(schedule => ({
            ...schedule,
            date: schedule.date.toISOString(),
            created_at: schedule.created_at?.toISOString(),
            updated_at: schedule.updated_at?.toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching schedules:', error);
        return [];
    }
}

export async function getScheduleById(id: number) {
    try {
        const schedule = await db('schedules').where({ id }).first();
        if (!schedule) return null;
        return {
            ...schedule,
            date: schedule.date.toISOString(),
            created_at: schedule.created_at?.toISOString(),
            updated_at: schedule.updated_at?.toISOString(),
        };
    } catch (error) {
        console.error('Error fetching schedule by id:', error);
        return null;
    }
}

export async function createSchedule(data: any) {
    try {
        // Basic validation
        if (!data.title || !data.date || !data.start_time || !data.end_time) {
            return { msg: 'Missing required fields' };
        }

        await db('schedules').insert({
            title: data.title,
            type: data.type,
            speaker_name: data.speaker_name,
            speaker_role: data.speaker_role,
            speaker_image: data.speaker_image,
            date: new Date(data.date), // Ensure it's a Date object
            start_time: data.start_time,
            end_time: data.end_time,
            location: data.location,
            description: data.description,
            created_at: new Date(),
            updated_at: new Date(),
        });

        revalidatePath('/admin/schedule');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating schedule:', error);
        return { msg: 'Failed to create schedule' };
    }
}

export async function updateSchedule(id: number, data: any) {
    try {
        await db('schedules').where({ id }).update({
            title: data.title,
            type: data.type,
            speaker_name: data.speaker_name,
            speaker_role: data.speaker_role,
            speaker_image: data.speaker_image,
            date: new Date(data.date),
            start_time: data.start_time,
            end_time: data.end_time,
            location: data.location,
            description: data.description,
            updated_at: new Date(),
        });

        revalidatePath('/admin/schedule');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error updating schedule:', error);
        return { msg: 'Failed to update schedule' };
    }
}

export async function deleteSchedule(id: number) {
    try {
        await db('schedules').where({ id }).del();
        revalidatePath('/admin/schedule');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting schedule:', error);
        return { msg: 'Failed to delete schedule' };
    }
}
