import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

export default function Skills({ data, updateData }) {
    const [newSkill, setNewSkill] = useState('');

    const addSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
            updateData('skills', [...data.skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        updateData('skills', data.skills.filter(skill => skill !== skillToRemove));
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Habilidades e Competências</h2>
                <p className="text-gray-500">Adicione suas principais habilidades técnicas e interpessoais.</p>
            </div>

            <form onSubmit={addSkill} className="flex gap-2">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Ex: Microsoft Excel, Liderança, Inglês..."
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-brand-lilac text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center gap-2"
                >
                    <Plus size={20} />
                    Adicionar
                </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-4">
                {data.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-brand-lilac/10 text-brand-lilac rounded-full text-sm font-medium border border-brand-lilac/20"
                    >
                        {skill}
                        <button
                            onClick={() => removeSkill(skill)}
                            className="hover:text-red-500 transition-colors ml-1"
                        >
                            <X size={14} />
                        </button>
                    </span>
                ))}
                {data.skills.length === 0 && (
                    <p className="text-gray-400 text-sm italic w-full text-center py-4">
                        Nenhuma habilidade adicionada ainda.
                    </p>
                )}
            </div>
        </div>
    );
}
