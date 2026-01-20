export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: {
        name: string;
        image: string;
    };
    image: string;
    readTime: string;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Mendefinisikan ulang pengalaman universitas untuk era digital modern.',
        excerpt: 'Seiring teknologi mengubah cara kita belajar dan berinteraksi, universitas harus beradaptasi. KelasInovatif memimpin dengan ruang kelas hybrid, kurikulum berbasis AI, dan fokus pada aplikasi dunia nyata.',
        category: 'Akademik',
        date: '24 Oktober 2023',
        author: {
            name: 'Natalia T. Morgan',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCSFmWiDYuJnvrPwYJ69MGEJg6-482Wf-_44x3l25zmqao8jYWwIVgHUtJKMIHejYCcUn13h3IfmCd9L2nHsZPr5v5-9TaT-sThn8ghH9i0YC1rOyieUqShfyHbUEQWCHaHtaA-qG8c2fq5Uy9cfhjz_p-iwEtxSD-casg9e-tAVv8w9Xx4rowpkVdx2mPMGF9pU2hOafen06_T4E_krjM8ZL_uzvrYojkCHUbu6f7CyeXiX1UoAMyNWIPDYcZUxQhjhoUNoCW8t8',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_3RKJfP18_u2RRxn_-k7j3aTyUnTO5Ey4XIpgijO5hFMBTqnNx2TC-4R_ZhvlBrx6xBoBd7yYx9a0JF3sV-hIzHXHt4xA5_3cVSmtqQUJC7OhSgTFcFHChfGb9hMF3MKu1cTsLfi-Y3J-jy-B5zs7qp2Hb3fRkEwikZqst9IEVpl4p1FbkzRjbJlUi6qWs2dDNhUCZkX-Xm311S6__bz2O3RtHTaa-XFe7Eq2Dm198J1FNiOciToYyX46wVx8SCTloBFoJqWAy6E',
        readTime: '7 menit baca',
        featured: true,
    },
    {
        id: 2,
        title: '5 tips untuk menyeimbangkan studi dan kehidupan sosial di kampus.',
        excerpt: 'Menemukan titik keseimbangan antara keunggulan akademik dan menciptakan kenangan seumur hidup bukanlah hal yang mustahil. Berikut adalah strategi teratas kami.',
        category: 'Kehidupan Kampus',
        date: '07 Juli 2023',
        author: {
            name: 'Gabriella S.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC_Q_2YNLWSUDQ2GwTHvydgThFZejMYorndjSLDNbVd7nDHaaqK_Haxxcd4ydVc05xnC0of0i-6kdsYZp_0ldr3ljA-AzRTRGE3r0Tlkl4D7zXngF8mLvkSVA4yaWI0sZ8rDKNUCBD_EGi_FeBx8NyGk-GNYlpjb33biGFDbPmtoJXh6DR9tcT_P4OXrlPXbPKNKs-wtdnNv8qCwgL_PSn6V3pbJsaafVeJ6UikZfqfzVLG8LqDxc1FZCHcBv2AKFy51inq4W1JD8',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuf4qno2Jwc74tkxip7k3r85qAa6-kdqP6QieN26q0Qm-thIVCLIwQjGIGVTMuuHz_bM0_OWrEaTP8k3qopFPqTC7XRgAwFH4X8SvFoR_bXwB6JXbXRr4L04adKZrQ_SbKQwmAj7kpzFz5_FfPFxFLQ3xnmHlcgpIo68KLOQ2Sy6zEIxZdI8rmZ9WxICAhJpPYFFOH-jNkKLZT93S8B9wtQZBiJQQjz9tmLiMRaMxpsMTgzq4E54BfBPGHbWbdXowsYA_A_RlGpyQ',
        readTime: '5 menit baca',
    },
    {
        id: 3,
        title: 'Laboratorium penelitian baru dibuka untuk studi energi berkelanjutan.',
        excerpt: 'Fasilitas mutakhir ini akan memungkinkan mahasiswa dan fakultas untuk mempelopori metode baru dalam pembangkit energi terbarukan.',
        category: 'Penelitian',
        date: '10 Juli 2023',
        author: {
            name: 'Eliana M.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG6rYoszsTnOTgHKDr3RHVu6VwJw6IxY4cWovJ74c-0RHzdLlgyxzA7YUB6DZB66YhqXacBIkFcfpiDt-NL4iJDq8ExVPmlONlwV84vOpyodhl8Ec3cA_S4W-hgbDt_j4EbmqFp9DPAvFT6753IknPtkDtZLoKq9Ra4Ea7gU671xOo1JTcvf2Rankf82Q7-566J2HPZGF2TW32pJ25wV-HffziGY3tEe2dOIEv8fPKmQ7HzeQbR3ufh6yezqEAjiqwLdkLrLoqMYs',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCba148ME9ezU6z6fj0u-cVKrCO_3W1CFWrATXwdVikZBAg736QaEdxZawmw5Zfo_OEgTLdodjBiv4qX17P4Ye3XQgMcp4ep5OBPQ5ZmFfcZxALtpyBq9Lry4OFFlApCDTx-IMT2GvhbNzcZ578_svNFmsPHx9jaI08g5GaCcW6A8Jd29A-fPUO-lwpxss5uly8EnrZgLueXM8LFdMhPqkQb2EoxkpdXQ9xJvAyaSMbxplLJeqeMMaQRfmkvWUp4CNQ1XNk36qEuNg',
        readTime: '3 menit baca',
    },
    {
        id: 4,
        title: 'Merayakan Kelas 2023: Sorotan & Foto.',
        excerpt: 'Hidupkan kembali keajaiban hari kelulusan. Dari pidato yang menginspirasi hingga lemparan toga, lihat momen terbaik dari upacara tersebut.',
        category: 'Acara',
        date: '15 Agustus 2023',
        author: {
            name: 'Marcus L.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY-sN1dGpKtzQ-a6s6z0hXES0YEI7JI_Dzoe3F_krIF3TXnFtkv6cQ418uftvjhDJ93U1KDEN7V29giO8PCDlnwPa0jyfg1X3XWojVQPT-_A4f3ok_JviTMKWm6-VqBCiRLeRWiKhINCfsinVnsWmymG4StKGSLHPQhySC9NOTR2xI64qTlpUDeGgGMAAx_3UiojZfbXd7bAndhE25oJjh0JKFNamgJIzeXhcGXK_N9P_oLC8Ih5AYUwGkPmV5j1MOP89k7u9CYLg',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2GLu1MTjtPSfIGsyt_gJ3CXCO3DZ_x5AnBjl0pq01DJmlG_FOyb-mR00t9IjJNaQakHilzVMm9yRktQxbVC1e57aoywfhAMFFwstRBW9Jaz8p1rOlzVzIGmppSopwJo_2X7RLMBJ1vww_rmaJ9F9f3yGp7GTEyGxTieaDA0A8zY8UAR1Fu27PpzKTiHmGLDdvclbLOCt5vwDh7sT-aWW4oKIf0d9Lrhy-tRdXJUVlbhyvV4jTuc8gSL5l13O8dBdB1Oa-BaSih1M',
        readTime: '8 menit baca',
    },
    {
        id: 5,
        title: 'Manajemen Strategis untuk Pemimpin Masa Depan.',
        excerpt: 'Penawaran kursus terbaru kami mempersiapkan mahasiswa untuk peran eksekutif tingkat tinggi dengan studi kasus praktis.',
        category: 'Karier',
        date: '02 September 2023',
        author: {
            name: 'David C.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAB3Jv7n6YvayN3ehNroxsVagvZnR7j4dNhWzcncVzA4PRUuH0tVfazJcdG5o_FcoDxaG6jKII-OAHn29lq8ZApRP5ylnXB-vbZcAFnZRj_XFzaVrHSNMg-VU2CjQUhlMXKu308npkta4FK87HK5YHBnUiXNq9YMZVVmK2lcIPmfIvg1NCqd1e33k8lEK7EtaLhTGlvAtzoZRSjVFNTpHSwikmRBOWXC88srmCMAWMe56M31yqPTarT003Qp1jzzNy1-BnmCw37Vo',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV7Za2hyaRYlW-rxfGr8O1vHOiESOWw_ggLbh9AHnLXRhl02I5hG-Y0rt7d-mbKEuEGj0sAjRCCZJcmc9kDVRQfNAvLPtq9MguNQtYlqFjeWos7rwIChmK4MWhUrRuPoI0YIEi7naL5KxNl5Q7AcYvv2Eq9VTe4zccIAq1-t4juFLMaBkZE9L8nQ7zcx-LPWo_ss71H1ZFTvYDKSHk9kvvV_NtyfUIy9ZkmTwOVs3wJEWEs2hjeNNSLIcWm3f2GsabOJZmjFOwxkk',
        readTime: '4 menit baca',
    },
    {
        id: 6,
        title: 'Inisiatif Kampus Inklusif: Tinjauan Tahun Pertama.',
        excerpt: 'Kilas balik kemajuan yang telah kami buat dalam menciptakan lingkungan yang ramah untuk semua mahasiswa, terlepas dari latar belakang.',
        category: 'Komunitas',
        date: '28 September 2023',
        author: {
            name: 'Sarah J.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4eDBix9oUV3rqN64a7w-xzh2bIC6nQCWrNngUWRS7zi5MZJLYDRntjtpQUVQs-7fUky5ncx0Gjh4wU6EoWWOOjrEfXxS2YGOhxzZX6mVIRSXgNHdEZT18IZD9Z298d_s3jnwvbVnKnaU-ADZE979t3WAy8EzmOTTUxtYPWd2x-uBhpaklpJOz3yXKalnxmEtWwYm-gbHmdPKllEM4qi2qbNZlBqUURC0fWllLwbSyw1a73lC2eTAMi2gMUgiVDCwIbCiVk2IpaJs',
        },
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtN_VZAllF7NF9edbf6W9hub5lDyOCaEyv1jXN6wT6w9Pddo0udm5zclQytbGRzBanliiQGa_eQ1OyRO7ov5lrCwrmjgsyd3Kzsvha-AoLenICqq1HTWB_ySTzX_3svvLb8Iht-eDbspxk3-0HMhh5cZwPI-KtfatAkcWazE2ctjKcGzxKqZa8CPclEeJXsUIj_tfQ-WAwH8-OKzh13_ZCv7AF0NvWPBnC7WsiRhgaGpkhHvznT3adOOcCHlu7w6fRzES_Jtn3L58',
        readTime: '6 menit baca',
    },
];
