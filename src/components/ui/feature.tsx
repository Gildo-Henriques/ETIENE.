import { Card } from "@/components/ui/card";
import { GitHub } from 'lucide-react';
export default function Features() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">
              Projectos
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
           
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden">
                <img src="/image.png" alt="" />
                <Card className="translate-6 h-full" />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Sistema escolar 
                </h3>
                <p className="text-muted-foreground my-4 text-sm">
                  Back-end com LARAVEL + MySQL, front-end TailwindCSS.
                </p>

    <button className="bg-white border text-black shadow-md rounded-md flex items-center px-7 py-2">

                    <span>Ver</span></button>

              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden">
                <img src="/images.jpg" alt="" />
                <Card className="translate-6 h-full" />
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                                Sistema de Vendas de Peças de Carro 
                </h3>
                <p className="text-muted-foreground my-4 text-sm">
                  Back-end em PHP puro + MySQL, front-end em
HTML/Tailwind.
                </p>

    <button className="bg-white border text-black shadow-md rounded-md flex items-center px-7 py-2">

                    <span>Ver</span></button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
