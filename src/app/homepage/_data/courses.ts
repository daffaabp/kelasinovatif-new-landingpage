import { Course } from "../types";

export const courses: Course[] = [
  {
    id: '1',
    category: 'Seni & Humaniora',
    title: 'Temukan esensi ekspresi manusia dan budaya.',
    description: 'Jelajahi sejarah gerakan seni dari Renaisans hingga zaman Kontemporer. Kursus ini menyelami konteks sosial, politik, dan budaya yang membentuk ekspresi artistik.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop',
    duration: '8 Minggu',
    level: 'Pemula',
    rating: 4.8,
    students: 1240,
    price: '$299',
    instructor: { 
      name: 'Natalia T. Morgan', 
      avatar: 'https://i.pravatar.cc/100?img=32', 
      role: 'Profesor Sejarah Seni',
      bio: 'Natalia T. Morgan memiliki pengalaman lebih dari 15 tahun mengajar sejarah seni di universitas terkemuka. Dia adalah penulis dan kurator yang telah menerbitkan karya.'
    },
    syllabus: [
      { title: 'Pengantar Sejarah Seni', content: 'Memahami metodologi dan terminologi dasar.' },
      { title: 'Renaisans', content: 'Menjelajahi kelahiran kembali seni dan budaya di Eropa.' },
      { title: 'Barok dan Rokoko', content: 'Drama dan detail abad ke-17 dan ke-18.' },
      { title: 'Modernisme', content: 'Pergeseran menuju abstraksi dan media baru.' }
    ],
    prerequisites: ['Tidak diperlukan pengetahuan sebelumnya', 'Minat pada sejarah dan budaya']
  },
  {
    id: '2',
    category: 'Sains & Teknologi',
    title: 'Dasar-dasar Ilmu Komputer dan Logika.',
    description: 'Pengantar komprehensif tentang ilmu komputer, mencakup algoritma, struktur data, dan dasar-dasar rekayasa perangkat lunak.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop',
    duration: '12 Minggu',
    level: 'Menengah',
    rating: 4.9,
    students: 2100,
    price: '$399',
    instructor: { 
      name: 'Gabriella S. Adams', 
      avatar: 'https://i.pravatar.cc/100?img=44', 
      role: 'Insinyur Perangkat Lunak Senior',
      bio: 'Gabriella adalah pengembang utama di perusahaan teknologi besar dan senang mengajar dasar-dasar coding kepada generasi insinyur berikutnya.'
    },
    syllabus: [
      { title: 'Pengantar Algoritma', content: 'Pengurutan, pencarian, dan analisis kompleksitas.' },
      { title: 'Struktur Data', content: 'Array, linked list, pohon, dan graf.' },
      { title: 'Dasar-dasar Pengembangan Web', content: 'Fundamental HTML, CSS, dan JavaScript.' },
      { title: 'Prinsip Rekayasa Perangkat Lunak', content: 'Kontrol versi, pengujian, dan deployment.' }
    ],
    prerequisites: ['Keterampilan matematika dasar', 'Akses ke komputer']
  },
  {
    id: '3',
    category: 'Bisnis & Ekonomi',
    title: 'Manajemen Strategis untuk Pemimpin Masa Depan.',
    description: 'Pelajari prinsip-prinsip inti strategi bisnis, pemasaran, dan ekonomi untuk memimpin organisasi secara efektif di pasar global.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    duration: '10 Minggu',
    level: 'Lanjutan',
    rating: 4.7,
    students: 850,
    price: '$349',
    instructor: { 
      name: 'Eliana M. Thompson', 
      avatar: 'https://i.pravatar.cc/100?img=9', 
      role: 'MBA, Konsultan Bisnis',
      bio: 'Eliana telah berkonsultasi untuk perusahaan Fortune 500 dan membawa studi kasus dunia nyata ke dalam kelas.'
    },
    syllabus: [
      { title: 'Mikroekonomi', content: 'Penawaran, permintaan, dan struktur pasar.' },
      { title: 'Strategi Pemasaran', content: 'Positioning, targeting, dan branding.' },
      { title: 'Akuntansi Keuangan', content: 'Membaca neraca dan laporan laba rugi.' },
      { title: 'Kepemimpinan & Etika', content: 'Mengelola tim dan pengambilan keputusan etis.' }
    ],
    prerequisites: ['Pemahaman dasar tentang ekonomi', 'Pengalaman kepemimpinan lebih disukai']
  }
];

