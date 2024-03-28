import React from "react";
import { Button, Image, Input } from 'semantic-ui-react';
import { Link/* , useLocation */ } from "react-router-dom";
import logo from '../../assets/img/logo2.jpg'


export default function Home() {

    return (

        <div>
            <div>
                {/* left bar */}
                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1B0C27', maxWidth: '30vw', top: 0, bottom: 0, position: 'fixed', minHeight: '100vh' }}>
                    <div style={{ display: 'flex', maxWidth: '90%', width: 900, flexDirection: 'column', alignItems: 'center' }}>
                        <Image src={logo} size='medium' style={{ marginBottom: '10em', maxWidth: '100%', }} />
                        <Button circular type="button" style={{ width: '70%', maxWidth: '300px', backgroundColor: '#5271FF' }}>
                            <Link to={'/list-cliente'} style={{ color: 'white', width: '100%', display: 'block' }}>Acessar Fórum</Link>
                        </Button>
                    </div>
                </div>
                {/* nav */}
                <div> 
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '5%', marginTop: '5%'/* , backgroundColor: 'pink'  */ }}>
                        <Link to={'/list-cliente'} style={{ marginRight: '5%', fontFamily: 'Poppins', fontSize: '1.1em', fontWeight: 'bold', color: '#192227', textDecoration: 'none' }}>Entrar</Link>
                        <Link to={'/list-cliente'} style={{ marginRight: '5%', fontFamily: 'Poppins', fontSize: '1.1em', fontWeight: 'bold', color: '#192227', textDecoration: 'none' }}>Cadastre-se</Link>
                        <Button circular type="button" style={{ maxHeight: 40, backgroundColor: '#5271FF' }}>
                            <Link to={'/list-cliente'} style={{ color: 'white', textDecoration: 'none', fontFamily: 'Poppins' }}>Acessar Fórum</Link>
                        </Button>
                    </div>
                </div>
                {/* head */}
                <div style={{ marginLeft: '40%', marginTop: '5%'/*,  backgroundColor: 'green' */ }}> 
                    <h1 style={{ textAlign: 'left', fontFamily: 'PoetsenOne', color: '#1B0C27', width: '50%', fontSize: '3em' }}>Questionar para compreender: o lema do nosso fórum acadêmico</h1>
                    <h3 style={{ textAlign: 'left', fontFamily: 'Poppins', color: '#4D585E', width: '65%', fontSize: '1.1em', marginTop: '5%' }}>IFórum é uma comunidade para compartilhar conhecimento onde alunos e professores do Instituto Federal interagem respondendo dúvidas e questionamentos </h3>
                </div>
                {/* search */}
                <Input inverted icon='search' placeholder='Search...' style={{ borderRadius: 50, backgroundColor: 'white', border: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '10px'}}/>
            </div>
        </div>

    );

} 