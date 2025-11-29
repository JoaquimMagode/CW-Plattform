import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const templates = [
    { id: 'modern', name: 'Moderno', image: '/templates/template1.png' },
    { id: 'classic', name: 'Clássico', image: '/templates/template2.png' },
    { id: 'minimal', name: 'Minimalista', image: '/templates/template3.png' },
    { id: 'bold', name: 'Arrojado', image: '/templates/template4.png' },
    { id: 'professional', name: 'Profissional', image: '/templates/template5.png' },
];

export default function TemplateSelector({ selectedTemplate, onSelect }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template) => (
                <div
                    key={template.id}
                    onClick={() => onSelect(template.id)}
                    className={`relative group cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300
            ${selectedTemplate === template.id
                            ? 'border-brand-lilac ring-4 ring-brand-lilac/20 scale-105'
                            : 'border-gray-200 hover:border-brand-lilac/50 hover:shadow-lg'}`}
                >
                    <div className="relative aspect-[210/297] w-full bg-gray-100">
                        <Image
                            src={template.image}
                            alt={template.name}
                            fill
                            className="object-cover"
                        />
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-brand-lilac/10 transition-opacity duration-300 
               ${selectedTemplate === template.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        />
                    </div>

                    <div className="p-3 bg-white text-center border-t border-gray-100">
                        <span className={`font-medium ${selectedTemplate === template.id ? 'text-brand-lilac' : 'text-gray-700'}`}>
                            {template.name}
                        </span>
                    </div>

                    {selectedTemplate === template.id && (
                        <div className="absolute top-3 right-3 bg-brand-lilac text-white p-1.5 rounded-full shadow-md animate-in zoom-in duration-300">
                            <Check size={16} strokeWidth={3} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
