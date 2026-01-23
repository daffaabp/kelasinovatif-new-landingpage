import { Course } from "../types";

export const courses: Course[] = [
  {
    id: '1',
    category: 'AI untuk Akademik',
    title: 'AI for Akademik',
    description: 'Selesaikan tesis dan disertasi lebih cepat dengan tools AI yang tepat. Literature review, penulisan akademik, dan penelitian menjadi lebih efisien.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop',
    duration: '8 Minggu',
    level: 'Semua Level',
    rating: 4.9,
    students: 1240,
    price: 'Rp 2.500.000',
    instructor: { 
      name: 'Dr. Rina Sari, M.Kom', 
      avatar: 'https://i.pravatar.cc/100?img=32', 
      role: 'Dosen & Peneliti, Universitas Indonesia',
      bio: 'Dr. Rina Sari memiliki pengalaman lebih dari 10 tahun dalam penelitian akademik dan telah membantu ratusan mahasiswa menyelesaikan tesis dan disertasi dengan tools AI.'
    },
    syllabus: [
      { title: 'Pengantar AI untuk Akademik', content: 'Memahami tools AI yang tepat untuk penelitian dan penulisan akademik.' },
      { title: 'Scispace untuk Literature Review', content: 'Menggunakan Scispace untuk analisis paper dan citation management yang efisien.' },
      { title: 'NotebookLM untuk Note-taking', content: 'Mengorganisir ratusan paper dan catatan penelitian dengan NotebookLM.' },
      { title: 'Cursor untuk Penulisan Akademik', content: 'Menulis akademik bebas plagiasi dan terstruktur dengan bantuan Cursor.' }
    ],
    prerequisites: ['Tidak diperlukan pengetahuan sebelumnya', 'Minat pada penelitian dan penulisan akademik']
  },
  {
    id: '2',
    category: 'AI untuk Bisnis',
    title: 'AI for Bisnis',
    description: 'Tingkatkan produktivitas tim dan efisiensi bisnis dengan implementasi AI yang strategis. Dari automasi hingga analisis data untuk keputusan yang lebih cerdas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    duration: '10 Minggu',
    level: 'Semua Level',
    rating: 4.9,
    students: 2100,
    price: 'Rp 3.000.000',
    instructor: { 
      name: 'Budi Santoso', 
      avatar: 'https://i.pravatar.cc/100?img=15', 
      role: 'CEO, PT Teknologi Digital Indonesia',
      bio: 'Budi Santoso adalah praktisi AI untuk bisnis yang telah membantu puluhan perusahaan meningkatkan efisiensi hingga 40% dengan implementasi AI yang tepat.'
    },
    syllabus: [
      { title: 'Pengantar AI untuk Bisnis', content: 'Memahami potensi AI dalam transformasi bisnis dan produktivitas tim.' },
      { title: 'Automasi Proses Bisnis', content: 'Mengotomasi tugas repetitif dan workflow bisnis dengan AI tools.' },
      { title: 'Analisis Data & Business Intelligence', content: 'Menggunakan AI untuk analisis data dan pengambilan keputusan bisnis.' },
      { title: 'Strategi Implementasi AI', content: 'Membangun SOP dan strategi implementasi AI yang aman untuk tim.' }
    ],
    prerequisites: ['Tidak diperlukan pengetahuan sebelumnya', 'Minat pada transformasi bisnis dengan AI']
  },
  {
    id: '3',
    category: 'AI untuk Content Creator',
    title: 'AI for Konten Kreator',
    description: 'Produksi konten lebih cepat tanpa mengorbankan kualitas. Dari ide, script, editing, hingga strategi konten—semua dengan bantuan AI.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop',
    duration: '8 Minggu',
    level: 'Semua Level',
    rating: 4.8,
    students: 1850,
    price: 'Rp 2.500.000',
    instructor: { 
      name: 'Dewi Lestari', 
      avatar: 'https://i.pravatar.cc/100?img=5', 
      role: 'Content Creator, 500K Subscribers',
      bio: 'Dewi Lestari adalah content creator sukses yang telah meningkatkan produksi konten dari 1 menjadi 5 video per minggu berkat AI tools, dengan revenue YouTube naik 200% dalam 6 bulan.'
    },
    syllabus: [
      { title: 'Pengantar AI untuk Content Creation', content: 'Memahami tools AI yang tepat untuk produksi konten yang efisien.' },
      { title: 'AI untuk Ide & Scriptwriting', content: 'Menggunakan ChatGPT dan tools AI untuk generate ide konten dan scriptwriting.' },
      { title: 'AI untuk Video Editing', content: 'Menggunakan Runway dan tools AI untuk video editing yang cepat dan profesional.' },
      { title: 'Strategi Konten dengan AI', content: 'Membangun kalender konten dan strategi content marketing dengan bantuan AI.' }
    ],
    prerequisites: ['Tidak diperlukan pengetahuan sebelumnya', 'Minat pada content creation dan kreativitas']
  }
];

