import React from "react";
import Articles from "./Temp";
import ArticlesCards from "./ArticlesCards";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <ArticlesCards title="Guias" description="Guia sobre conceitos ou um passo-a-passo dos meus projetos pessoais." link="/" ></ArticlesCards>
                    <ArticlesCards title="Cloud" description="Reflexões e documentações sobre Cloud (Azure, AWS)." link="/" ></ArticlesCards>
                    <ArticlesCards title="DevOps" description="Artigos e reflexões sobre minha experiencia e estudos sobre DevOps." link="/" ></ArticlesCards>
                    <ArticlesCards title="Templates" description="Armazenamento de templates para serem usados web afora." link="/" ></ArticlesCards>
                </div>
            </footer>
        </>
    );
}