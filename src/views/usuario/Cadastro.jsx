import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image, FormField, Button, Form } from 'semantic-ui-react';
import logo from '../../assets/img/logo1.jpg';
import modelo from '../../assets/img/modelo2.jpg';
import { registerInAPI } from "../../services/auth";
import { toast } from 'react-toastify';


export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();


    const handleCadastro = async () => {
        try {
            var newUser = {
                nome: nome, 
                email: email, 
                senha: senha 
            }
            const response = await registerInAPI(newUser);
            console.log(response)
            if (response && response.id) {
                toast.success("Cadastro realizado com sucesso!");
                setTimeout(() => navigate('/login'), 2000); // Redireciona após 2 segundos
            } else {
                toast.error("Erro ao tentar criar a conta. Verifique os dados e tente novamente.");
            }
        } catch (error) {
            toast.error("Erro ao tentar criar a conta. Por favor, tente novamente mais tarde.");
        }
    };


    return (
        <div>
            {/* left side */}
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                <img src={modelo} alt="modelo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* right side */}
            <div style={{ backgroundColor: '#1B0C27', width: '40vw', top: 0, bottom: 0, position: 'fixed', boxShadow: '-5px 0px 5px rgba(0, 0, 0, 0.1)', right: 0, minHeight: '100vh' }}>
                <div style={{ maxWidth: '90%', width: 900, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
                    <Image src={logo} size='medium' style={{ maxWidth: '100%', marginBottom: '8vh' }} />
                    <Form onSubmit={(e) => { e.preventDefault(); handleCadastro(); }} >
                        <FormField style={formFieldStyle}>
                            <label style={labelStyle}>Seu nome</label>
                            <input
                                onChange={(e) => setNome(e.target.value)}
                                placeholder='Seu nome aqui'
                                style={inputStyle}
                                value={nome}
                            />
                        </FormField>
                        <FormField style={formFieldStyle}>
                            <label style={labelStyle}>E-mail</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='seuemail@email.com'
                                style={inputStyle}
                                value={email}
                            />
                        </FormField>
                        <FormField>
                            <label style={labelStyle}>Senha</label>
                            <input
                                type="password"
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder='********'
                                style={inputStyle}
                                value={senha}
                            />
                        </FormField>
                        <Button type='submit' style={buttonStyle}>Criar conta</Button>
                    </Form>
                    <Link to={'/login'} style={linkStyle}>Já tenho uma conta</Link>
                </div>
            </div>
        </div>
    );
}

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
