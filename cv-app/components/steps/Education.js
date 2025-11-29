import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function Education({ data, updateData }) {
    const addEducation = () => {
        updateData('education', [
            ...data.education,
            { id: Date.now(), school: '', degree: '', startDate: '', endDate: '' }
        ]);
    };

    const removeEducation = (id) => {
        updateData('education', data.education.filter(edu => edu.id !== id));
    };

    const handleChange = (id, field, value) => {
        const newEducation = data.education.map(edu =>
            edu.id === id ? { ...edu, [field]: value } : edu
        );
        updateData('education', newEducation);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Formação Acadêmica</h2>
                <p className="text-gray-500">Liste sua formação, cursos e certificações relevantes.</p>
            </div>

            {data.education.map((edu, index) => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 relative group">
                    <button
                        onClick={() => removeEducation(edu.id)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remover"
                    >
                        <Trash2 size={18} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Instituição de Ensino</label>
                            <input
                                type="text"
                                value={edu.school}
                                onChange={(e) => handleChange(edu.id, 'school', e.target.value)}
                                placeholder="Ex: Universidade Eduardo Mondlane"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Grau / Curso</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                                placeholder="Ex: Licenciatura em Informática"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Data de Início</label>
                            <input
                                type="text"
                                value={edu.startDate}
                                onChange={(e) => handleChange(edu.id, 'startDate', e.target.value)}
                                placeholder="Ex: 2018"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Data de Término</label>
                            <input
                                type="text"
                                value={edu.endDate}
                                onChange={(e) => handleChange(edu.id, 'endDate', e.target.value)}
                                placeholder="Ex: 2022"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac outline-none"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={addEducation}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac transition-all flex items-center justify-center gap-2 font-medium"
            >
                <Plus size={20} />
                Adicionar Formação
            </button>
        </div>
    );
}
