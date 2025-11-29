'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { generatePDF } from '@/lib/utils/generatePDF';
import { generateSimplePDF } from '@/lib/utils/generateSimplePDF';
import TemplateSelector from '../steps/TemplateSelector';
import PersonalInfo from '../steps/PersonalInfo';
import Summary from '../steps/Summary';
import Experience from '../steps/Experience';
import Education from '../steps/Education';
import Skills from '../steps/Skills';
import Languages from '../steps/Languages';
import Certifications from '../steps/Certifications';

const steps = [
    { id: 'template', title: 'Template' },
    { id: 'personal', title: 'Personal' },
    { id: 'summary', title: 'Summary' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'languages', title: 'Languages' },
    { id: 'certifications', title: 'Certifications' },
];

interface StepWizardProps {
    onBack?: () => void;
}

export default function StepWizard({ onBack }: StepWizardProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const { cvData } = useCVContext();
    const { t } = useLanguage();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        } else if (onBack) {
            onBack();
        }
    };

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            await generatePDF(cvData, 'en');
        } catch (error) {
            console.error('Failed to generate PDF:', error);
            // Fallback to simple PDF
            generateSimplePDF(cvData);
        } finally {
            setIsGenerating(false);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0: return <TemplateSelector />;
            case 1: return <PersonalInfo />;
            case 2: return <Summary />;
            case 3: return <Experience />;
            case 4: return <Education />;
            case 5: return <Skills />;
            case 6: return <Languages />;
            case 7: return <Certifications />;
            default: return null;
        }
    };

    return (
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4 md:p-8">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                    <span>{t.wizard.stepOf} {currentStep + 1} / {steps.length}</span>
                    <span className="text-brand-lilac">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-lilac transition-all duration-300 ease-out"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8 animate-fade-in">
                {renderStep()}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 font-medium hover:text-gray-900 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                    {t.wizard.back}
                </button>

                {currentStep === steps.length - 1 ? (
                    <button
                        onClick={handleDownload}
                        disabled={isGenerating}
                        className="flex items-center gap-2 px-8 py-3 bg-brand-lilac text-white rounded-xl font-semibold hover:bg-brand-lilac-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-lilac/25"
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                {t.wizard.generating}
                            </>
                        ) : (
                            <>
                                <Download className="w-5 h-5" />
                                {t.wizard.download}
                            </>
                        )}
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
                    >
                        {t.wizard.next}
                        <ChevronRight className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
}
