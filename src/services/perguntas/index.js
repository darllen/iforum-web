// src/services/perguntaService.js
const baseURL = "http://localhost:8081/perguntas";

export const fetchPerguntas = async () => {
  try {
    const response = await fetch(`${baseURL}/`);
    if (!response.ok) {
      throw new Error("Erro ao buscar perguntas");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    return [];
  }
};

export const fetchPerguntaPorId = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar pergunta");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar pergunta:", error);
    return null;
  }
};

export const fetchPerguntasPorString = async (searchString) => {
  try {
    const response = await fetch(`${baseURL}/buscar/${searchString}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar perguntas por string");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar perguntas por string:", error);
    return [];
  }
};

export const criarPergunta = async (pergunta) => {
  try {
    const response = await fetch(`${baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pergunta),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar pergunta:", error);
    return null;
  }
};

export const atualizarPergunta = async (id, pergunta) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pergunta),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar pergunta:", error);
    return null;
  }
};

export const deletarPergunta = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar pergunta:", error);
    return null;
  }
};

