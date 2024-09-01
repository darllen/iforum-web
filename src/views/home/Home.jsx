import React, { useState, useEffect } from "react";
import { Container, Grid, Form, Button, Icon, Modal, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import MenuSistema from "../component/menuSistema";
import Disciplina from "../component/disciplina";
import Pergunta from "../component/pergunta";
import Periodo from "../component/periodo";
import Select from "../component/select";
import TextAreaHoverable from "../component/textAreaHoverable";
import axios from "axios";


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
];

const perguntas = [
    { id: 1, usuario: 'Jamilly Anunciada' ,curtidas: 13, data: 'fev/2024', disciplina: 'Fundamentos de Informática ', titulo: 'Instalar uma distribuição Linux em diferentes ambientes (desktop, servidor, máquina virtual)' },
    { id: 2, usuario: 'Jamilly Anunciada' ,curtidas: 14, data: 'abr/2024', disciplina: 'Fundamentos de Informática ', titulo: 'Instalar uma distribuição Linux em diferentes ambientes (desktop, servidor, máquina virtual)' },
    { id: 3, usuario: 'Jamilly Anunciada' ,curtidas: 12, data: 'out/2024', disciplina: 'Fundamentos de Informática ', titulo: 'Instalar uma distribuição Linux em diferentes ambientes (desktop, servidor, máquina virtual)' },
    { id: 4, usuario: 'Jamilly Anunciada' ,curtidas: 5, data: 'fev/2024', disciplina: 'Fundamentos de Informática ', titulo: 'Instalar uma distribuição Linux em diferentes ambientes (desktop, servidor, máquina virtual)' },
    { id: 5, usuario: 'Jamilly Anunciada' ,curtidas: 45, data: 'mar/2024', disciplina: 'Fundamentos de Informática ', titulo: 'Instalar uma distribuição Linux em diferentes ambientes (desktop, servidor, máquina virtual)' },
];

