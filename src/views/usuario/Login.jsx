import React from "react";
import { Link } from "react-router-dom";
import { Image, FormField, Button, Form } from 'semantic-ui-react';
import logo from '../../assets/img/logo1.jpg';
import modelo from '../../assets/img/modelo1.jpg';

export default function Login() {
    return (
        <div>
            {/* left side */}
            <div style={leftSideStyle}>
                <img src={modelo} alt="modelo" style={imageStyle} />
            </div>
            {/* right bar */}
            <div style={rightBarStyle}>
                <div style={formContainerStyle}>
                    <Image src={logo} size='medium' style={logoStyle} />
                    <Form action="/home" method="get">
                        <FormField style={formFieldStyle}>
                            <label style={labelStyle}>E-mail</label>
                            <input placeholder='seuemail@email.com' style={inputStyle} />
                        </FormField>
                        <FormField>
                            <label style={labelStyle}>Senha</label>
                            <input placeholder='********' style={inputStyle} />
                        </FormField>
                        <Button type='submit' style={buttonStyle}>Entrar</Button>
                    </Form>
                    <Link to={'/'} style={linkStyle}>Esqueceu a senha? <span style={{ fontWeight: 'bold' }}>Recuperar senha</span></Link>
                    <Link to={'/cadastro'} style={linkStyle}>Criar uma conta</Link>
                </div>
            </div>
        </div>
    );
}

const leftSideStyle = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const rightBarStyle = {
    backgroundColor: '#1B0C27',
    width: '40vw',
    top: 0,
    bottom: 0,
    position: 'fixed',
    boxShadow: '-5px 0px 5px rgba(0, 0, 0, 0.1)',
    right: 0,
    minHeight: '100vh',
};

const formContainerStyle = {
    maxWidth: '90%',
    width: 900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10vh',
};

const logoStyle = {
    maxWidth: '100%',
    marginBottom: '12vh',
};

const formFieldStyle = {
    marginBottom: '15%',
};

const labelStyle = {
    textAlign: 'left',
    color: '#D6FBFF',
    fontWeight: 'normal',
    fontFamily: 'Poppins',
};

const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    background: 'transparent',
    borderRadius: 0,
    width: '20vw',
    color: '#fff',
    fontFamily: 'Poppins',
    paddingLeft: 5,
};

const buttonStyle = {
    marginTop: '8vh',
    width: '12vw',
    backgroundColor: '#5271FF',
    color: '#fff',
    fontFamily: 'Poppins',
};

const linkStyle = {
    marginTop: '5%',
    fontFamily: 'Poppins',
    fontSize: '0.9em',
    color: '#D6FBFF',
    textDecoration: 'none',
};
