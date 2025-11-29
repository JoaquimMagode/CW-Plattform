import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function Experience({ data, updateData }) {
    const addExperience = () => {
        updateData('experience', [
            ...data.experience,
            { id: Date.now(), position: '', company: '', startDate: '', endDate: '', description: '' }
        ]);
    };

    const removeExperience = (id) => {
        updateData('experience', data.experience.filter(exp => exp.id !== id));
    };

    const handleChange = (id, field, value) => {
        const newExperience = data.experience.map(exp =>
            exp.id === id ? { ...exp, [field]: value } : exp
        );
        updateData('experience', newExperience);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Experiência Profissional</h2>
                <p className="text-gray-500">Adicione suas experiências de trabalho mais relevantes, da mais recente para a mais antiga.</p>
            </div>

            {data.experience.map((exp, index) => (
                <div key={exp.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative group">
                    <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remover"
                    >
                        <Trash2 size={18} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Cargo</label>
                            <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                                placeholder="Ex: Gerente de Vendas"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Empresa</label>
                            <input
                                type="text"
                                value={exp.company}
                                onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                                placeholder="Ex: Empresa XYZ"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Data de Início</label>
                            <input
                                type="text"
                                value={exp.startDate}
                                onChange={(e) => handleChange(exp.id, 'startDate', e.target.value)}
                                placeholder="Ex: Jan 2020"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Data de Término</label>
                            <input
                                type="text"
                                value={exp.endDate}
                                onChange={(e) => handleChange(exp.id, 'endDate', e.target.value)}
                                placeholder="Ex: Atual ou Dez 2022"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Descrição</label>
                        <textarea
                            value={exp.description}
                            onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                            placeholder="Descreva suas principais responsabilidades e conquistas..."
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none resize-none"
                        />
                    </div>
                </div>
            ))}

            <button
                onClick={addExperience}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac transition-all flex items-center justify-center gap-2 font-medium"
            >
                <Plus size={20} />
                Adicionar Experiência
            </button>
        </div>
    );
}
