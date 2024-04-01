import React from "react";
import logo from '../../assets/img/logo1.jpg';
import modelo from '../../assets/img/modelo2.jpg';
import { Link/* , useLocation */ } from "react-router-dom";
import { Image, FormField, Button, Form } from 'semantic-ui-react';

export default function Cadastro() {
    return (
        <div>
            <div>
                {/* left side */}
                <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                    <img src={modelo} alt="modelo" style={{ width: '100%', height: '100%', objectFit: 'cover', }} />
                </div>
                <div>
                    {/* right side */}
                    <div style={{ backgroundColor: '#1B0C27', width: '40vw', top: 0, bottom: 0, position: 'fixed', boxShadow: '-5px 0px 5px rgba(0, 0, 0, 0.1)', right: 0, minHeight: '100vh' }}>
                        <div style={{ maxWidth: '90%', width: 900, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Image src={logo} size='medium' style={{ maxWidth: '100%', marginBottom: '20px' }} />
                            <Form action="/home" method="get">
                                <FormField style={{ marginBottom: '15%' }}>
                                    <label style={{ textAlign: 'left', color: '#D6FBFF', fontWeight: 'normal', fontFamily: 'Poppins' }}>E-mail</label>
                                    <input placeholder='seuemail@email.com' style={{ border: 'none', borderBottom: '1px solid #ccc', background: 'transparent', borderRadius: 0, width: '20vw', color: '#fff', fontFamily: 'Poppins', paddingLeft: 5 }} />
                                </FormField>
                                <FormField style={{ marginBottom: '15%' }}>
                                    <label style={{ textAlign: 'left', color: '#D6FBFF', fontWeight: 'normal', fontFamily: 'Poppins' }}>Senha</label>
                                    <input placeholder='********' style={{ border: 'none', borderBottom: '1px solid #ccc', background: 'transparent', borderRadius: 0, width: '20vw', color: '#fff', fontFamily: 'Poppins', paddingLeft: 5 }} />
                                </FormField>
                                <FormField>
                                    <label style={{ textAlign: 'left', color: '#D6FBFF', fontWeight: 'normal', fontFamily: 'Poppins' }}>Confirmar Senha</label>
                                    <input placeholder='********' style={{ border: 'none', borderBottom: '1px solid #ccc', background: 'transparent', borderRadius: 0, width: '20vw', color: '#fff', fontFamily: 'Poppins', paddingLeft: 5 }} />
                                </FormField>
                                <Button type='submit' style={{ marginTop: '8vh', width: '12vw', backgroundColor: '#5271FF', color: '#fff', fontFamily: 'Poppins' }}>Criar conta</Button>
                            </Form>
                            <Link to={'/login'} style={{ marginTop: '5%', fontFamily: 'Poppins', fontSize: '0.9em', color: '#D6FBFF', textDecoration: 'none' }}>Já tenho uma conta</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
