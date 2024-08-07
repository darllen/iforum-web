import React from 'react';
import './index.css';
import IconUser from '../iconUser';
import { CardInput } from '../CardInput';

export default function Card({ title, subtitle, description }) {
    const user = "Jamilly Anunciada";

    return (
        <div className="card">
            <div className="card-container">

                <div className='card-info'>

                    <div className="card-header">

                        <IconUser type={"one"} user={user} />

                        <div className='topic-info'>
                            <div className="card-title">{user}</div>
                            <div className="card-subtitle">{subtitle}</div>
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

