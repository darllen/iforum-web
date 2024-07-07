import React, { useState } from "react";
import MenuSistema from "../component/menuSistema";
import Periodo from "../component/periodo";
import Disciplina from "../component/disciplina";
import { Container, Grid, Form } from 'semantic-ui-react';

const periodos = [
    { id: 1, periodo: '1º P' },
    { id: 2, periodo: '2º P' },
    { id: 3, periodo: '3º P' },
    { id: 4, periodo: '4º P' },
    { id: 5, periodo: '5º P' }
];

const disciplinas = [
    { id: 1, disciplina: 'Lógica de programação' },
    { id: 2, disciplina: 'Inglês I' },
    { id: 3, disciplina: 'Programação para Web I' },
    { id: 4, disciplina: 'Fundamentos de Informática' },
    { id: 5, disciplina: 'Ética e Cidadania' },
    { id: 4, disciplina: 'Matemática Discreta' },
    { id: 5, disciplina: 'Sistemas Operacionais' }
]

export default function Home() {

    const [selectedCurso, setSelectedCurso] = useState(null);
    const [selectedDisciplina, setSelectedDisciplina] = useState(null);


    const handleCardClickCourse = (entity) => {
        setSelectedCurso(entity);
        console.log(`Pesquisa por: ${entity.periodo}`);
    };

    const handleCardClickSubject = (entity) => {
        setSelectedDisciplina(entity);
        console.log(`Pesquisa por: ${entity.periodo}`);
    };

    return (
        <div style={{ backgroundColor: 'var(--background-page)' }}>
            <MenuSistema></MenuSistema>
            
            <div style={{ marginTop: '5%' }}>
                <Container>
                    <Grid columns={2}>
                        <Grid.Row style={{ }}>
                            <Grid.Column width={4} style={{ padding: 0 }}>
                                <Form>
                                    <div className="pesquisa-curso" style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                                        {/*<div style={{ marginBottom: '10px', fontWeight: '600', fontFamily: 'Poppins' }}>Buscar curso</div>*/}
                                        <div style={{ display: 'flex' }}>
                                            <select className="pesquisa-curso" style={{ cursor: 'pointer' }}>
                                                <option value="aloo" style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                                                    Buscar curso
                                                </option>
                                                <option value="aloo" style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                                                    Análise e Desenvolvimento de Sistemas
                                                </option>
                                                {/*(cursos || []).map((cu) => (
                                                    <option key={cu.id} value={cu.id}>
                                                        {cu.nome}
                                                    </option>
                                                ))*/}
                                            </select>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
                                                <i className="chevron down icon" style={{ color: 'var(--azul-normal)', cursor: 'pointer' }} ></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="light-shadow" style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px 20px 20px 30px' }}>
                                        <div style={{ marginBottom: '10px', fontWeight: '600', width:'100%', fontFamily:'Poppins' }}>Qual o período?</div>
                                        { periodos.map((c) => (
                                            <Periodo key={c.id} periodo={c.periodo} isSelected={selectedCurso === c} onClick={() => handleCardClickCourse(c)} />
                                        ))}
                                    </div>

                                    <div className="light-shadow" style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '20px 20px 20px 30px' }}>
                                        <div style={{ marginBottom: '10px', fontWeight: '600', width:'100%', fontFamily:'Poppins' }}>Disciplina</div>
                                        { disciplinas.map((d) => (
                                            <Disciplina key={d.id} disciplina={d.disciplina} isSelected={selectedDisciplina === d} onClick={() => handleCardClickSubject(d)} />
                                        ))}
                                    </div>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={12} style={{   }}>

                               
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
