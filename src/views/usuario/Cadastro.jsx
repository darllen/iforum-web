import React/*,  { useEffect, useState } */ from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { Link/*,  useLocation */ } from "react-router-dom";
import MenuSistema from '../../menuSistema';


export default function Cadastro() {

    return (
        <div>
            <MenuSistema />
            <div >

                <Container textAlign='justified' >

                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    //value={nome}
                                    //onChange={e => setNome(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        //value={cpf}
                                        //onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        //value={foneCelular}
                                        //onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        //value={foneFixo}
                                        //onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        //value={formatarData(dataNascimento)}
                                        //onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>
                            <Form.Group widths='equal' style={{ marginTop: '4%' }}>
                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                /* value={rua}
                                onChange={e => setRua(e.target.value)} */
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    width={4}
                                /* value={numero}
                                onChange={e => setNumero(e.target.value)} */
                                />
                            </Form.Group>

                            <Form.Group widths='equal' style={{ marginTop: '4%' }}>
                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                /* value={bairro}
                                onChange={e => setBairro(e.target.value)} */
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                /* value={cidade}
                                onChange={e => setCidade(e.target.value)} */
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='CEP'
                                    width={5}>
                                    <InputMask
                                        required
                                        mask="99999-999"
                                    /* value={cep}
                                    onChange={e => setCep(e.target.value)} */
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal' style={{ marginTop: '4%' }}>
                                <Form.Select
                                    fluid
                                    label='UF'
                                    placeholder="Selecione"
                                    //options={UFOptions}
                                /* value={estado}
                                //onChange={e => setUf(e.target.value)}
                                onChange={(e, { value }) => { setEstado(value) }} */
                                />
                            </Form.Group>
                            <Form.Group widths='equal' style={{ marginTop: '4%' }}>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                /* value={complemento}
                                onChange={e => setComplemento(e.target.value)} */
                                />
                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-cliente'}>Voltar</Link>
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                //onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                <Link to={'/list-cliente'}>Salvar</Link>
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}



