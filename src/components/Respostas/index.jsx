import React, { useState } from 'react';
import IconUser from "../../components/iconUser";
import CommentSection from "../../components/CommentSection";
import HeartCheck from '../../assets/img/heart_check.svg';
import './index.css'; // Adicione um arquivo CSS para este componente

const RespostaList = ({ respostas, comentarios, usuarios, handleCreateComentario, user }) => {
  const [newComentario, setNewComentario] = useState("");

  return (
    <div className="respostas-section">
      <h3>Respostas</h3>
      {respostas.map((resposta) => (
        <div key={resposta.id} className="resposta">
          <div className="resposta-header">
            <div className='resume'>
              <IconUser user={usuarios[resposta.id_usuario]} type={user.type} />
              <div className="resposta-info">
                <span className="resposta-user">{usuarios[resposta.id_usuario]}</span>
                <span className="resposta-stats">
                  {comentarios[resposta.id]?.length || 0} comentários desde • {new Date(resposta.createdAt).toLocaleDateString()}
                </span>
              </div></div>
            <div className="like-section">
              <img src={HeartCheck} alt="like" className="like-icon" />
              <span>{resposta.curtidas}</span>
            </div>
          </div>
          <p className='resposta-content'>{resposta.descricao}</p>
          {/* Exibir comentários da resposta */}
          <CommentSection comments={comentarios[resposta.id] || []} user={user} />
          <br />
          {/* Input para adicionar comentário */}
          < div className="add-comment" >
            <input
              type="text"
              placeholder="Adicione um comentário"
              value={newComentario}
              onChange={(e) => setNewComentario(e.target.value)}
            />
            <button onClick={() => handleCreateComentario(resposta.id, newComentario, setNewComentario)}>Comentar</button>
          </div>
        </div >
      ))}
    </div >
  );
};

export default RespostaList;

