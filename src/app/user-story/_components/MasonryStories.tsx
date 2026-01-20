import React from 'react';
import { Quote, Share2, ChevronDown } from 'lucide-react';

const stories = [
    {
        name: "James Wilson",
        role: "Arsitektur",
        quote: "Program arsitektur mendorong batas kreatif saya. Saya belajar melihat ruang secara berbeda.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvL82E_NDJZC99m_hILIWWgIklZYe7hI5aue8SQc6rBz4NvuIAdFyEYaJePmP4PXWc0WhWssX8P-Hv3ao4f4DU5bsPOOu3z3zru1ZZwzl8hgqxiAAvWgBTh_RlABM8eE9Y5zFvct-Yh5Ly5-wvMr9ISednVqZtyePWf8J3fvUhVlrWjrsAl2ID9RQknIb1Wjt9p-QXXntirSfMkrbYYnMww0uk3gQRRHqBQRErvfwbPoMW2WgH5LE528p2RO5KYji9h-zB8PoFKtfJ",
        theme: "light"
    },
    {
        name: "Priya Patel",
        role: "Seni Rupa",
        quote: "Lingkungan yang menginspirasi di mana kreativitas mengalir bebas. Para profesor adalah seniman praktik yang benar-benar peduli.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDal9oeSrDR2-70vSPIVVNBcK-pW-5_oA9EgWHsdm9cBooNWCqeQujSWTZ8kzmfUleHVzeUosbSyggsKsqFgtZaUwnRs98b45z2IIe491a3jgBqn6VBg6IFzvEPmRKvVVVy_VN-a0jVQwozl6maTnHYZnbHskMHxmkRoQxSdlnpMKgwppIogpBxq8iHBCzNm8dRpJImBUm6brbO1-638Wo0W0jHJyoNdYzuKeoYZoxTyTHpzDiODDzZWkCSEwLkm7LowZiCnzQSXVsA",
        theme: "dark"
    },
    {
        name: "David Kim",
        role: "Ekonomi",
        quote: "Memahami pasar global tidak pernah lebih menarik. Studi kasus sangat relevan dengan ekonomi saat ini.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSu2ggkRfboXhJN2rB9NSiW40qIuLGXLf5WRrJ7ASS6SvAtnF9pkjA7qMQ9BSH19DnMHu6m_9Tua2x8SITRyxVx7Abz60XBYfMmtu48BZuohedJI9qlujFPD9RlNbqF0JgQ2li9dfS16YAi1p1fdHdkB6lWSaNI22K5sfdnvUEh-HZeXaylaINub1PPEhBnw_82urK6pmIAqj_HS61Ynz60Mh3hJqivIyicvOrlwZwA6uTHX06VKJ6Ew0kdhiHbqvWzz48o36LzO-q",
        theme: "light"
    },
    {
        name: "Anita Roy",
        role: "Fisika",
        quote: "Peralatan lab sangat canggih. Saya dapat melakukan penelitian yang sekarang saya publikasikan di jurnal.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBznskE5L5NgfKbPslNs5bEUxV4gEw0cD3BnX6_qNZz6KSC2S4hbbBZbSQfDxo5O_IIZMOhZwS57lStGYolaIZCZMMli_2KyPFzK8tEfPm1DRsf1Gc7EWZHvWrQ0oFjGeOKyAXEYUv7anh31n-_cBg_oEemsKlSCdpTiKX0cqgNkz0NxIz_XCPfIjCmVrT9wJrlsd7P1LcEYdwx82yPE1aMPICZ59-7PtPCO3LDea26v3Yfhu2SPZ_RzmnGVRiZdu7jmNB5bDvRxc1",
        theme: "light"
    },
    {
        name: "Lucas M.",
        role: "Kehidupan Mahasiswa",
        quote: "Menemukan sahabat terbaik saya di sini.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQfybUjNVtQ_HNdp62huWH26A0qVzv2l4hOn-TXXfp1p89YicI5Q0ve1eaZ9PdLlYxufsBBTzyxE7uD-XtiusCc6UIg9b3le1XSX84ujLXbhDwtjOXw-IrslPNK4W50VC8358b0FAyBN5V34_cShXsXVf3xHHK3VWBBX87qEHo_PG6iHp2kDPboQkaMbUWFyvuEQPm_ICyn5bLdYMdSNFJ9PnPGd8ydFCOtryXuIolMee8xbI1Q7AmNCVQ_A9h01nqluCxbI8Tiof8",
        theme: "photo"
    },
    {
        name: "Sophie Turner",
        role: "Sastra",
        quote: "Kelas cukup kecil untuk memiliki debat nyata. Ini mengajarkan saya keterampilan berpikir kritis yang saya gunakan setiap hari.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrvJZwFXTUfUqulFri0EbcWmDWX8qlTXQG-wy_hLyQn0DuwLO4eYvU_Wtn8sginMtGNfypCWjOVqdTDQuQRljVdF7mr3FMWEPv8jhYtR0fYuDF4lL9pRpRVo9EB2LLSQrbKe1cr0KKhNMwHnLqViKJkFOK5VHW4UN-G5dk0OpZXwYXoZRCZJYEkxL19aruwB_nmWXTNRB3U4nXObctO9V5gdhdDDfFhDNy7U6x0yev_p1CGiaDG0u-G5BdpDEJ2eO-yfb3N3Bw4Dk3",
        theme: "light"
    },
    {
        name: "Marcus Johnson",
        role: "Teknik",
        quote: "Menantang tetapi bermanfaat. Program co-op membantu saya mendapatkan pekerjaan di perusahaan teknologi besar bahkan sebelum saya lulus.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0G2pQNtjwHKix0XvsHGI4tdzS7Q1vkKSWnVnwguZ-8sapE6T59OR3yscLu3kx3yaxbwNiwJ_WMJTrODl78K1mfOrP0FVuqPYIFQXPFp_b1UbHHSBSIlfeYBIEL6CaXWYOx4OtBcHLPkbQGJ4TW-BOfi5OVoAm4V94kV6ChwL7ezRGRF8P0dW0VA29W3RZo-4Om8VDIXSksdUR1U9RoNNJw4DfoWw5-ciaNlaLdcC_r4ww5p4inHJshNmbcVyROYD2F2EowWsim8gi",
        theme: "light"
    }
];

