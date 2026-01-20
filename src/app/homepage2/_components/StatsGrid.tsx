import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

export function StatsGrid() {
    return (
        <section className="bg-[#1C302B] text-white py-16 md:py-24 relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <svg height="400" viewBox="0 0 200 200" width="400">
                    <circle cx="200" cy="200" fill="none" r="150" stroke="white" strokeWidth="0.5"></circle>
                    <circle cx="200" cy="200" fill="none" r="100" stroke="white" strokeWidth="0.5"></circle>
                    <circle cx="200" cy="200" fill="none" r="50" stroke="white" strokeWidth="0.5"></circle>
                </svg>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Stats and Ratings */}
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="flex -space-x-3">
                            <img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#1C302B] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvL82E_NDJZC99m_hILIWWgIklZYe7hI5aue8SQc6rBz4NvuIAdFyEYaJePmP4PXWc0WhWssX8P-Hv3ao4f4DU5bsPOOu3z3zru1ZZwzl8hgqxiAAvWgBTh_RlABM8eE9Y5zFvct-Yh5Ly5-wvMr9ISednVqZtyePWf8J3fvUhVlrWjrsAl2ID9RQknIb1Wjt9p-QXXntirSfMkrbYYnMww0uk3gQRRHqBQRErvfwbPoMW2WgH5LE528p2RO5KYji9h-zB8PoFKtfJ" />
                            <img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#1C302B] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSu2ggkRfboXhJN2rB9NSiW40qIuLGXLf5WRrJ7ASS6SvAtnF9pkjA7qMQ9BSH19DnMHu6m_9Tua2x8SITRyxVx7Abz60XBYfMmtu48BZuohedJI9qlujFPD9RlNbqF0JgQ2li9dfS16YAi1p1fdHdkB6lWSaNI22K5sfdnvUEh-HZeXaylaINub1PPEhBnw_82urK6pmIAqj_HS61Ynz60Mh3hJqivIyicvOrlwZwA6uTHX06VKJ6Ew0kdhiHbqvWzz48o36LzO-q" />
                            <img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#1C302B] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDal9oeSrDR2-70vSPIVVNBcK-pW-5_oA9EgWHsdm9cBooNWCqeQujSWTZ8kzmfUleHVzeUosbSyggsKsqFgtZaUwnRs98b45z2IIe491a3jgBqn6VBg6IFzvEPmRKvVVVy_VN-a0jVQwozl6maTnHYZnbHskMHxmkRoQxSdlnpMKgwppIogpBxq8iHBCzNm8dRpJImBUm6brbO1-638Wo0W0jHJyoNdYzuKeoYZoxTyTHpzDiODDzZWkCSEwLkm7LowZiCnzQSXVsA" />
                            <img alt="Student" className="w-10 h-10 rounded-full border-2 border-[#1C302B] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBznskE5L5NgfKbPslNs5bEUxV4gEw0cD3BnX6_qNZz6KSC2S4hbbBZbSQfDxo5O_IIZMOhZwS57lStGYolaIZCZMMli_2KyPFzK8tEfPm1DRsf1Gc7EWZHvWrQ0oFjGeOKyAXEYUv7anh31n-_cBg_oEemsKlSCdpTiKX0cqgNkz0NxIz_XCPfIjCmVrT9wJrlsd7P1LcEYdwx82yPE1aMPICZ59-7PtPCO3LDea26v3Yfhu2SPZ_RzmnGVRiZdu7jmNB5bDvRxc1" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-yellow-400 text-sm gap-0.5">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current opacity-50" />
                            </div>
                            <span className="text-xs text-gray-300 font-bold">5.0</span>
                        </div>
                    </div>
                    <div className="mt-12 flex gap-12">
                        <div>
                            <h3 className="font-serif text-4xl mb-1">92%</h3>
                            <p className="text-xs text-gray-400 max-w-[150px]">Mereka bekerja di bidang yang terkait dengan bidang studi mereka</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-4xl mb-1">25%</h3>
                            <p className="text-xs text-gray-400 max-w-[150px]">Mahasiswa yang terus berkembang setiap hari masih berjuang</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white/10 p-3 rounded-lg inline-flex items-center gap-3 backdrop-blur-sm">
                        <div className="flex -space-x-2">
                            <img alt="s" className="w-8 h-8 rounded-full border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrvJZwFXTUfUqulFri0EbcWmDWX8qlTXQG-wy_hLyQn0DuwLO4eYvU_Wtn8sginMtGNfypCWjOVqdTDQuQRljVdF7mr3FMWEPv8jhYtR0fYuDF4lL9pRpRVo9EB2LLSQrbKe1cr0KKhNMwHnLqViKJkFOK5VHW4UN-G5dk0OpZXwYXoZRCZJYEkxL19aruwB_nmWXTNRB3U4nXObctO9V5gdhdDDfFhDNy7U6x0yev_p1CGiaDG0u-G5BdpDEJ2eO-yfb3N3Bw4Dk3" />
                            <img alt="s" className="w-8 h-8 rounded-full border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gnPh74XDjNT28YO-VkPqZkvD7n1Q6Ov7kbk1AMyKp3jNMehaQJDoKAhVtmWz0t3h8z5NUjKDRny4Yi-qvNIa0mPAUhuGSdC9ReVBNJ-TS5GCJbDfjfkc03FtG_cr1C2qMqQILVOsP2UCX99V69MvM6iuyqcVu4zu4M4-remE8lSVhScPet260INCGvasgVxuf6buF-uS-AkbqW2uTy-A7LatUDa_w9lhzKsiSpDDtSnmG-XzG1Pzht4zm-LfXp-yzmny0q3I8j26" />
                        </div>
                        <div>
                            <p className="text-xs font-bold">5000</p>
                            <p className="text-[10px] text-gray-300 uppercase tracking-wider">Rating Mahasiswa</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Featured Story */}
                <div className="relative">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">Student Stories</span>
                    <span className="text-6xl text-white/20 font-serif absolute -left-8 -top-4">“</span>
                    <blockquote className="font-serif text-2xl md:text-3xl leading-snug mb-8 relative z-10">
                        "The curriculum here is challenging but incredibly rewarding. I've gained skills that I use daily in my career as a software engineer."
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img alt="Sarah Jenkins" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDra2yLzh8b63D6hW7SL078woRDORt2wqbZrBfuVvaOG_W7X1OAvo4PYrr1w85sCfah0TGJfcDcx-1KDj6txK2rc-csOMHrxmmNLmLPIAmk4r3SgjUaydPAwRYxyGcWVv8uq-fp5HQQUv0io5OesmzOS2KQ4YaUHiZJSFLfoW0mH9LAHOhTFn-uFmvFF48DwDsY7voey1qkLdYDZlUEbPzzuHZ5mYV0G1P4wGCImyNuifAnofgEzsKVFTNMdlYVDkrQiJ5WYyWcBQnp" />
                            <div>
                                <h4 className="font-bold text-sm">Sarah Jenkins</h4>
                                <p className="text-[10px] text-gray-400 uppercase">Alumni, Angkatan 2022</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1C302B] transition">
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white text-[#1C302B] flex items-center justify-center hover:bg-gray-200 transition">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
