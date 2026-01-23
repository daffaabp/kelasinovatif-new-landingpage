import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas Scite - Kelas Inovatif University',
    description: 'Kuasai analisis kutipan lanjutan dengan Scite.ai. Tingkatkan alur kerja penelitian Anda dan verifikasi klaim ilmiah.',
};

export default function SciteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
