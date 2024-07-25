import React from "react";
import MenuSistema from "../../menuSistema"
import Card from "../../components/Card";

export default function Pergunta() {

    return (
        <>
            <div>
                <MenuSistema></MenuSistema>
                <Card
                    title="Tanajura Carlos"
                    subtitle="Fundamentos da Informática"
                    description="Utilização de gerenciadores de pacotes (como apt, yum, pacman) para instalar, atualizar e remover software no Linux
                    " />
            </div>
        </>
    );
}
