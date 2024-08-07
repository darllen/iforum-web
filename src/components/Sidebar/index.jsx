import React from 'react';
import './index.css'; // Import CSS file for styling
import Trofeu from '../../assets/img/trofeu.svg'
import { BestUserCard } from '../BestUser';

const Sidebar = () => {
  const bestUsers = [
    { name: 'Nilson Júnior', score: 100 },
    { name: 'Luciano Cabral', score: 97 },
    { name: 'Carolina Torres', score: 95 },
    { name: 'Francisco Júnior', score: 94 },
    { name: 'Viviane Aureliano', score: 90 },
  ];

  const topics = [
    'Sistemas operacionais baseados em Linux e suas distribuições mais populares',
    'Scripting em shell no Linux para automação de tarefas',
    'Navegação no ambiente de linha de comando (CLI) e uso de comandos básicos do shell',
    'Conceitos fundamentais de informática, hardware, software, sistemas operacionais e redes',
  ];

  return (
    <aside>
      <div className='aside-container'>

        <div className="best-users">

          <div className='title-div' >
            <img src={Trofeu} alt="" />
            <h2>Melhores usuários</h2>
          </div>

          <ul className='aside-ul'>
            {bestUsers.map((user, index) => (
              <li key={index} className="user-item">
                <BestUserCard name={user.name} score={user.score} />
                <hr />
              </li>


            ))}
          </ul>
          <button className="see-more">Ver mais</button>
        </div>
      </div>




      <div className='aside-container'>

        <div className="best-users">

          <div className='title-div' >
            <img src={Trofeu} alt="" />

            <h2>Outros tópicos</h2>

          </div>

          <ul>
            {topics.map((topic, index) => (
              <li key={index} className="topic-item">
                <p>{topic}</p>
                <hr/>
              </li>
            ))}

                <hr/>
          </ul>
          <button className="see-more">Ver mais</button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
