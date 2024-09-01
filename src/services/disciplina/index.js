// src/services/disciplinaService.js
const baseURL = "http://localhost:8081/disciplinas";

export const fetchDisciplinas = async () => {
  try {
    const response = await fetch(`${baseURL}/`);
    if (!response.ok) {
      throw new Error("Erro ao buscar disciplinas");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar disciplinas:", error);
    return [];
  }
};

export const fetchDisciplinaPorId = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar disciplina");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar disciplina:", error);
    return null;
  }
};

export const fetchDisciplinasPorPeriodo = async (periodo) => {
  try {
    const response = await fetch(`${baseURL}/filtrar?periodo=${periodo}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar disciplinas por período");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar disciplinas por período:", error);
    return [];
  }
};

export const criarDisciplina = async (disciplina) => {
  try {
    const response = await fetch(`${baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(disciplina),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar disciplina:", error);
    return null;
  }
};

export const atualizarDisciplina = async (id, disciplina) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(disciplina),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar disciplina:", error);
    return null;
  }
};

export const deletarDisciplina = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar disciplina:", error);
    return null;
  }
};

