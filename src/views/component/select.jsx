import React, { useState, useEffect } from "react";
import axios from "axios";

const Select = ({ tipo, cursoSelecionado, setCursoSelecionado, periodoSelecionado, setPeriodoSelecionado }) => {
  const ENDERECO_API = "http://localhost:8080";

  const [cursos, setCursos] = useState([]);
  const [periodos, setPeriodos] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    carregarCursos();
  }, []);

  useEffect(() => {
    if (cursoSelecionado) {
      console.log("Curso selecionado:", cursoSelecionado);
      carregarPeriodosPorCurso(cursoSelecionado);
    } else {
      setPeriodos([]);
      setPeriodoSelecionado(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursoSelecionado]);

  useEffect(() => {
    if (periodoSelecionado) {
      console.log("Período selecionado:", periodoSelecionado);
      carregarDisciplinasPorPeriodo(periodoSelecionado);
    } else {
      setDisciplinas([]);
    }
  }, [periodoSelecionado]);

  const carregarCursos = async () => {
    try {
      const res = await axios.get(ENDERECO_API + '/cursos');
      setCursos(res.data);
    } catch (error) {
      console.error("Erro ao carregar cursos:", error);
    }
  };

  //MÉTODO FAKE POR ENQUANTO
  const carregarPeriodosPorCurso = (id_curso) => {
    let listaPeriodos = [];
    for (let i = 1; i <= 5; i++) {
      listaPeriodos.push(i);
    }
    setPeriodos(listaPeriodos);
  };

  const carregarDisciplinasPorPeriodo = async (periodo) => {
    try {
      const res = await axios.get(ENDERECO_API + '/disciplinas/' + periodo);
      setDisciplinas(res.data);
    } catch (error) {
      console.error("Erro ao carregar disciplinas:", error);
    }
  };

  const handleCursoChange = (event) => {
    const selectedCurso = event.target.value;
    setCursoSelecionado(selectedCurso);
    setPeriodoSelecionado(null);
    setDisciplinas([]);
  };

  const handlePeriodoChange = (event) => {
    const selectedPeriodo = event.target.value;
    setPeriodoSelecionado(selectedPeriodo);
  };

  return (
    <div>
      {tipo === "Curso" && (
        <div className="pesquisa-curso" style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <select onChange={handleCursoChange} className="pesquisa-curso" style={{ cursor: 'pointer' }}>
              <option value="" style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                Curso
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
      )}

      {tipo === "Período" && (
        <div className="pesquisa-curso" style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <select onChange={handlePeriodoChange} disabled={!cursoSelecionado} className="pesquisa-curso" style={{ cursor: 'pointer' }}>
              <option value="">Período</option>
              {periodos.map((periodo, index) => (
                <option key={index} value={periodo} style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                  {periodo}
                </option>
              ))}
            </select>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
              <i className="chevron down icon" style={{ color: 'var(--azul-normal)', cursor: 'pointer' }} ></i>
            </div>
          </div>
        </div>
      )}

      {tipo === "Disciplina" && (
        <div className="pesquisa-curso" style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
          <div style={{ display: 'flex' }}>
            <select disabled={!periodoSelecionado} className='pesquisa-curso' style={{ cursor: 'pointer' }}>
              <option value="">Disciplina</option>
              {disciplinas.map((disciplina) => (
                <option key={disciplina.id} value={disciplina.id} style={{ fontFamily: 'Poppins', fontWeight: '550' }}>
                  {disciplina.nome}
                </option>
              ))}
            </select>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50}}>
              <i className="chevron down icon" style={{ color: 'var(--azul-normal)', cursor: 'pointer' }} ></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
