'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function Header() {
    const { language, setLanguage } = useLanguage();

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-xl text-gray-900">CV Builder Construtor</span>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as 'en' | 'pt')}
                        className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer hover:text-brand-lilac transition-colors"
                    >
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                    </select>
                </div>
            </div>
        </header>
    );
}
