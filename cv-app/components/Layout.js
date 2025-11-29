import React from 'react';
import Image from 'next/image';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-brand-grey/10 font-sans">
            <header className="bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative h-8 w-32">
                            <Image
                                src="/logo.png"
                                alt="Kernup Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-sm text-gray-500 border-l pl-2 ml-2 border-gray-300">
                            CV Builder Moçambique
                        </span>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
                {children}
            </main>

            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Kernup Group. Todos os direitos reservados.</p>
                    <p className="mt-1">Feito com ❤️ para Moçambique</p>
                </div>
            </footer>
        </div>
    );
}
