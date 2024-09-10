import React, {useEffect, useState} from "react";
import {Button, Container, Form, Grid, Header, Icon, Modal} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import MenuSistema from "../component/menuSistema";
import Disciplina from "../component/disciplina";
import Pergunta from "../component/pergunta";
import Periodo from "../component/periodo";
import Select from "../component/select";
import TextAreaHoverable from "../component/textAreaHoverable";
import axios from "axios";
import {disciplinasPorCurso} from "../../services/curso/index"
import {criarPergunta} from "../../services/perguntas";
import {getUser} from "../../helpers/authStore";

const periodos = [
    {id: 1, periodo: '1º P'},
    {id: 2, periodo: '2º P'},
    {id: 3, periodo: '3º P'},
    {id: 4, periodo: '4º P'},
    {id: 5, periodo: '5º P'}
];


export default function Home() {
    const ENDERECO_API = "http://localhost:8081";
    const [disciplinas, setDisciplinas] = useState([]);
    const [tituloPergunta, setTituloPergunta] = useState(""); // Estado para o título da pergunta
    const [cursos, setCursos] = useState([]);
    const [perguntas, setPerguntas] = useState([]);
    const [disciplinasFiltradas, setDisciplinasFiltradas] = useState([]);
    const [cursoSelecionado, setCursoSelecionado] = useState(null);
    const [periodoSelecionado, setPeriodoSelecionado] = useState([]);
    const [todasDisciplinas, setTodasDisciplinas] = useState([]); // Adicionei um estado para todas as disciplinas carregadas inicialmente
    const [cursoSelecionadoModal, setCursoSelecionadoModal] = useState(null);
    const [disciplinasModal, setDisciplinasModal] = useState([]);
    const [novaPergunta, setNovaPergunta] = useState(""); // Estado para armazenar o texto da nova pergunta
    const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null); // Estado para disciplina selecionada no modal


    const [openModal, setOpenModal] = useState(false);

    const [hover, setHover] = useState(false);

    const user = getUser();
    useEffect(() => {
        if (cursoSelecionadoModal) {
            // Carregar disciplinas no modal com base no curso selecionado no modal
            carregarDisciplinasModal();
        }
    }, [cursoSelecionadoModal]);

    const carregarDisciplinasModal = async () => {
        try {
            const resultCursoDisciplinas = await disciplinasPorCurso(cursoSelecionadoModal);
            setDisciplinasModal(resultCursoDisciplinas);
        } catch (error) {
            console.error("Erro ao carregar disciplinas no modal:", error);
        }
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const resDisciplinas = await axios.get(`${ENDERECO_API}/disciplinas`);
                setDisciplinas(resDisciplinas.data);
                setTodasDisciplinas(resDisciplinas.data);
                const resPerguntas = await axios.get(`${ENDERECO_API}/perguntas`);
                setPerguntas(resPerguntas.data);
            } catch (error) {
                console.error("Erro ao carregar disciplinas ou perguntas:", error);
            }
        };

        const carregarCursos = async () => {
            try {
                const res = await axios.get(`${ENDERECO_API}/cursos`);
                setCursos(res.data);
            } catch (error) {
                console.error("Erro ao carregar cursos:", error);
            }
        };

        fetchInitialData();
        carregarCursos();
    }, []);

    const handleDisciplinaChange = async () => {
        try {
            let query = `http://localhost:8081/perguntas`;
            const params = new URLSearchParams();

            if (disciplinasFiltradas.length > 0) {
                const disciplinaIds = JSON.stringify(disciplinasFiltradas);
                params.append('disciplinaIds', disciplinaIds);
            }

            if (periodoSelecionado && periodoSelecionado.length > 0) {
                const periodos = JSON.stringify(periodoSelecionado);
                params.append('periodos', periodos);
            }

            if (cursoSelecionado) {
                params.append('courseId', cursoSelecionado);
            }

            query += `?${params.toString()}`;
            const resPerguntas = await axios.get(query);
            setPerguntas(resPerguntas.data);
        } catch (error) {
            console.error("Erro ao carregar perguntas:", error);
        }
    };
    const handleCursoChange = async (event) => {
        const cursoId = event.target.value;
        setCursoSelecionado(cursoId);
        setDisciplinasFiltradas([]);
        setPeriodoSelecionado([]);
        try {
            if (cursoId) {
                console.log("courseId>", cursoId)
                const resDisciplinas = await axios.get(`http://localhost:8081/disciplinas?courseId=${cursoId}`);
                if (resDisciplinas.data.length > 0) {
                    setTodasDisciplinas(resDisciplinas.data);
                    setDisciplinas(resDisciplinas.data);
                } else {
                    setDisciplinas([]);
                    setTodasDisciplinas(resDisciplinas.data);

                    console.warn("Nenhuma disciplina encontrada para o curso selecionado.");
                }

                const resPerguntas = await axios.get(`http://localhost:8081/perguntas?courseId=${cursoId}`);
                if (resPerguntas.data.length > 0) {
                    setPerguntas(resPerguntas.data);
                } else {
                    setPerguntas([]);
                    console.warn("Nenhuma pergunta encontrada para o curso selecionado.");
                }
            } else {
                const resDisciplinas = await axios.get('http://localhost:8081/disciplinas');
                setDisciplinas(resDisciplinas.data);
                setTodasDisciplinas(resDisciplinas.data);

                const resPerguntas = await axios.get('http://localhost:8081/perguntas');
                setPerguntas(resPerguntas.data);
            }
        } catch (error) {
            console.error("Erro ao carregar disciplinas ou perguntas:", error);
        }
    };

    const handleSubmitPergunta = async () => {
        console.log(novaPergunta)
        console.log(cursoSelecionadoModal)
        console.log(disciplinaSelecionada)

        if (!tituloPergunta || !novaPergunta || !cursoSelecionadoModal || !disciplinaSelecionada) {
            alert("Preencha todos os campos antes de enviar a pergunta.");
            return;
        }

        // const perguntaData = {
        //     titulo: novaPergunta,
        //     cursoId: cursoSelecionadoModal,
        //     disciplinaId: disciplinaSelecionada
        // };

        console.log(user)
        const perguntaData = {
            "titulo": tituloPergunta,
            "descricao": novaPergunta,
            "usuario_id": user.id,
            "disciplina_id": disciplinaSelecionada
        }

        const response = await criarPergunta(perguntaData);
        if (response) {
            alert("Pergunta criada com sucesso!");

            // Atualize o estado de perguntas para incluir a nova pergunta
            setPerguntas((prevPerguntas) => [response, ...prevPerguntas]);

            // Feche o modal e limpe os campos
            setOpenModal(false);
            setNovaPergunta(""); // Limpa o campo de corpo da pergunta
            setTituloPergunta(""); // Limpa o campo de título da pergunta
            setCursoSelecionadoModal(null); // Limpa a seleção de curso
            setDisciplinaSelecionada(null); // Limpa a seleção de disciplina
        } else {
            alert("Erro ao criar pergunta.");
        }
    };


    const handlePeriodoClick = (periodo) => {
        console.log("periodo>>", periodo);
        if (!cursoSelecionado) {
            alert("Selecione um curso primeiro para poder filtrar por período.");
            return;
        }
        setPeriodoSelecionado((prevPeriodos) => {
            let updatedPeriodos;
            if (prevPeriodos.includes(periodo)) {
                updatedPeriodos = prevPeriodos.filter(p => p !== periodo);
            } else {
                updatedPeriodos = [...prevPeriodos, periodo];
            }

            // Filtra disciplinas de acordo com os períodos selecionados
            if (updatedPeriodos.length > 0) {
                const disciplinasFiltradasPorPeriodo = todasDisciplinas.filter(d => updatedPeriodos.includes(d.periodo));
                setDisciplinas(disciplinasFiltradasPorPeriodo);
            } else {
                setDisciplinas(todasDisciplinas); // Se nenhum período for selecionado, exibe todas as disciplinas do curso atual
            }

            return updatedPeriodos;
        });
    };
    const handleCardClickSubject = (entity) => {
        const disciplinaId = entity.id;
        setDisciplinasFiltradas((prevState) => {
            if (prevState.includes(disciplinaId)) {
                return prevState.filter(id => id !== disciplinaId);
            } else {
                return [...prevState, disciplinaId];
            }
        });
    };

    function confirmaPerguntar() {
        setOpenModal(true)
    }

    useEffect(() => {
        handleDisciplinaChange();
    }, [disciplinasFiltradas, cursoSelecionado, periodoSelecionado]);


    return (
        <div style={{backgroundColor: 'var(--background-page)'}}>
            <MenuSistema/>

            <div style={{marginTop: '5%'}}>
                <Container>
                    <Grid columns={2}>
                        <Grid.Row style={{}}>
                            <Grid.Column width={4} style={{padding: 0}}>
                                <Form>
                                    <div className="pesquisa-curso"
                                         style={{backgroundColor: 'white', borderRadius: 10, alignItems: 'center'}}>
                                        <div style={{display: 'flex'}}>
                                            <select
                                                className="pesquisa-curso"
                                                style={{cursor: 'pointer'}}
                                                onChange={handleCursoChange}
                                            >
                                                <option value="" style={{fontFamily: 'Poppins', fontWeight: '550'}}>
                                                    Buscar curso
                                                </option>
                                                {cursos.map((curso) => (
                                                    <option key={curso.id} value={curso.id}
                                                            style={{fontFamily: 'Poppins', fontWeight: '550'}}>
                                                        {curso.nome}
                                                    </option>
                                                ))}
                                            </select>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: 50
                                            }}>
                                                <i className="chevron down icon"
                                                   style={{color: 'var(--azul-normal)', cursor: 'pointer'}}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="light-shadow" style={{
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        marginTop: 10,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '10px',
                                        padding: '20px 20px 20px 30px'
                                    }}>
                                        <div style={{
                                            marginBottom: '10px',
                                            fontWeight: '600',
                                            width: '100%',
                                            fontFamily: 'Poppins'
                                        }}>Qual o período?
                                        </div>
                                        {cursoSelecionado ? (
                                            periodos.map((c) => (
                                                <Periodo
                                                    key={c.id}
                                                    className={`periodo-button ${periodoSelecionado.includes(c.id) ? 'selected' : ''}`}

                                                    periodo={c.periodo}
                                                    isSelected={periodoSelecionado.includes(c.id)} // Verifica se o período está selecionado
                                                    onClick={() => handlePeriodoClick(c.id)}
                                                />
                                            ))
                                        ) : (
                                            <p>Selecione um curso primeiro para poder filtrar pelo período.</p>
                                        )}
                                    </div>

                                    <div className="light-shadow" style={{
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        marginTop: 10,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '5px',
                                        padding: '20px 20px 20px 30px'
                                    }}>
                                        <div style={{
                                            marginBottom: '10px',
                                            fontWeight: '600',
                                            width: '100%',
                                            fontFamily: 'Poppins'
                                        }}>Disciplina
                                        </div>
                                        {disciplinas.map((d) => (
                                            <Disciplina
                                                key={d.id}
                                                disciplina={d.nome}
                                                isSelected={disciplinasFiltradas.includes(d.id)}
                                                onClick={() => handleCardClickSubject(d)}/>
                                        ))}

                                    </div>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={12} style={{}}>
                                <div className="light-shadow" style={{
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    height: '100%',
                                    padding: '50px 70px 10px 70px',
                                    marginLeft: 10
                                }}>
                                    <div className="head"
                                         style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
                                        <div className="title-page"
                                             style={{fontFamily: 'PoetsenOne', fontSize: '2.5em'}}>Qual a sua dúvida?
                                        </div>
                                        <Button onClick={e => confirmaPerguntar()} type="button" circular icon
                                                labelPosition='left' onMouseEnter={() => setHover(true)}
                                                onMouseLeave={() => setHover(false)} style={{
                                            backgroundColor: 'var(--azul-normal)',
                                            transform: hover ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'transform 0.3s ease, background-color 0.3s ease'
                                        }}>
                                            <Icon name='plus' style={{
                                                color: 'var(--azul-branquelo)',
                                                backgroundColor: 'var(--azul-normal)'
                                            }}/>
                                            <Link to={'/home'} style={{
                                                color: 'var(--azul-branquelo)',
                                                fontWeight: 500,
                                                fontFamily: 'Poppins'
                                            }}>Perguntar</Link>
                                        </Button>
                                    </div>
                                    {/*LISTAGEM DE PERGUNTAS*/}
                                    <div style={{marginTop: 40}}>
                                        {perguntas.map((p) => (
                                            <Pergunta key={p.id} usuario={p.Usuario.nome} disciplina={p.Disciplina.nome}
                                                      curtidas={p.curtidas} data={p.data} titulo={p.titulo}/>
                                        ))}
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
            <Modal basic onClose={() => setOpenModal(false)}
                   onOpen={() => setOpenModal(true)}
                   open={openModal}

                   style={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor: "white",
                       height: "60%",
                       width: "50%",
                       borderRadius: 15
                   }}>
                <div style={{}}>
                    <Header style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "4% 3% 2% 10%"
                    }}>
                        <div style={{display: "flex", justifyContent: "left", fontFamily: "Roboto", width: "93%",}}>
                            Inicie uma nova discussão
                        </div>
                        <div onClick={() => setOpenModal(false)}
                             style={{display: "flex", justifyContent: "right", width: "7%", cursor: "pointer"}}>
                            <Icon name="close" style={{color: "var(--cinza-medio)"}}/>
                        </div>
                    </Header>
                    <Modal.Content>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            marginBottom: "20px"
                        }}>
                            <input
                                type="text"
                                placeholder="Digite o título da pergunta"
                                value={tituloPergunta}
                                onChange={(e) => setTituloPergunta(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    fontSize: "16px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc"
                                }}
                            />
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "fitz"}}>
                            <TextAreaHoverable
                                rows={8}
                                value={novaPergunta}
                                onChange={(e) => setNovaPergunta(e.target.value)}
                                cols={87}
                                placeholder="Como a combinatória é aplicada na otimização de processos no Linux?"/>
                        </div>
                        <Form style={{display: "flex", gap: "1%", justifyContent: 'center', padding: '2% 10% 2% 10%'}}>

                            <Select tipo="Curso" onDisciplinaChange={setCursoSelecionadoModal}/>
                            <Select
                                tipo="Disciplina"
                                cursoSelecionado={cursoSelecionadoModal}
                                disciplinas={disciplinasModal}
                                onDisciplinaChange={setDisciplinaSelecionada} // Passe setDisciplinaSelecionada como onDisciplinaChange
                            />

                        </Form>
                    </Modal.Content>

                    <Modal.Actions style={{display: "flex", padding: "4% 10% 0% 0%", justifyContent: "right"}}
                                   onClick={handleSubmitPergunta}
                    >
                        <Button type="button" style={{backgroundColor: "var(--azul-normal)"}}>
                            <Link to={"/home"}
                                  style={{color: "var(--azul-branquelo)", fontWeight: 500, fontFamily: "Poppins",}}>
                                Perguntar
                            </Link>
                        </Button>
                    </Modal.Actions>
                </div>
            </Modal>
        </div>
    );
}
