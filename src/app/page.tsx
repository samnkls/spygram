// src/app/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  User,
  Users,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Instagram,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function InstagramLandingPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [username, setUsername] = useState("");

  return (
    // Fundo principal agora é preto. Removido o gradiente claro.
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Ícone do logo agora em gradiente azul */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            {/* Texto do logo agora em gradiente azul */}
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              InstaReveal
            </span>
          </div>
          {/* Badge Online mantém a cor verde para status */}
          <Badge
            variant="secondary"
            className="bg-green-900 text-green-300 border-green-700"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Online
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge "Resultados em 1 minuto" agora em gradiente azul */}
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
            <Clock className="w-3 h-3 mr-1" />
            Resultados em 1 minuto
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {/* Texto principal com gradiente azul */}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 bg-clip-text text-transparent">
              Descubra em 1 minuto
            </span>
            <br />
            {/* Texto ajustado para branco em fundo escuro */}
            <span className="text-white">Todas as informações que</span>
            <br />
            {/* Segundo texto principal com gradiente azul */}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              o Instagram esconde de você
            </span>
          </h1>

          {/* Texto ajustado para cinza claro em fundo escuro */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Análise completa de perfis, estatísticas ocultas e insights que você
            nunca viu antes
          </p>

          {/* Stats - Cores de números agora em azul */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">
                50K+
              </div>
              <div className="text-sm text-gray-300">Análises</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">
                99%
              </div>
              <div className="text-sm text-gray-300">Precisão</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">
                1min
              </div>
              <div className="text-sm text-gray-300">Resultado</div>
            </div>
          </div>
        </div>

        {/* Main Question */}
        <div className="max-w-2xl mx-auto mb-8">
          {/* Título ajustado para branco */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            Qual perfil você quer investigar?
          </h2>

          {/* Options (Cards) */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                selectedOption === "own"
                  ? // Borda do card selecionado em azul
                    "border-blue-600 bg-gray-900 shadow-lg"
                  : // Borda e hover do card não selecionado em azul
                    "border-gray-700 hover:border-blue-500 bg-gray-900"
              }`}
              onClick={() => setSelectedOption("own")}
            >
              <CardContent className="p-6 text-center">
                {/* Fundo do ícone do card agora em gradiente azul */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                {/* Textos ajustados para branco/cinza claro */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Meu próprio perfil
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Descubra estatísticas ocultas do seu perfil e como melhorar
                  seu alcance
                </p>
                {/* Badges de recursos mantêm o estilo secundário do Shadcn UI, que deve se adaptar */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Alcance real
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Melhores horários
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Análise de hashtags
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                selectedOption === "others"
                  ? // Borda do card selecionado em azul
                    "border-blue-600 bg-gray-900 shadow-lg"
                  : // Borda e hover do card não selecionado em azul
                    "border-gray-700 hover:border-blue-500 bg-gray-900"
              }`}
              onClick={() => setSelectedOption("others")}
            >
              <CardContent className="p-6 text-center">
                {/* Fundo do ícone do card agora em gradiente azul */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                {/* Textos ajustados para branco/cinza claro */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Perfil de outras pessoas
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Analise qualquer perfil público e descubra informações
                  detalhadas
                </p>
                {/* Badges de recursos mantêm o estilo secundário do Shadcn UI, que deve se adaptar */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="text-xs">
                    Engajamento real
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Audiência
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Crescimento
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Username Input */}
          {selectedOption && (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
              <div className="relative">
                {/* Cor do ícone ajustada para ser visível no escuro */}
                <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Digite o @ do perfil (ex: @username)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // Input ajustado para tema escuro e foco azul
                  className="pl-12 h-14 text-lg border-2 bg-gray-800 text-white focus:border-blue-500 rounded-xl placeholder:text-gray-500"
                />
              </div>

              {/* Botão de análise agora em gradiente azul */}
              <Button
                size="lg"
                className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!username.trim()}
              >
                <Search className="w-5 h-5 mr-2" />
                Analisar Perfil Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>

        {/* Features (Cards) */}
        <div className="max-w-4xl mx-auto mt-16">
          {/* Título ajustado para branco */}
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            O que você vai descobrir
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                {/* Fundo do ícone do card agora em gradiente azul */}
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">
                  Estatísticas Reais
                </h4>
                <p className="text-gray-300 text-sm">
                  Engajamento verdadeiro, alcance real e métricas que o
                  Instagram não mostra
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                {/* Fundo do ícone do card agora em gradiente azul */}
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">
                  Análise Instantânea
                </h4>
                <p className="text-gray-300 text-sm">
                  Resultados completos em menos de 1 minuto, sem complicação
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                {/* Fundo do ícone do card agora em gradiente azul */}
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-white">100% Seguro</h4>
                <p className="text-gray-300 text-sm">
                  Análise externa, sem login necessário e totalmente anônima
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* Rodapé ajustado para tema escuro */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 InstaReveal. Ferramenta de análise externa do Instagram.</p>
          <p className="mt-2">Não afiliado ao Instagram ou Meta.</p>
        </div>
      </footer>
    </div>
  );
}
