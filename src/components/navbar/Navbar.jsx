import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search, ShoppingCart, User, ChevronDown,
    Instagram, Facebook, Twitter, Phone,
    Youtube, Menu, X,
    Truck
} from 'lucide-react';
import logo from "../../assets/logo.png"
import CartDrawer from '../cartDrawer/CartDrawer';

const COUNTRIES = [
    { code: 'US', name: 'United States', flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/w20/ca.png' },
];

const CURRENCIES = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
];

const CATEGORIES = [
    { label: 'All Categories', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Home', value: 'home' },
];

const NAV_LINKS = ['Home', 'Shop', 'Blog', 'About', 'Pages', 'Brand'];

const MENU_DATA = {
    'Shop': [
        { label: 'All Products', path: '/shop' },
        { label: 'New Arrivals', path: '/shop/new' },
        { label: 'Best Sellers', path: '/shop/trending' },
        { label: 'Special Offers', path: '/shop/offers' },
    ],
    'Blog': [
        { label: 'Recent Posts', path: '/blog' },
        { label: 'Tech News', path: '/blog/tech' },
        { label: 'Lifestyle', path: '/blog/lifestyle' },
    ],
    'About': [
        { label: 'Our Story', path: '/about/story' },
        { label: 'Team', path: '/about/team' },
        { label: 'Careers', path: '/about/careers' },
        { label: 'Contact', path: '/contact' },
    ]
};

const Navbar = ({ cartItems = [], onUpdateQty, onRemoveItem, cartOpen, setCartOpen }) => {
    const [showCountry, setShowCountry] = useState(false);
    const [showCurrency, setShowCurrency] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <>
            <nav className="w-full flex flex-col shadow-md font-sans sticky top-0 z-[100] bg-white">

                {/* SECTOR 1: Top Utility Bar */}
                <div className="hidden lg:flex bg-gray-50 border-b border-gray-200 text-black text-[11px] py-2 px-6 justify-between items-center relative z-50">
            
                    <span className="font-semibold tracking-wide opacity-70 capitalize">
                        World's fastest online shopping destination
                    </span>

                    <div className="flex gap-6 items-center">
                        {/* Country Dropdown */}
                        <div className="relative cursor-pointer flex items-center gap-1.5 group py-1"
                            onMouseEnter={() => setShowCountry(true)} onMouseLeave={() => setShowCountry(false)}>
                            <img src={COUNTRIES[0].flag} alt="flag" className="w-4 h-auto rounded-sm" />
                            <span className="font-medium">{COUNTRIES[0].name}</span>
                            <ChevronDown size={12} className={`transition-transform ${showCountry ? 'rotate-180' : ''}`} />
                            {showCountry && (
                                <div className="absolute top-full right-0 mt-1 w-40 bg-white shadow-2xl border rounded-md py-2 z-50">
                                    {COUNTRIES.map((c) => (
                                        <div key={c.code} className="px-3 py-2 hover:bg-gray-100 flex items-center gap-3 transition-colors">
                                            <img src={c.flag} alt={c.name} className="w-4 h-auto" />
                                            <span className="text-gray-700">{c.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Currency Dropdown */}
                        <div className="relative cursor-pointer flex items-center gap-1.5 group py-1"
                            onMouseEnter={() => setShowCurrency(true)} onMouseLeave={() => setShowCurrency(false)}>
                            <span className="font-bold text-blue-600">{CURRENCIES[0].symbol}</span>
                            <span className="font-medium">{CURRENCIES[0].code}</span>
                            <ChevronDown size={12} className={`transition-transform ${showCurrency ? 'rotate-180' : ''}`} />
                            {showCurrency && (
                                <div className="absolute top-full right-0 mt-1 w-28 bg-white shadow-2xl border rounded-md py-2 z-50">
                                    {CURRENCIES.map((curr) => (
                                        <div key={curr.code} className="px-4 py-2 hover:bg-gray-100 font-medium text-gray-700">
                                            {curr.symbol} {curr.code}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* SECTOR 2: Logo & Search */}
                <div className="flex items-center justify-between px-4 lg:px-6 py-4 bg-white border-b">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-1" onClick={() => setMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <Link to="/" className="flex items-center gap-2 text-xl lg:text-2xl font-black italic tracking-tighter shrink-0">
                            <img src={logo} alt="logo" className='h-8' />
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex flex-1 max-w-2xl mx-12">
                        <div className="flex items-center w-full bg-gray-100 rounded-lg border border-transparent focus-within:border-[#434377] focus-within:bg-white transition-all overflow-hidden group">
                            <div className="relative h-full flex items-center px-4 border-r border-gray-300">
                                <select className="bg-transparent text-[11px] font-bold uppercase outline-none cursor-pointer pr-4 appearance-none text-gray-700 focus:text-blue-600">
                                    {CATEGORIES.map(cat => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
                                </select>
                                <ChevronDown size={12} className="absolute right-1 pointer-events-none text-gray-500" />
                            </div>
                            <input type="text" placeholder="Search products, brands..." className="flex-1 bg-transparent py-2.5 px-4 outline-none text-sm text-black" />
                            <button className="px-5 py-2.5 text-gray-500 hover:text-[#434377]">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-4 lg:gap-6 shrink-0">
                        <Link to="/profile" className="flex flex-col items-center group">
                            <User size={22} className="group-hover:text-[#434377]" />
                            <span className="hidden lg:block text-[9px] font-bold uppercase mt-1">Account</span>
                        </Link>

                        {/* Cart Button with Dynamic Badge */}
                        <button
                            onClick={() => setCartOpen(true)} // This will now work!
                            className="relative flex flex-col items-center group cursor-pointer"
                        >
                            <ShoppingCart size={22} className="group-hover:text-[#434377]" />
                            <span className="hidden lg:block text-[9px] font-bold uppercase mt-1">Bag</span>
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center ring-2 ring-white animate-in zoom-in duration-300">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* SECTOR 3: Desktop Nav Links */}
                <div className="hidden lg:flex items-center justify-between px-6 py-0 text-white bg-[#434377]">
                    <div className="flex items-center py-3">
                        <Phone size={18} className="mr-3" />
                        <span className="text-sm font-medium tracking-tight">1234567890</span>
                    </div>

                    <div className="flex gap-8 h-full self-stretch">
                        {NAV_LINKS.map((item) => {
                            const hasDropdown = !!MENU_DATA[item];
                            return (
                                <div key={item} className="relative flex items-center h-full group"
                                    onMouseEnter={() => hasDropdown && setActiveDropdown(item)} onMouseLeave={() => setActiveDropdown(null)}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[12px] font-bold py-4 hover:text-orange-300 transition-colors tracking-widest capitalize flex items-center gap-1.5">
                                        {item}
                                        {hasDropdown && <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''}`} />}
                                    </Link>
                                    {hasDropdown && activeDropdown === item && (
                                        <div className="absolute top-full left-0 w-48 bg-white text-black shadow-2xl border-t-2 border-orange-400 rounded-b-md py-2 z-[110]">
                                            {MENU_DATA[item].map((subItem) => (
                                                <Link key={subItem.label} to={subItem.path} className="block px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-gray-50 hover:text-[#434377] border-b border-gray-50 last:border-none">
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-5 py-3">
                        {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                            <a key={idx} href="#" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all"><Icon size={18} /></a>
                        ))}
                    </div>
                </div>

                {/* MOBILE SIDEBAR OVERLAY */}
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[200] lg:hidden">
                        <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
                        <div className="fixed inset-y-0 left-0 w-[280px] bg-white shadow-xl animate-in slide-in-from-left duration-300 flex flex-col">
                            <div className="flex items-center justify-between p-4 border-b">
                                <span className="font-bold text-[#434377]">MENU</span>
                                <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {NAV_LINKS.map((item) => (
                                    <div key={item}>
                                        <Link to={`/${item.toLowerCase()}`} className="text-lg font-bold text-gray-800 block border-b pb-2 uppercase text-xs tracking-widest" onClick={() => setMobileMenuOpen(false)}>{item}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <CartDrawer
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
                cartItems={cartItems}
                onUpdateQty={onUpdateQty}
                onRemoveItem={onRemoveItem}
            />
        </>
    );
};

export default Navbar; 