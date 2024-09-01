import React from 'react';
import './index.css';
import IconUser from '../iconUser';
import { CardInput } from '../CardInput';

export default function Card({ user = "Anônimo", title, subtitle, description, onSubmit, newInputValue, setNewInputValue }) {
  console.log(user)
  return (
    <div className="card">
      <div className="card-container">
        <div className='card-info'>
          <div className="card-header">
            {/* Passando o nome do usuário corretamente para 'IconUser' */}
            <IconUser type={"one"} user={user} />
            <div className='topic-info'>
              <div className="card-title">{user}</div>
              <div className="card-subtitle">{title}</div>
            </div>
          </div>
          <div className="card-body"><b>{description}</b></div>
        </div>
        <div>
          <CardInput
            value={newInputValue}
            onChange={(e) => setNewInputValue(e.target.value)}
            onSubmit={onSubmit}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};


