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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              InstaReveal
            </span>
          </div>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 border-green-200"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Online
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            <Clock className="w-3 h-3 mr-1" />
            Resultados em 1 minuto
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Descubra em 1 minuto
            </span>
            <br />
            <span className="text-gray-900">Todas as informações que</span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              o Instagram esconde de você
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Análise completa de perfis, estatísticas ocultas e insights que você
            nunca viu antes
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">
                50K+
              </div>
              <div className="text-sm text-gray-600">Análises</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-600">
                99%
              </div>
              <div className="text-sm text-gray-600">Precisão</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600">
                1min
              </div>
              <div className="text-sm text-gray-600">Resultado</div>
            </div>
          </div>
        </div>

        {/* Main Question */}
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Qual perfil você quer investigar?
          </h2>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                selectedOption === "own"
                  ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg"
                  : "border-gray-200 hover:border-purple-300"
              }`}
              onClick={() => setSelectedOption("own")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Meu próprio perfil
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Descubra estatísticas ocultas do seu perfil e como melhorar
                  seu alcance
                </p>
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
                  ? "border-pink-500 bg-gradient-to-br from-pink-50 to-orange-50 shadow-lg"
                  : "border-gray-200 hover:border-pink-300"
              }`}
              onClick={() => setSelectedOption("others")}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Perfil de outras pessoas
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Analise qualquer perfil público e descubra informações
                  detalhadas
                </p>
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
                <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Digite o @ do perfil (ex: @username)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 focus:border-purple-500 rounded-xl"
                />
              </div>

              <Button
                size="lg"
                className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!username.trim()}
              >
                <Search className="w-5 h-5 mr-2" />
                Analisar Perfil Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            O que você vai descobrir
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Estatísticas Reais</h4>
                <p className="text-gray-600 text-sm">
                  Engajamento verdadeiro, alcance real e métricas que o
                  Instagram não mostra
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Análise Instantânea</h4>
                <p className="text-gray-600 text-sm">
                  Resultados completos em menos de 1 minuto, sem complicação
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">100% Seguro</h4>
                <p className="text-gray-600 text-sm">
                  Análise externa, sem login necessário e totalmente anônima
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200">
        <div className="text-center text-gray-600 text-sm">
          <p>© 2024 InstaReveal. Ferramenta de análise externa do Instagram.</p>
          <p className="mt-2">Não afiliado ao Instagram ou Meta.</p>
        </div>
      </footer>
    </div>
  );
}
