import React from 'react';

export default function PersonalInfo({ data, updateData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateData('personal', { ...data.personal, [name]: value });
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Vamos começar com o básico</h2>
                <p className="text-gray-500">Preencha seus dados de contato para que os recrutadores possam te encontrar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                    <input
                        type="text"
                        name="fullName"
                        value={data.personal.fullName}
                        onChange={handleChange}
                        placeholder="Ex: João Silva"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Título Profissional</label>
                    <input
                        type="text"
                        name="title"
                        value={data.personal.title}
                        onChange={handleChange}
                        placeholder="Ex: Desenvolvedor Web"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.personal.email}
                        onChange={handleChange}
                        placeholder="joao@exemplo.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Telefone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={data.personal.phone}
                        onChange={handleChange}
                        placeholder="+258 84 123 4567"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Localização (Cidade, Província)</label>
                    <input
                        type="text"
                        name="location"
                        value={data.personal.location}
                        onChange={handleChange}
                        placeholder="Maputo, Moçambique"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Data de Nascimento</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={data.personal.birthDate || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">País</label>
                    <input
                        type="text"
                        name="country"
                        value={data.personal.country || ''}
                        onChange={handleChange}
                        placeholder="Moçambique"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-lilac focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>
        </div>
    );
}
