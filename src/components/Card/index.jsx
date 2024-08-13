import React from 'react';
import './index.css';
import IconUser from '../iconUser';
import { CardInput } from '../CardInput';

export default function Card({ user = "Jamilly Anunciada", title, subtitle, description }) {

  return (
    <div className="card">
      <div className="card-container">

        <div className='card-info'>

          <div className="card-header">

            <IconUser type={"one"} user={user} />

            <div className='topic-info'>
              <div className="card-title">{user}</div>
              <div className="card-subtitle">{title}</div>
            </div>
          </div>

          <div className="card-body"><b>{description}</b></div>
        </div>
        <div>

          <CardInput />
        </div>
      </div>
    </div>
  );
};

