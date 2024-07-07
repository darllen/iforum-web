import React from 'react';


const Avatar = ({ usuario }) => {

    return (
        <div style={{
            borderRadius: 6,
            width: '40px',
            height: '40px',
            border: '1.5px solid var(--azul-cheguei)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                backgroundColor: 'var(--azul-branquelo)',
                border: '1.5px solid var(--azul-cheguei)',
                borderRadius: 6,
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--roxo-bonitinho)',
                fontFamily: 'Poppins',
                fontSize: '2em',
                fontWeight: 'bold'
            }}>
            {usuario.charAt(0).toUpperCase()}
        </div>
    </div>
    );
};

export default Avatar;