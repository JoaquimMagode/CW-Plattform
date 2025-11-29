import Layout from '../components/Layout';
import StepWizard from '../components/StepWizard';
import Image from 'next/image';
import { CheckCircle, Star, FileText, Download } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lilac/10 text-brand-lilac rounded-full text-sm font-medium mb-4">
          <Star size={16} className="fill-brand-lilac" />
          O Criador de CV #1 em Moçambique
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Crie um Currículo que <br />
          <span className="text-brand-lilac">Conquista Empregos</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Destaque-se no mercado de trabalho moçambicano com modelos profissionais,
          design moderno e formatação automática. Rápido, fácil e gratuito.
        </p>

        <div className="flex justify-center gap-8 pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            Modelos Profissionais
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            Formatado para Moçambique
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            Download em PDF
          </div>
        </div>
      </div>

      {/* Template Preview Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Escolha seu Modelo Ideal</h2>
          <p className="text-gray-500">Comece escolhendo um dos nossos templates profissionais.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto px-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="relative aspect-[210/297] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
              <Image
                src={`/templates/template${num}.png`}
                alt={`Modelo ${num}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Main App Section */}
      <div className="max-w-4xl mx-auto" id="app">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 bg-brand-lilac text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Comece a Criar Agora</h2>
            <p className="opacity-90">Preencha seus dados abaixo e veja a mágica acontecer.</p>
          </div>
          <div className="p-4 bg-gray-50">
            <StepWizard />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20 mb-10 px-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-brand-lilac/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-lilac">
            <FileText size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Fácil de Preencher</h3>
          <p className="text-gray-500 text-sm">Nosso assistente passo-a-passo guia você em cada seção do currículo.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-brand-lilac/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-lilac">
            <Star size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Design Premium</h3>
          <p className="text-gray-500 text-sm">Layouts modernos e limpos que chamam a atenção dos recrutadores.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-12 h-12 bg-brand-lilac/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-lilac">
            <Download size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Download Instantâneo</h3>
          <p className="text-gray-500 text-sm">Baixe seu CV em PDF pronto para enviar, sem marcas d'água.</p>
        </div>
      </div>
    </Layout>
  );
}