export default function Home() {
  const ENDERECO_API = "http://localhost:8080";

  const [cursos, setCursos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null);
  const [periodoSelecionado, setPeriodoSelecionado] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    carregarCursos();
  }, []);

  const handleCardClickCourse = (entity) => {
      setCursoSelecionado(entity);
      console.log(`Pesquisa por: ${entity.periodo}`);
  };

  const handleCardClickSubject = (entity) => {
      setDisciplinaSelecionada(entity);
      console.log(`Pesquisa por: ${entity.periodo}`);
  };

  function confirmaPerguntar() {
    setOpenModal(true)
  }

  const carregarCursos = async () => {
    try {
      const res = await axios.get(ENDERECO_API + '/cursos');
      setCursos(res.data);
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--background-page)' }}>
      <MenuSistema />
      
      <div style={{ marginTop: '5%' }}>
        <Container>
          <Grid columns={2}>
            <Grid.Row style={{ }}>
              <Grid.Column width={4} style={{ padding: 0 }}>
                <Form>
                  <div className="pesquisa-curso" style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                      <select className="pesquisa-curso" style={{ cursor: 'pointer' }}>
                        <option value="" style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                          Buscar curso
                        </option>
                        {cursos.map((curso) => (
                          <option key={curso.id} value={curso.id} style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                            {curso.nome}
                          </option>
                        ))} 
                      </select>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
                        <i className="chevron down icon" style={{ color: 'var(--azul-normal)', cursor: 'pointer' }} ></i>
                      </div>
                    </div>
                  </div>

                  <div className="light-shadow" style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px 20px 20px 30px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600', width:'100%', fontFamily:'Poppins' }}>Qual o período?</div>
                    { periodos.map((c) => (
                      <Periodo key={c.id} periodo={c.periodo} isSelected={cursoSelecionado === c} onClick={() => handleCardClickCourse(c)} />
                    ))}
                  </div>

                  <div className="light-shadow" style={{ backgroundColor: 'white', borderRadius: 10, marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '20px 20px 20px 30px' }}>
                    <div style={{ marginBottom: '10px', fontWeight: '600', width:'100%', fontFamily:'Poppins' }}>Disciplina</div>
                    { disciplinas.map((d) => (
                      <Disciplina key={d.id} disciplina={d.disciplina} isSelected={disciplinaSelecionada === d} onClick={() => handleCardClickSubject(d)} />
                    ))}
                  </div>
                </Form>
              </Grid.Column>
                <Grid.Column width={12} style={{ }}>
                  <div className="light-shadow" style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center', height:'100%', padding: '50px 70px 10px 70px', marginLeft:10 }}>
                    <div className="head" style={{ display: 'flex', justifyContent: 'space-between', marginBottom:10 }}>
                      <div className="title-page" style={{ fontFamily:'PoetsenOne', fontSize: '2.5em' }}>Qual a sua dúvida?</div>
                      <Button onClick={e => confirmaPerguntar()} type="button" circular icon labelPosition='left' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundColor: 'var(--azul-normal)', transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease, background-color 0.3s ease' }}>
                        <Icon name='plus' style={{ color: 'var(--azul-branquelo)', backgroundColor: 'var(--azul-normal)' }}/>
                        <Link to={'/home'} style={{ color: 'var(--azul-branquelo)', fontWeight:500, fontFamily: 'Poppins' }}>Perguntar</Link>
                      </Button>
                    </div>
                    {/*LISTAGEM DE PERGUNTAS*/}
                    <div style={{ marginTop: 40 }}>
                      { perguntas.map((p) => (
                        <Pergunta key={p.id} usuario={p.usuario} disciplina={p.disciplina} curtidas={p.curtidas} data={p.data} titulo={p.titulo}/>
                      ))}
                    </div>
                  </div>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <Modal basic onClose={() => setOpenModal(false)} onOpen={() => setOpenModal(true)} open={openModal} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", height: "60%", width: "50%", borderRadius: 15}}>
        <div style={{  }} >
          <Header style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "4% 3% 2% 10%" }} >
            <div style={{ display: "flex", justifyContent: "left", fontFamily: "Roboto", width: "93%", }} >
              Inicie uma nova discussão
            </div>
            <div onClick={() => setOpenModal(false)} style={{ display: "flex", justifyContent: "right", width: "7%", cursor: "pointer" }} >
              <Icon name="close" style={{ color: "var(--cinza-medio)" }} />
            </div>
          </Header>
          <Modal.Content>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >
              <TextAreaHoverable rows={8} cols={87} placeholder="Como a combinatória é aplicada na otimização de processos no Linux?" />
            </div>
            <Form style={{ display: "flex", gap: "1%", justifyContent: 'center', padding: '2% 10% 2% 10%' }}>
              <Select tipo="Curso" 
                cursoSelecionado={cursoSelecionado}
                setCursoSelecionado={setCursoSelecionado}
                periodoSelecionado={periodoSelecionado}
                setPeriodoSelecionado={setPeriodoSelecionado}
              />
              <Select tipo="Período" 
                cursoSelecionado={cursoSelecionado}
                setCursoSelecionado={setCursoSelecionado}
                periodoSelecionado={periodoSelecionado}
                setPeriodoSelecionado={setPeriodoSelecionado}
              />
              <Select tipo="Disciplina" 
                cursoSelecionado={cursoSelecionado}
                setCursoSelecionado={setCursoSelecionado}
                periodoSelecionado={periodoSelecionado}
                setPeriodoSelecionado={setPeriodoSelecionado}
              />
            </Form>
          </Modal.Content>

          <Modal.Actions style={{ display: "flex", padding: "4% 10% 0% 0%", justifyContent: "right" }} >
            <Button type="button" style={{ backgroundColor: "var(--azul-normal)" }} >
              <Link to={"/home"} style={{ color: "var(--azul-branquelo)", fontWeight: 500, fontFamily: "Poppins", }} >
                Perguntar
              </Link>
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
    </div>
  );
}
