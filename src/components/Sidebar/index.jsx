import React, { useEffect, useState } from 'react';
import './index.css'; // Import CSS file for styling
import Trofeu from '../../assets/img/trofeu.svg';
import { BestUserCard } from '../BestUser';
import { fetchTopUsuarios } from '../../services/usuario';
import { fetchPerguntas } from '../../services/perguntas';

const Sidebar = () => {
  const [bestUsers, setBestUsers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuarios = await fetchTopUsuarios();
        const perguntas = await fetchPerguntas();

        // Atualiza os estados com os dados obtidos
        setBestUsers(usuarios.map(user => ({
          name: user.nome,
          score: user.total_curtidas
        })));

        setTopics(perguntas.map(pergunta => pergunta.titulo));
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <aside>
      <div className='aside-container'>
        <div className="best-users">
          <div className='title-div'>
            <img src={Trofeu} alt="Troféu" />
            <h2>Melhores usuários</h2>
          </div>
          <ul className='aside-ul'>
            {bestUsers.length > 0 ? (
              bestUsers.map((user, index) => (
                <li key={index} className="user-item">
                  <BestUserCard name={user.name} score={user.score} />
                  <hr />
                </li>
              ))
            ) : (
              <p>Nenhum usuário encontrado.</p>
            )}
          </ul>
        </div>
      </div>

      <div className='aside-container'>
        <div className="best-users">
          <div className='title-div'>
            <img src={Trofeu} alt="Troféu" />
            <h2>Outros tópicos</h2>
          </div>
          <ul>
            {topics.length > 0 ? (
              topics.map((topic, index) => (
                <li key={index} className="topic-item">
                  <p>{topic}</p>
                </li>
              ))
            ) : (
              <p>Nenhum tópico encontrado.</p>
            )}
            <hr />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

