// src/services/cursoService.js
const baseURL = "http://localhost:8081/cursos";

export const fetchCursos = async () => {
  try {
    const response = await fetch(`${baseURL}/`);
    if (!response.ok) {
      throw new Error("Erro ao buscar cursos");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return [];
  }
};

export const fetchCursoPorId = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar curso");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar curso:", error);
    return null;
  }
};

export const criarCurso = async (curso) => {
  try {
    const response = await fetch(`${baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(curso),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar curso:", error);
    return null;
  }
};

export const atualizarCurso = async (id, curso) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(curso),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar curso:", error);
    return null;
  }
};

export const deletarCurso = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar curso:", error);
    return null;
  }
};

