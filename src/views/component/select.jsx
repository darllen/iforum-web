import React, {useEffect, useState} from "react";
import axios from "axios";
import {disciplinasPorCurso} from "../../services/curso/index"

const Select = ({tipo, cursoSelecionado, onDisciplinaChange}) => {
    const ENDERECO_API = "http://localhost:8081";

    const [cursos, setCursos] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);


    useEffect(() => {
        if (tipo === "Curso") {
            carregarCursos();
        }
    }, []);

    useEffect(() => {
        if (tipo === "Disciplina" && cursoSelecionado) {
            carregarDisciplinas();
        }
    }, [cursoSelecionado]);


    const carregarCursos = async () => {
        try {
            const res = await axios.get(ENDERECO_API + '/cursos');
            setCursos(res.data);
        } catch (error) {
            console.error("Erro ao carregar cursos:", error);
        }
    };

    const carregarDisciplinas = async () => {
        try {
            const resultCursoDisciplinas = await disciplinasPorCurso(cursoSelecionado);
            setDisciplinas(resultCursoDisciplinas);
            console.log("Disciplinas carregadas:", resultCursoDisciplinas);
        } catch (error) {
            console.error("Erro ao carregar disciplinas:", error);
        }
    };


    return (
        <div style={{flex: 1}}>
            {tipo === "Curso" && (
                <div className="pesquisa-curso"
                     style={{backgroundColor: 'white', borderRadius: 10, alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                        <select onChange={(e) => onDisciplinaChange(e.target.value)} className="pesquisa-curso"
                                style={{cursor: 'pointer'}}>
                            <option value="" style={{fontFamily: 'Poppins', fontWeight: '550'}}>
                                Curso
                            </option>
                            {cursos.map((curso) => (
                                <option key={curso.id} value={curso.id}
                                        style={{fontFamily: 'Poppins', fontWeight: '550'}}>
                                    {curso.nome}
                                </option>
                            ))}
                        </select>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
                            <i className="chevron down icon"
                               style={{color: 'var(--azul-normal)', cursor: 'pointer'}}></i>
                        </div>
                    </div>
                </div>
            )}

            {tipo === "Disciplina" && (
                <div className="pesquisa-curso"
                     style={{backgroundColor: 'white', borderRadius: 10, alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                        <select
                            className='pesquisa-curso'
                            style={{cursor: 'pointer'}}
                            onChange={(e) => onDisciplinaChange(e.target.value)}  // Use a prop onDisciplinaChange aqui
                        >
                            <option value="">Disciplina</option>
                            {disciplinas.map((disciplina) => (
                                <option key={disciplina.id} value={disciplina.id}
                                        style={{fontFamily: 'Poppins', fontWeight: '550'}}>
                                    {disciplina.nome}
                                </option>
                            ))}
                        </select>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
                            <i className="chevron down icon"
                               style={{color: 'var(--azul-normal)', cursor: 'pointer'}}></i>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Select;
