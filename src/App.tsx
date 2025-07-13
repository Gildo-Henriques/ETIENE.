import Features from "./components/ui/feature";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import  Tecnologias from "./components/ui/techs"
import { Card } from "./components/ui/card";

// import { Img } from 'react-image'
export default function App(){
  return (
    
    <main>
      <Navbar />
      <section className="">
      <Hero />


      </section>
      <section className="bg-white">

      <Tecnologias />
      </section>
      <div className="bg-muted/50">
        <section className="text-left mx-auto max-w-5xl px-6 py-10">
      <div className="max-w-5xl space-y-5">
                <h1 className="text-foreground text-4xl font-semibold">Sobre Mim</h1>
        <p className="text-muted-foreground mb-12 mt-4 text-balance lg:text-lg text-base">Desenvolvedor Backend com experiência prática em projetos pessoais, criação de APIs RESTful e
desenvolvimento de sistemas web com PHP e MySQL. Familiaridade com ferramentas modernas de
desenvolvimento e integração com front-end. Forte capacidade analítica e interesse em aplicar
conhecimentos também em projetos de análise de dados. Proativo, autodidata e focado em crescimento
contínuo.</p>
      </div>
      </section>
      </div>
       <div className="mx-auto max-w-5xl px-6 py-10">
                <div>
                  <h2 className="text-foreground text-4xl font-semibold">
                    Habilidades Técnicas
                  </h2>
                  <p className="text-muted-foreground mb-12 mt-4 text-balance lg:text-lg text-base">
                    Automate your tasks and workflows by connecting your favorite
                    tools like Notion, Todoist, and more. AI-powered scheduling helps
                    you stay on track and adapt to changing priorities.
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
                  <div className="space-y-4">
                    <Card className="aspect-video overflow-hidden">
                      <Card className="translate-6 h-full" />
                      <img src="/images.png" alt="" />
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="aspect-video overflow-hidden">
                      <Card className="translate-6 h-full" />
                      <img src="/images.png" alt="" />
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="aspect-video overflow-hidden">
                      <Card className="translate-6 h-full" />
                      <img src="/images.png" alt="" />
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="aspect-video overflow-hidden">
                      <Card className="translate-6 h-full" />
                      <img src="/images.png" alt="" />
                    </Card>
                  </div>
                 
                  <div className="space-y-4">
                    <Card className="aspect-video overflow-hidden">
                      <img src="/images.png" alt="" />
                      <Card className="translate-6 h-full" />
                    </Card>

                  </div>
                </div>
              </div>

        <Features />
    </main>
      
  )
}