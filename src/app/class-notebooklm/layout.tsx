import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas NotebookLM - Kelas Inovatif University',
    description: 'Manfaatkan kekuatan Google NotebookLM. Pelajari cara mengubah dokumen Anda menjadi basis pengetahuan interaktif berbasis AI.',
};

export default function NotebookLMLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
