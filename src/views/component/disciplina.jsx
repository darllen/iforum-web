import React, { useState } from 'react';

const Disciplina = ({ disciplina, isSelected, onClick }) => {
    
    const [selected, setSelected] = useState(isSelected);

    const handleClick = () => {
        setSelected(!selected); 
        onClick(disciplina);
    };

    React.useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    return (
        <div onClick={handleClick} className='mini-card'
            style={{
                padding: '2px 6px',
                border: selected ? '2px solid var(--azul-normal)' : '2px solid var(--cinza-medio)',
                borderRadius: '50px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                color: 'var(--cinza-escuro)',
                transition: 'background-color 0.3s, border-color 0.3s',
                fontFamily: 'Poppins',
                fontWeight: '500'
            }}>

            { disciplina }
        </div>
    );
};

export default Disciplina;