export function MasonryStories() {
    return (
        <section className="py-20 bg-white dark:bg-[#1A2220] relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl text-[#1C302B] dark:text-white mb-2">Lebih Banyak Kisah Mahasiswa</h2>
                        <p className="text-gray-500 dark:text-gray-400">Suara dari berbagai fakultas kami yang beragam.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-full bg-[#F7F5F0] dark:bg-[#0F1210] text-xs font-bold text-[#1C302B] dark:text-white uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-gray-700 transition">Semua</button>
                        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:border-[#1C302B] hover:text-[#1C302B] dark:hover:text-white transition">Seni</button>
                        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:border-[#1C302B] hover:text-[#1C302B] dark:hover:text-white transition">Sains</button>
                        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider hover:border-[#1C302B] hover:text-[#1C302B] dark:hover:text-white transition">Bisnis</button>
                    </div>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {stories.map((story, i) => {
                        if (story.theme === 'photo') {
                            return (
                                <div key={i} className="relative group rounded-2xl overflow-hidden break-inside-avoid">
                                    <img alt="Student Life" className="w-full h-64 object-cover" src={story.image} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                        <p className="text-white text-sm font-medium mb-2">"{story.quote}"</p>
                                        <div className="flex items-center gap-2">
                                            <img alt={story.name} className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gnPh74XDjNT28YO-VkPqZkvD7n1Q6Ov7kbk1AMyKp3jNMehaQJDoKAhVtmWz0t3h8z5NUjKDRny4Yi-qvNIa0mPAUhuGSdC9ReVBNJ-TS5GCJbDfjfkc03FtG_cr1C2qMqQILVOsP2UCX99V69MvM6iuyqcVu4zu4M4-remE8lSVhScPet260INCGvasgVxuf6buF-uS-AkbqW2uTy-A7LatUDa_w9lhzKsiSpDDtSnmG-XzG1Pzht4zm-LfXp-yzmny0q3I8j26" />
                                            <span className="text-xs text-white/80">{story.name}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        const isDark = story.theme === 'dark';
                        return (
                            <div key={i} className={`rounded-2xl p-6 hover:shadow-md transition duration-300 break-inside-avoid ${isDark ? 'bg-[#1C302B] text-white' : 'bg-[#F7F5F0] dark:bg-[#0F1210]'}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <img alt={story.name} className={`w-10 h-10 rounded-full object-cover ${isDark ? 'border-2 border-white/20' : ''}`} src={story.image} />
                                        <div>
                                            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-[#1C302B] dark:text-white'}`}>{story.name}</h4>
                                            <p className={`text-[10px] uppercase ${isDark ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}`}>{story.role}</p>
                                        </div>
                                    </div>
                                    <Quote className={`w-5 h-5 ${isDark ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} fill="currentColor" />
                                </div>
                                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                                    "{story.quote}"
                                </p>
                                <div className={`flex gap-3 pt-4 border-t ${isDark ? 'border-white/20' : 'border-gray-200 dark:border-gray-700'}`}>
                                    <a className={`${isDark ? 'text-white/60 hover:text-white' : 'text-gray-400 hover:text-[#1C302B] dark:hover:text-white'} transition`} href="#">
                                        <Share2 className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-white dark:bg-[#1A2220] border border-gray-200 dark:border-gray-700 text-[#1C302B] dark:text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm">
                        Muat Lebih Banyak Kisah
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
