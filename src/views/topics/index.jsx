import React from "react";
import MenuSistema from "../../menuSistema";
import Sidebar from "../../components/Sidebar";
import './index.css'
import Card from "../../components/Card";

export default function Home() {

    return (

        <div className="page">
            <MenuSistema />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <main>
                    <div className="topics-container">


                        <Card
                            title="Fundamentos de Informática  • Fev/2024"
                            description="Utilização de gerenciadores de pacotes (como apt, yum, pacman) para instalar, atualizar e remover software no Linux
                        "
                            subtitle={"Teste"}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}
