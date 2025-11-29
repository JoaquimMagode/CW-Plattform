import React from 'react';

export default function Summary({ data, updateData }) {
    const handleChange = (e) => {
        updateData('summary', e.target.value);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Resumo Profissional</h2>
                <p className="text-gray-500">Escreva um breve resumo sobre sua carreira e objetivos. Isso ajuda a destacar seu perfil.</p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Resumo</label>
                <textarea
                    value={data.summary}
                    onChange={handleChange}
                    placeholder="Ex: Profissional motivado com 5 anos de experiência em gestão de projetos..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all resize-none"
                />
                <p className="text-xs text-gray-400 text-right">Recomendado: 2-3 frases curtas.</p>
            </div>
        </div>
    );
}
