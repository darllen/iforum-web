import React from "react";
import MenuSistema from "../../menuSistema";
import Sidebar from "../../components/Sidebar";
import './index.css';
import Card from "../../components/Card";
import CommentSection from "../../components/CommentSection";

export default function Home() {
  const Posts = [
    {
      user: 'Nilson Júnior',
      date: 'desde fev/2024',
      text: "Este post foi muito útil para mim! Aprendi muito sobre gerenciadores de pacotes.",
      likes: 10,
      type: "one"
    },
    {
      user: 'Luciano Cabral',
      date: 'desde fev/2024',
      text: "Gerenciadores de pacotes simplificam muito a vida no Linux. Excelente explicação!",
      likes: 7,
      type: "two"
    },
    {
      user: 'Carolina Torres',
      date: 'desde mar/2024',
      text: "Eu estava com dificuldades em usar o apt, mas esse guia me ajudou muito!",
      likes: 5,
      type: "one"
    },
    {
      user: 'Francisco Júnior',
      date: 'desde abr/2024',
      text: "O pacman do Arch é realmente poderoso, mas requer um pouco de prática.",
      likes: 8,
      type: "two"
    },
    {
      user: 'Viviane Aureliano',
      date: 'desde mai/2024',
      text: "Sou nova no Linux e esse post me ajudou a entender mais sobre a instalação de pacotes.",
      likes: 12,
      type: "one"
    }
  ];

  return (
    <div className="page">
      <MenuSistema />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>
          <div className="topics-container">
            <Card
              user="Jamily"
              title="Fundamentos de Informática  • Fev/2024"
              description="Utilização de gerenciadores de pacotes (como apt, yum, pacman) para instalar, atualizar e remover software no Linux"
              subtitle={"Teste"}
            />
          </div>
          {/* Seção de comentários */}
          <div className="comments-section">
            <CommentSection comments={Posts} />
          </div>
        </main>
      </div>
    </div>
  );
}

