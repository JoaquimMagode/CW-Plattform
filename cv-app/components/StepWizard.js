'use client';

import React, { useState } from 'react';
import PersonalInfo from './steps/PersonalInfo';
import Experience from './steps/Experience';
import Education from './steps/Education';
import Skills from './steps/Skills';
import Summary from './steps/Summary';
import TemplateSelector from './TemplateSelector';
import { generatePDF } from '../utils/generatePDF';
import { ChevronRight, ChevronLeft, Download, CheckCircle } from 'lucide-react';

const steps = [
    { id: 'template', title: 'Escolha o Modelo', component: TemplateSelector },
    { id: 'personal', title: 'Dados Pessoais', component: PersonalInfo },
    { id: 'summary', title: 'Resumo', component: Summary },
    { id: 'experience', title: 'Experiência', component: Experience },
    { id: 'education', title: 'Educação', component: Education },
    { id: 'skills', title: 'Habilidades', component: Skills },
];

export default function StepWizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState({
        personal: { fullName: '', email: '', phone: '', location: '', title: '', birthDate: '', country: '' },
        summary: '',
        experience: [],
        education: [],
        skills: [],
        templateId: 'modern'
    });

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const updateData = (section, value) => {
        setData(prev => ({ ...prev, [section]: value }));
    };

    const handleTemplateSelect = (templateId) => {
        updateData('templateId', templateId);
    };

    const CurrentComponent = steps[currentStep].component;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            {/* Progress Bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-brand-lilac">
                        Passo {currentStep + 1} de {steps.length}
                    </span>
                    <span className="text-sm text-gray-500">{steps[currentStep].title}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-brand-lilac h-2 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[400px]">
                {steps[currentStep].id === 'template' ? (
                    <CurrentComponent
                        selectedTemplate={data.templateId}
                        onSelect={handleTemplateSelect}
                    />
                ) : (
                    <CurrentComponent
                        data={data}
                        updateData={updateData}
                    />
                )}
            </div>

            {/* Navigation */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${currentStep === 0
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-200'}`}
                >
                    <ChevronLeft size={16} />
                    Voltar
                </button>

                {currentStep === steps.length - 1 ? (
                    <button
                        onClick={() => generatePDF(data)}
                        className="flex items-center gap-2 px-6 py-2 bg-brand-lilac text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-md shadow-brand-lilac/20"
                    >
                        <Download size={16} />
                        Baixar CV
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-2 bg-brand-lilac text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-md shadow-brand-lilac/20"
                    >
                        Próximo
                        <ChevronRight size={16} />
                    </button>
                )}
            </div>
        </div>
    );
}
