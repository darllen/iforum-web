import React, { useState } from 'react';
import Avatar from "./avatar";
import { Button, Divider } from 'semantic-ui-react';
import { Link } from "react-router-dom";


const Pergunta = ({ usuario, disciplina, curtidas, data, titulo }) => {

    const [hover, setHover] = useState(false);


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0px 10px 0px'}}>
                <div style={{ width: '10%' }}>
                    <Avatar usuario={usuario}/>
                </div>
                <div style={{ width: '90%' }}>
                    <div style={{ fontFamily: 'Roboto', fontSize: '0.9em', fontWeight: 550, color: '#ABABAB', marginBottom: 5 }}>
                        {disciplina} • {curtidas} curtidas • {data}
                    </div>
                    <div style={{ fontFamily: 'Roboto', fontSize: '1.2em', fontWeight: 600, color: 'var(--cinza-escuro)', marginBottom: 20 }}>
                        {titulo}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            type="button"
                            onMouseEnter={() => setHover(true)} 
                            onMouseLeave={() => setHover(false)}
                            style={{ 
                                backgroundColor: hover ? 'var(--azul-branquelo)' : 'transparent',
                                color: hover ? 'var(--azul-normal)' : 'var(--azul-cheguei)',
                                border: '1px solid var(--azul-cheguei)',
                                borderRadius: '50px',
                                padding: '5px 12px',
                            }}
                        >
                            <Link to="/home" style={{ color: 'var(--azul-cheguei)', fontWeight: 600, fontFamily: 'Roboto', textDecoration: 'none' }}>Responder</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
};

export default Pergunta;