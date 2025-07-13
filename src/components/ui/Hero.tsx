import { GitHub } from 'lucide-react';
import Button from "./Button";

export default function Hero(){
    return (
        <section className="flex flex-col bg-muted/50 justify-center items-center bg-muted/50 shadow-sm  lg:py-20 py-10 lg:px-32 px-5">
                <div className="mt-10 w-full">
                    <h1 className="lg:text-5xl text-4xl text-center text-foreground font-semibold">Desenvolvedor <span className="before:[''] before:absolute before:bg-slate-200 z-20 before:-z-10 before:rotate-3  before:bottom-0  before:w-full before:h-8 relative before:border-4 before:border-dashed before:border-blue-700">backend</span> Junior
                         <br className="hidden lg:flex" /> PHP, python, SqL</h1>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 justify-center w-full mt-10">

                <button className="text-white bg-black flex justify-center rounded-md flex items-center px-7 py-2">

                    <span>GitHub</span></button>
                <Button style={2}>Curriculo Vitae</Button>
                    
                </div>

        </section>
    )
}