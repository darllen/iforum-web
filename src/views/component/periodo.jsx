import React, { useState } from 'react';

const Periodo = ({ periodo, isSelected, onClick }) => {
    
    const [selected, setSelected] = useState(isSelected);

    const handleClick = () => {
        setSelected(!selected); 
        onClick(periodo);
    };

    React.useEffect(() => {
        setSelected(isSelected);
    }, [isSelected]);

    return (
        <div onClick={handleClick} className='mini-card'
            style={{
                padding: '10px 20px',
                border: selected ? '2px solid var(--azul-normal)' : '2px solid var(--cinza-medio)',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                color: 'var(--cinza-escuro)',
                transition: 'background-color 0.3s, border-color 0.3s',
                fontFamily: 'Poppins',
                fontWeight: 'bold',
            }}>

            { periodo }
        </div>
    );
};

export default Periodo;