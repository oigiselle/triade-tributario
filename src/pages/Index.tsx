import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Shield, BarChart3, FileCheck, Eye, ArrowRight, Zap, Target, Rocket, DollarSign, Clock, Users } from "lucide-react";
import logoTransparent from "@/assets/logo-transparent.png";
import logoIcon from "@/assets/logo-icon.png";

const Index = () => {
  const metodologiaEtapas = [
    {
      numero: "01",
      titulo: "Radar Fiscal 360°",
      descricao: "Mapeamento completo da estrutura contábil, fiscal e jurídica.",
      objetivo: "Identificar riscos, inconsistências e oportunidades de economia tributária.",
      icon: Eye,
      cor: "from-primary to-secondary",
      microetapas: [
        "Levantamento das obrigações contábeis e fiscais",
        "Análise contratual e documental",
        "Identificação de riscos e simulação de economia",
        "Parecer jurídico de viabilidade"
      ]
    },
    {
      numero: "02",
      titulo: "Arquitetura Tributária Inteligente",
      descricao: "Criação do plano de ação e ajustes legais necessários.",
      objetivo: "Construir uma estrutura tributária e contratual inteligente que reduza impostos e aumente o lucro líquido.",
      icon: BarChart3,
      cor: "from-accent to-primary",
      microetapas: [
        "Elaboração do plano de ação e cronograma",
        "Revisão e criação de contratos estratégicos",
        "Minutagem do curso e estruturação das obras digitais",
        "Registro junto aos órgãos competentes"
      ]
    },
    {
      numero: "03",
      titulo: "Conformidade Estratégica",
      descricao: "Implementação das adequações e formalização dos registros.",
      objetivo: "Garantir conformidade legal, rastreabilidade e segurança jurídica para o negócio digital.",
      icon: FileCheck,
      cor: "from-secondary to-accent",
      microetapas: [
        "Registro das obras digitais",
        "Publicidade e validação dos registros",
        "Revisão da entrega e adequação legal do cliente"
      ]
    },
    {
      numero: "04",
      titulo: "Evolução Tributária Contínua",
      descricao: "Acompanhamento contínuo e planejamento tributário evolutivo.",
      objetivo: "Assegurar a manutenção da economia, o cumprimento de novas regras e a evolução fiscal.",
      icon: TrendingUp,
      cor: "from-primary via-accent to-secondary",
      microetapas: [
        "Acompanhamento pós-implementação",
        "Planejamento e ajustes conforme reforma tributária",
        "Parecer jurídico recorrente",
        "Revisão anual de performance fiscal"
      ]
    }
  ];

  const diferenciais = [
    "Método Proprietário: Lucro Máximo (MLM)",
    "Integração Jurídico + Fiscal + Estratégica",
    "Foco 100% no Mercado Digital",
    "Resultados Mensuráveis e Comprovados",
    "Prevenção Legal e Fiscal Proativa",
    "Atualização Contínua com Reformas Tributárias",
    "Registro Jurídico de Obras Digitais e Marcas",
    "Planejamento Tributário Evolutivo",
    "Atendimento Consultivo Premium",
    "Transformação Financeira Completa"
  ];

  const stats = [
    { icon: DollarSign, value: "40%", label: "Aumento no Lucro Líquido", color: "text-primary" },
    { icon: TrendingUp, value: "95%", label: "Pagam Impostos Ineficientes", color: "text-accent" },
    { icon: Shield, value: "100%", label: "Conformidade Legal", color: "text-secondary" },
    { icon: Clock, value: "60%", label: "Mais Fiscalizações em 2024", color: "text-primary" },
  ];

  const urgencias = [
    { emoji: "💸", texto: "Perde até 30% do faturamento em impostos mal calculados — sem perceber." },
    { emoji: "⚖️", texto: "Vive com receio de autuações fiscais por falta de profissionais especializados" },
    { emoji: "📉", texto: "Vê o lucro de lançamentos cair" },
    { emoji: "🚀", texto: "Evita escalar porque teme cair na malha fina" },
    { emoji: "💎", texto: "Sente que trabalha muito, mas o lucro simplesmente não acompanha o esforço." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <img src={logoTransparent} alt="Tríade Lucro Máximo" className="h-12 animate-fade-in" />
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,99,71,0.5)] hover:scale-105"
              asChild
            >
              <a href="https://diagnostico.triadelucromaximo.com.br" target="_blank" rel="noopener noreferrer">
                Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-primary to-accent rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-secondary to-primary rounded-full blur-[120px] animate-pulse-glow delay-1000"></div>
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2 backdrop-blur-sm hover:opacity-90 transition-all">
                <Zap className="w-4 h-4 mr-2 inline" />
                Método Lucro Máximo
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-tight">
                Pague Menos Impostos.
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Lucre Mais.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Otimização tributária estratégica para infoprodutores que querem <strong className="text-primary">aumentar até 40% do lucro líquido</strong> sem precisar vender mais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-7 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                  asChild
                >
                  <a href="https://diagnostico.triadelucromaximo.com.br" target="_blank" rel="noopener noreferrer">
                    <Rocket className="mr-2 h-5 w-5 group-hover:animate-float" />
                    Quero Economizar Agora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative z-10 animate-float">
                <img src={logoIcon} alt="Tríade Logo" className="w-full max-w-md mx-auto drop-shadow-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-2 animate-scale-in hover:scale-110 transition-transform cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto group-hover:animate-float`} />
                <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
              <Target className="w-4 h-4 mr-2 inline" />
              Se você sente que:
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Sem estrutura fiscal inteligente, você continua financiando o governo e matando sua margem no caminho.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urgencias.map((urgencia, index) => (
              <Card
                key={index}
                className="border-2 border-white/10 hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(255,99,71,0.2)] hover:-translate-y-1 cursor-pointer group animate-scale-in bg-zinc-950/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-125 transition-transform">{urgencia.emoji}</span>
                    <p className="text-foreground leading-relaxed">{urgencia.texto}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">O problema não é o seu negócio. É a estrutura fiscal por trás dele.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Tríade Lucro Máximo, criamos <strong className="text-primary">estratégias fiscais inteligentes</strong> para transformar impostos em lucro — e dar segurança ao seu crescimento.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg px-10 py-7 group"
                asChild
              >
                <a href="https://diagnostico.triadelucromaximo.com.br" target="_blank" rel="noopener noreferrer">
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Resolver Isso Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              A Solução Completa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              3 pilares fundamentais para transformar seu negócio digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-white/10 hover:border-primary transition-all shadow-lg hover:shadow-[0_0_50px_rgba(255,99,71,0.3)] hover:-translate-y-2 group animate-scale-in bg-zinc-950/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:rotate-3 shadow-[0_0_30px_rgba(255,99,71,0.4)]">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Reduzir Impostos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Estrutura fiscal inteligente que <strong className="text-primary">reduz legalmente sua carga tributária</strong> e aumenta o lucro líquido de cada lançamento.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/10 hover:border-accent transition-all shadow-lg hover:shadow-[0_0_50px_rgba(255,99,71,0.3)] hover:-translate-y-2 group animate-scale-in bg-zinc-950/50 backdrop-blur-sm" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:rotate-3 shadow-[0_0_30px_rgba(255,99,71,0.4)]">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Aumentar Lucro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Aumente <strong className="text-accent">até 40% do lucro líquido</strong> sem precisar vender mais, apenas otimizando sua estrutura tributária.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/10 hover:border-secondary transition-all shadow-lg hover:shadow-[0_0_50px_rgba(255,99,71,0.3)] hover:-translate-y-2 group animate-scale-in bg-zinc-950/50 backdrop-blur-sm" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:rotate-3 shadow-[0_0_30px_rgba(255,99,71,0.4)]">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Segurança Fiscal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong className="text-secondary">Conformidade contínua</strong> e proteção contra autuações, garantindo tranquilidade para escalar seu negócio.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
              Método Proprietário
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Método Lucro Máximo (MLM) ©
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              4 etapas estruturadas para transformar seu negócio digital em uma operação lucrativa e segura
            </p>
          </div>

          <div className="space-y-8">
            {metodologiaEtapas.map((etapa, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-white/10 hover:border-primary transition-all shadow-lg hover:shadow-[0_0_50px_rgba(255,99,71,0.2)] group animate-fade-in bg-zinc-950/30 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-6 p-8">
                  <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className={`text-7xl font-bold bg-gradient-to-br ${etapa.cor} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                      {etapa.numero}
                    </div>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${etapa.cor} flex items-center justify-center group-hover:rotate-6 transition-transform`}>
                      <etapa.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {etapa.titulo}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {etapa.descricao}
                      </p>
                      <div className={`bg-gradient-to-r ${etapa.cor} p-[2px] rounded-lg`}>
                        <div className="bg-background p-4 rounded-lg">
                          <p className="font-semibold text-foreground">
                            <span className="text-primary">🎯 Objetivo:</span> {etapa.objetivo}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Microetapas:
                      </p>
                      <ul className="grid gap-3 mt-3">
                        {etapa.microetapas.map((micro, i) => (
                          <li key={i} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{micro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              10 Diferenciais da Tríade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O que torna o Método Lucro Máximo único no mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {diferenciais.map((diferencial, index) => (
              <Card
                key={index}
                className="border-2 border-white/10 hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(255,99,71,0.2)] group animate-scale-in bg-zinc-950/30 backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,99,71,0.4)]">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-foreground font-medium leading-relaxed group-hover:text-primary transition-colors">{diferencial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Pronto para Transformar Seu Negócio Digital?
          </h2>
          <p className="text-xl md:text-2xl text-white/95">
            Solicite um <strong>diagnóstico fiscal 360°</strong> e descubra quanto você pode economizar
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-xl px-12 py-8 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-110 transition-all group"
              asChild
            >
              <a href="https://diagnostico.triadelucromaximo.com.br" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-6 w-6 group-hover:animate-float" />
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>
          <p className="text-white/80 text-sm">
            ✅ Sem compromisso • ✅ 100% Gratuito • ✅ Resultado em até 48h
          </p>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <img src={logoTransparent} alt="Tríade Lucro Máximo" className="h-16" />
            <p className="text-muted-foreground text-center">
              Otimização tributária estratégica para infoprodutores
            </p>
            <p className="text-muted-foreground/60 text-sm text-center">
              © 2025 Tríade Lucro Máximo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
