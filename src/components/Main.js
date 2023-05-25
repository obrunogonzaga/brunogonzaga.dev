import React from "react";

export default function Main() {
    return (
        <>
            <main className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
                    <p className={`mb-3 text-2xl`}>
                    Bem-vindo(a) ao meu espaço digital! 🌱
                    Sou desenvolvedor de software em Curitiba. Nesse espaço irei compartilhar projetos de código aberto e escrever tutoriais e guias sobre programação, DevOps, e Cloud.
                    </p>
                </div>
            </main>
        </>
    );
}