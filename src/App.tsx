import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Gift, Clock, Users, TrendingUp, CheckCircle, AlertTriangle, Play } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Otimização: Carregar scripts Wistia apenas quando necessário
    const loadWistiaScript = () => {
      if (!window.Wistia) {
        const script = document.createElement("script");
        script.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    };

    // Carregar com delay para não bloquear renderização inicial
    const timer = setTimeout(loadWistiaScript, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Memoizar dados estáticos para otimização
  const beforeAfterImages = useMemo(() => [
    {
      src: 'https://i.postimg.cc/W1jHs5bR/CONVERTER-1.webp',
      alt: 'Antes e Depois 1',
      result: 'Perdeu 7kg em 2 semanas'
    },
    {
      src: 'https://i.postimg.cc/jdy1VpTQ/CONVERTER-2.webp',
      alt: 'Antes e Depois 2',
      result: 'Perdeu 5kg em 10 dias'
    },
    {
      src: 'https://i.postimg.cc/vmZ2VDV3/CONVERTER-3.webp',
      alt: 'Antes e Depois 3',
      result: 'Perdeu 6kg em 3 semanas'
    },
    {
      src: 'https://i.postimg.cc/YC3y0Qhv/CONVERTER-4.webp',
      alt: 'Antes e Depois 4',
      result: 'Perdeu 4kg em 1 semana'
    }
  ], []);

  const testimonials = useMemo(() => [
    {
      image: 'https://i.postimg.cc/CKrPHYCY/DEPOIMENTO-1.webp',
      text: 'Emagreci 6,4kg em 2 semanas! Nunca imaginei que o café seria meu maior aliado.',
      rating: 5
    },
    {
      image: 'https://i.postimg.cc/8cMZS62P/DEPOIMENTO-2.webp',
      text: 'Eu acordei magra, porra. Esse protocolo virou minha rotina.',
      rating: 5
    },
    {
      image: 'https://i.postimg.cc/j5W8M9vf/DEPOIMENTO-3.webp',
      text: 'Sem fome, sem ansiedade. Resultado real e rápido.',
      rating: 5
    }
  ], []);

  // Otimizar funções com useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  }, [beforeAfterImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  }, [beforeAfterImages.length]);

  const scrollToOffer = useCallback(() => {
    const offerSection = document.getElementById('oferta-principal');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEÇÃO 1 - HERO SECTION COM VSL */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        
        <div className={`container mx-auto px-4 py-20 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">DESCOBERTA NATURAL</span>
              <span className="block text-orange-500">ENGANA O CORPO</span>
              <span className="block text-white">E DERRETE GORDURA</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Veja Como Mulheres Estão Perdendo Até <span className="text-orange-500">5Kg por Semana </span> 
              Com Apenas <span className="text-yellow-500">1 Copo de Café Preto por Dia</span>
            </p>
          </div>

          {/* VSL WISTIA */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl">
                <div className="wistia_responsive_padding" style={{paddingTop: '56.25%'}}>
                  <div className="wistia_responsive_wrapper">
                    <div className="wistia_embed wistia_async_gc9ywrd50y videoFoam=true" style={{height: '100%', width: '100%'}}>&nbsp;</div>
                  </div>
                </div>
                <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  🔴 AO VIVO
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              🔥 QUERO DESCOBRIR O PROTOCOLO AGORA 🔥
            </button>
            <p className="text-sm text-gray-400 mt-4">
              <Play className="w-4 h-4 inline mr-1" />
              Assista ao vídeo completo acima
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - PARE DE CAIR NAS MESMAS ARMADILHAS */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">
              <span className="text-white">PARE DE CAIR NAS MESMAS</span>
              <br />
              <span className="text-red-500">ARMADILHAS</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🥗</div>
                <h3 className="text-2xl font-bold text-red-500 mb-4">Dietas Genéricas</h3>
                <p className="text-gray-300">Funcionam por 2 semanas, depois você volta ao peso anterior</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🍵</div>
                <h3 className="text-2xl font-bold text-red-500 mb-4">Chás Milagrosos</h3>
                <p className="text-gray-300">Promessas vazias que só drenam sua carteira</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">💊</div>
                <h3 className="text-2xl font-bold text-red-500 mb-4">Jejuns Aleatórios</h3>
                <p className="text-gray-300">Sem propósito e ciência, tudo é temporário</p>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-red-500 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <p className="text-white text-xl md:text-2xl font-bold">
                Sem propósito e ciência, qualquer método é apenas mais uma tentativa frustrada.
              </p>
            </div>
            
            <a 
              href="https://go.disruptybr.com.br/q1yutawwn5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              ☕ QUERO UM MÉTODO REAL
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - CONHEÇA O JEJUM COM CAFÉ PRETO */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">
              <span className="text-white">CONHEÇA O</span>
              <br />
              <span className="text-orange-500">JEJUM COM CAFÉ PRETO</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="text-6xl mb-8">☕</div>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white">
                Jejum com Café Preto é um protocolo <span className="text-orange-500 font-bold">simples</span>, 
                <span className="text-yellow-500 font-bold"> ancestral</span> e 
                <span className="text-green-500 font-bold"> validado pela ciência</span>.
              </p>
              
              <p className="text-2xl md:text-3xl font-black text-white mb-8">
                Nada de modinha.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Você acorda, toma um café puro e deixa o corpo e a mente entrarem em modo de cura.
              </p>
            </div>
            
            <a 
              href="https://go.disruptybr.com.br/q1yutawwn5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              ☕ QUERO CONHECER O MÉTODO
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - CIÊNCIA + FÉ = RESULTADO */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 leading-tight">
              <span className="text-blue-500">CIÊNCIA</span>
              <span className="text-yellow-500"> + FÉ</span>
              <span className="text-green-500"> = RESULTADO</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Bloco Científico */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-3xl font-black text-blue-500 mb-8 text-center">CIENTÍFICO</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <h4 className="text-xl font-bold text-blue-500">Lipólise</h4>
                      <p className="text-gray-300">Queima gordura sem atacar músculos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="text-xl font-bold text-blue-500">Aumento de Dopamina</h4>
                      <p className="text-gray-300">Mais foco e energia natural</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🧬</span>
                    <div>
                      <h4 className="text-xl font-bold text-blue-500">Autofagia</h4>
                      <p className="text-gray-300">Limpeza celular profunda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="text-xl font-bold text-blue-500">Estabilidade de Insulina</h4>
                      <p className="text-gray-300">Sem compulsão alimentar</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bloco Espiritual */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-3xl font-black text-yellow-500 mb-8 text-center">ESPIRITUAL</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📖</span>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-500">Jejum como Prática Bíblica</h4>
                      <p className="text-gray-300">Tradição milenar de purificação</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">🙏</span>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-500">Conexão Profunda com Deus</h4>
                      <p className="text-gray-300">Fortalecimento da fé e propósito</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-500">Renovação Interior</h4>
                      <p className="text-gray-300">Transformação que vem de dentro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">💪</span>
                    <div>
                      <h4 className="text-xl font-bold text-yellow-500">Disciplina Espiritual</h4>
                      <p className="text-gray-300">Fortalecimento da vontade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://go.disruptybr.com.br/q1yutawwn5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                ☕ QUERO ALIAR CIÊNCIA E FÉ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - CONHEÇA A CAFÉ GPT */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 leading-tight">
              <span className="text-white">CONHEÇA A</span>
              <br />
              <span className="text-purple-500">CAFÉ GPT</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Descrição e Benefícios */}
              <div>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  A IA que acompanha você 24h, enviando versículos, dicas alimentares, motivação e monitoramento do progresso.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Motivação diária personalizada",
                    "Versículo e reflexão matinal",
                    "Ajustes personalizados no protocolo",
                    "Check-ins emocionais",
                    "Receitas leves e saudáveis",
                    "Lembretes de quebra de jejum"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-purple-500 text-xl">🔹</span>
                      <p className="text-gray-300 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Exemplo de Conversa */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-purple-500 mb-6 text-center">Exemplo de Conversa</h3>
                
                <div className="space-y-4">
                  <div className="bg-purple-600 rounded-2xl p-4 ml-8">
                    <p className="text-white font-semibold mb-1">Café GPT:</p>
                    <p className="text-white">"Bom dia! Como você está se sentindo hoje?"</p>
                  </div>
                  
                  <div className="bg-gray-600 rounded-2xl p-4 mr-8">
                    <p className="text-white font-semibold mb-1">Você:</p>
                    <p className="text-white">"Meio desanimada..."</p>
                  </div>
                  
                  <div className="bg-purple-600 rounded-2xl p-4 ml-8">
                    <p className="text-white font-semibold mb-1">Café GPT:</p>
                    <p className="text-white">"Entendo. Lembre-se: 'Posso todas as coisas naquele que me fortalece' (Filipenses 4:13). Que tal começarmos com seu café e uma oração? ☕🙏"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://go.disruptybr.com.br/q1yutawwn5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                ☕ QUERO O SUPORTE DA CAFÉ GPT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - COMO FUNCIONA O PROTOCOLO */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 leading-tight">
              <span className="text-white">COMO FUNCIONA O</span>
              <br />
              <span className="text-green-500">PROTOCOLO</span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-black text-2xl mx-auto mb-4">
                  1
                </div>
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-xl font-bold text-white mb-3">Café em Jejum</h3>
                <p className="text-gray-300">Acorde e tome seu café preto, sem açúcar ou adoçante</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-black text-2xl mx-auto mb-4">
                  2
                </div>
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-white mb-3">Oração Devocional</h3>
                <p className="text-gray-300">Dedique 10 minutos para oração e leitura bíblica</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-black text-2xl mx-auto mb-4">
                  3
                </div>
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-white mb-3">Jejum de 12 a 16h</h3>
                <p className="text-gray-300">Mantenha o jejum pelo período determinado</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-black text-2xl mx-auto mb-4">
                  4
                </div>
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold text-white mb-3">Quebra Leve</h3>
                <p className="text-gray-300">Alimente-se de forma consciente e saudável</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-black text-2xl mx-auto mb-4">
                  5
                </div>
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Mensagem da Café GPT</h3>
                <p className="text-gray-300">Receba orientação personalizada e motivação</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://go.disruptybr.com.br/q1yutawwn5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                ☕ QUERO SEGUIR ESSE RITUAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - VOCÊ RECONHECE ESSES SINAIS? */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight">
              <span className="text-white">VOCÊ RECONHECE ESSES</span>
              <br />
              <span className="text-orange-500">SINAIS?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-left">
                  <span className="text-3xl">😴</span>
                  <p className="text-lg text-gray-300">Cansaço ao acordar, mesmo dormindo 8 horas</p>
                </div>
                
                <div className="flex items-center space-x-4 text-left">
                  <span className="text-3xl">🔍</span>
                  <p className="text-lg text-gray-300">Sensação constante de inchaço</p>
                </div>
                
                <div className="flex items-center space-x-4 text-left">
                  <span className="text-3xl">🧠</span>
                  <p className="text-lg text-gray-300">Perda de foco durante o dia</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-left">
                  <span className="text-3xl">😔</span>
                  <p className="text-lg text-gray-300">Desânimo espiritual</p>
                </div>
                
                <div className="flex items-center space-x-4 text-left">
                  <span className="text-3xl">🍽️</span>
                  <p className="text-lg text-gray-300">Ansiedade alimentar</p>
                </div>
                
                <div className="flex items-center space-x-4 text-left">
                  <span className="text-3xl">💔</span>
                  <p className="text-lg text-gray-300">Baixa autoestima</p>
                </div>
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-white mb-12">
              Se isso é familiar, você não está sozinha.
            </p>
            
            <a 
              href="https://go.disruptybr.com.br/q1yutawwn5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              ☕ QUERO SAIR DESSE CICLO
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - CARROSSEL DE ANTES E DEPOIS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            RESULTADOS <span className="text-orange-500">REAIS</span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {beforeAfterImages.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800 rounded-2xl p-6 text-center">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-auto rounded-xl mb-4 shadow-lg"
                        loading="lazy"
                      />
                      <p className="text-yellow-500 font-bold text-lg">{item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black p-3 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-black p-3 rounded-full hover:bg-orange-600 transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              💪 QUERO ESSES RESULTADOS TAMBÉM 💪
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - DOR DO LEAD */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://i.postimg.cc/C1WcXN6Q/mockup-jejumm-cafe-preto.webp" 
              alt="Mockup do Protocolo"
              className="w-full max-w-2xl mx-auto mb-12 rounded-2xl shadow-2xl"
              loading="lazy"
            />
            
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              VOCÊ JÁ TENTOU <span className="text-orange-500">DE TUDO</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-300">
                Dieta low carb, treino na academia, chá milagroso, shake da moda...
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-300">
                Mas o que ninguém te fala é que o seu corpo <span className="text-red-500 font-bold">SABOTA</span> cada esforço seu.
              </p>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-gray-300">
                É o chamado <span className="text-orange-500 font-bold">"Modo Sobrevivência"</span>: seu metabolismo desacelera, você acumula gordura, e a ansiedade toma conta.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white mb-8">
                O resultado? Você se olha no espelho e não se reconhece mais.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-yellow-500">A SOLUÇÃO:</h3>
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white">
                Um simples hábito pela manhã.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white">
                Apenas 1 xícara de <span className="text-orange-500 font-bold">café preto puro em jejum</span> ativa um protocolo chamado <span className="text-yellow-500 font-bold">lipólise acelerada</span>, fazendo seu corpo buscar energia direto da gordura armazenada.
              </p>
              <p className="text-2xl md:text-3xl font-black text-white">
                É simples. É natural. E <span className="text-orange-500">FUNCIONA PRA CARALHO</span>.
              </p>
            </div>
            
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              ☕ QUERO COMEÇAR COM O CAFÉ PRETO HOJE ☕
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - ESPECIALISTA - INSTITUCIONAL */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagem da Especialista */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="https://i.postimg.cc/CxGdqxgB/expert-jejum-cafe.webp" 
                    alt="Dra. Especialista em Nutrição Funcional"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                    +8 anos de experiência
                  </div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                  CONHEÇA A <span className="text-orange-500">ESPECIALISTA</span>
                </h2>
                
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Olá, me chamo Dra. Amanda Ribeiro. Sou <span className="text-white font-bold">nutricionista clínica funcional</span> com 
                    pós-graduação em <span className="text-orange-500 font-semibold">Modulação Intestinal e Emagrecimento Feminino</span>.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Após anos de atendimento clínico, observei a <span className="text-white font-semibold">dificuldade real</span> das 
                    minhas pacientes em manter constância nas dietas tradicionais.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Foi então que criei o método <span className="text-yellow-500 font-bold">"Jejum com Café Preto"</span> — 
                    aliando ciência, experiência prática e um protocolo acessível para 
                    <span className="text-white font-semibold"> mulheres reais</span>.
                  </p>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border-l-4 border-orange-500">
                    <p className="text-lg leading-relaxed text-white font-medium">
                      "Mulheres que trabalham, cuidam da casa e ainda querem se sentir bem com o próprio corpo. 
                      Não vendo milagres — ofereço um método <span className="text-orange-500">embasado, prático</span> 
                      e que respeita a rotina das brasileiras."
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-orange-500/20 px-4 py-2 rounded-full">
                      <span className="text-orange-500 font-semibold">✓ Nutrição Clínica Funcional</span>
                    </div>
                    <div className="bg-yellow-500/20 px-4 py-2 rounded-full">
                      <span className="text-yellow-500 font-semibold">✓ Especialista em Emagrecimento</span>
                    </div>
                    <div className="bg-green-500/20 px-4 py-2 rounded-full">
                      <span className="text-green-500 font-semibold">✓ +19.500 mulheres atendidas</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button 
                    onClick={scrollToOffer}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
                  >
                    👩‍⚕️ QUERO SEGUIR A ESPECIALISTA 👩‍⚕️
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 - NÚMEROS IMPACTANTES */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 via-black to-yellow-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            NÚMEROS QUE <span className="text-orange-500">IMPRESSIONAM</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">+19.500</h3>
              <p className="text-gray-300">pessoas testaram o protocolo em 2025</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">92%</h3>
              <p className="text-gray-300">relataram perda de peso nos primeiros 7 dias</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">87%</h3>
              <p className="text-gray-300">afirmaram melhora na disposição e no humor</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-white mb-2">9.4</h3>
              <p className="text-gray-300">de satisfação média nas avaliações</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center md:col-span-2 lg:col-span-2">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">☕</span>
                <span className="text-4xl">→</span>
                <span className="text-4xl ml-4">💪</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">1 copo de café</h3>
              <p className="text-gray-300">1 corpo em transformação</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              📊 QUERO FAZER PARTE DESSAS ESTATÍSTICAS 📊
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 - TIRA-DÚVIDAS INTELIGENTE */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            DÚVIDAS <span className="text-orange-500">RÁPIDAS</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Posso tomar com adoçante?",
                answer: "Ideal é puro. Mas stevia natural é ok."
              },
              {
                question: "Preciso treinar?",
                answer: "Não. O foco é o protocolo alimentar."
              },
              {
                question: "Em quanto tempo vejo resultado?",
                answer: "Primeiros 3 dias já mostram resposta."
              },
              {
                question: "Tem contraindicação?",
                answer: "Grávidas, lactantes ou quem toma medicamentos deve consultar médico."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">{item.question}</h3>
                <p className="text-gray-300 text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              ❓ TIREI MINHAS DÚVIDAS, QUERO COMEÇAR ❓
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 12 - FAQ - MOVIDA PARA ANTES DA OFERTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-500/10 via-black to-cyan-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            PERGUNTAS <span className="text-orange-500">FREQUENTES</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Jejum com café preto é seguro?",
                answer: "Sim, é um método natural usado há séculos. Sempre consulte um médico se tiver condições específicas."
              },
              {
                question: "Posso tomar mais de uma xícara?",
                answer: "O protocolo recomenda 1 xícara em jejum. Mais pode ser consumido durante o dia conforme tolerância."
              },
              {
                question: "Posso adaptar o protocolo?",
                answer: "Sim, o guia inclui adaptações para diferentes perfis e necessidades."
              },
              {
                question: "Como acesso o material?",
                answer: "Imediatamente após a compra, você recebe o acesso por email."
              },
              {
                question: "Tem grupo de suporte?",
                answer: "Sim, grupo exclusivo no WhatsApp para os primeiros 300 participantes."
              },
              {
                question: "Funciona mesmo se eu não fizer dieta?",
                answer: "O protocolo é focado no jejum com café. Não requer dieta restritiva."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">{item.question}</h3>
                <p className="text-gray-300 text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-indigo-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              ✅ TODAS AS DÚVIDAS ESCLARECIDAS, QUERO COMPRAR ✅
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 13 - O QUE VOCÊ RECEBE + OFERTA PRINCIPAL */}
      <section id="oferta-principal" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://i.postimg.cc/C1WcXN6Q/mockup-jejumm-cafe-preto.webp" 
              alt="Mockup do Protocolo"
              className="w-full max-w-2xl mx-auto mb-12 rounded-2xl shadow-2xl"
              loading="lazy"
            />
            
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              VOCÊ VAI <span className="text-orange-500">RECEBER</span>
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-500">
                PROTOCOLO JEJUM COM CAFÉ:
              </h3>
              
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                {[
                  "✅ Guia prático passo a passo",
                  "✅ Plano de 7, 14 e 30 dias",
                  "✅ Ajustes alimentares por peso",
                  "✅ Rituais de manhã e noite",
                  "✅ Calendário visual de progresso"

                ].map((item, index) => (
                  <p key={index} className="text-lg md:text-xl text-gray-300">{item}</p>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 md:p-12 mb-12">
              <img 
                src="https://i.postimg.cc/sxP7D9wx/jejum-cafe-preto-semfundo.webp" 
                alt="Mockup do Protocolo"
                className="w-full max-w-2xl mx-auto mb-8 rounded-2xl shadow-2xl"
                loading="lazy"
              />
              
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-white">
                💣 TUDO ISSO POR APENAS:
              </h3>
              
              <div className="mb-8">
                <p className="text-2xl text-gray-400 line-through mb-2">De: R$97,70</p>
                <p className="text-5xl md:text-6xl font-black text-orange-500 mb-2">R$19,70</p>
                <p className="text-xl text-gray-300">à vista ou 10x de R$8,03</p>
              </div>
              
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide mb-4">
                <a 
                  href="https://go.disruptybr.com.br/q1yutawwn5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  🔥 QUERO EMAGRECER COM CAFÉ PRETO AGORA 🔥
                </a>
              </button>
              
              <p className="text-sm text-gray-300">
                <Shield className="w-4 h-4 inline mr-1" />
                Compra 100% segura e protegida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 14 - BÔNUS EXCLUSIVOS */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            BÔNUS <span className="text-orange-500">EXCLUSIVOS</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {[
              {
                icon: <Gift className="w-8 h-8 text-yellow-500" />,
                title: "BÔNUS 1 – Guia \"Receitas com Café Que Queimam Calorias\""
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                title: "BÔNUS 2 – Checklist Diário de Progresso Digital"
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "BÔNUS 3 – Desafio 7 Dias com Grupo Exclusivo no WhatsApp"
              }
            ].map((bonus, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 flex items-center space-x-4">
                {bonus.icon}
                <h3 className="text-xl font-bold text-white">{bonus.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://go.disruptybr.com.br/q1yutawwn5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              🎁 QUERO TUDO COM OS BÔNUS AGORA MESMO 🎁
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 15 - GARANTIA */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
              🔒 GARANTIA TRÍPLICE DE <span className="text-green-500">SEGURANÇA</span> 🔒
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-6">
                {[
                  {
                    level: "Nível 1",
                    text: "Se não perder 2kg em 7 dias, reembolso imediato",
                    color: "text-green-500"
                  },
                  {
                    level: "Nível 2",
                    text: "Fica com todos os bônus mesmo pedindo reembolso",
                    color: "text-blue-500"
                  },
                  {
                    level: "Nível 3",
                    text: "Suporte 1:1 com especialista por 3 dias",
                    color: "text-purple-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Shield className={`w-8 h-8 ${item.color}`} />
                    <div className="text-left">
                      <h3 className={`text-xl font-bold ${item.color}`}>{item.level}</h3>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  SEM RISCO. SÓ RESULTADO.
                </p>
                <p className="text-lg text-gray-300">
                  🔰 Proteção Completa | Compra Segura 🔰
                </p>
              </div>
            </div>
            
            <a 
              href="https://go.disruptybr.com.br/q1yutawwn5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              🔒 QUERO TESTAR SEM RISCO AGORA! 🔒
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 16 - PROVAS SOCIAIS + AVALIAÇÕES - MOVIDA PARA LOGO ACIMA DA OFERTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 via-black to-pink-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">
            VEJA O QUE <span className="text-orange-500">ELAS DIZEM</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={testimonial.image} 
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-auto rounded-xl mb-4 shadow-lg"
                  loading="lazy"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://go.disruptybr.com.br/q1yutawwn5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            >
              💬 QUERO SER A PRÓXIMA A DEPOIMENTAR 💬
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 17 - URGÊNCIA + PROMESSA FINAL */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 via-black to-orange-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl p-8 mb-12">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-red-500">
                ⚠️ ATENÇÃO: Essa página pode sair do ar a qualquer momento.
              </h2>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-6">
                {[
                  "🔥 Esse protocolo NÃO estará disponível novamente por esse valor",
                  "🔥 Resultados começam nas PRIMEIRAS 48 HORAS",
                  "🔥 Bônus e suporte 1:1 só pras primeiras 300 pessoas"
                ].map((item, index) => (
                  <p key={index} className="text-xl md:text-2xl font-bold text-white">{item}</p>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  👉 Faça parte do desafio das 7 manhãs com café preto.
                </p>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  👉 Seja a próxima transformação com menos 5kg.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://go.disruptybr.com.br/q1yutawwn5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black text-lg md:text-xl px-8 py-4 rounded-full hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide w-full md:w-auto"
              >
                🔥 SIM, EU QUERO ENTRAR AGORA E MUDAR MEU CORPO! 🔥
              </a>
              
              <p className="text-sm text-gray-400">
                <Clock className="w-4 h-4 inline mr-1" />
                Oferta por tempo limitado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2025 Protocolo Jejum com Café Preto. Todos os direitos reservados.
          </p>
        </div>
        
        {/* Barra de Cookies */}
        <CookieBar />
      </footer>
    </div>
  );
}

// Componente da Barra de Cookies
const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm md:text-base">
          Este site utiliza cookies para melhorar sua experiência. Ao continuar, você concorda com nossa política de privacidade.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors whitespace-nowrap"
        >
          OK, ENTENDI
        </button>
      </div>
    </div>
  );
};

export default App;