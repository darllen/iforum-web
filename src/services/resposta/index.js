const baseURL = "http://localhost:8081/respostas";

export const fetchRespostas = async () => {
  try {
    const response = await fetch(`${baseURL}/`);
    if (!response.ok) {
      throw new Error("Erro ao buscar respostas");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar respostas:", error);
    return [];
  }
};

export const fetchRespostaPorId = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar resposta");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar resposta:", error);
    return null;
  }
};

export const fetchRespostasPorPerguntaId = async (perguntaId) => {
  try {
    const response = await fetch(`${baseURL}/pergunta/${perguntaId}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar respostas por pergunta ID");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar respostas por pergunta ID:", error);
    return [];
  }
};

export const fetchRespostasPorString = async (searchString) => {
  try {
    const response = await fetch(`${baseURL}/buscar/${searchString}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar respostas por string");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar respostas por string:", error);
    return [];
  }
};

export const criarResposta = async (resposta) => {
  try {
    const response = await fetch(`${baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resposta),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar resposta:", error);
    return null;
  }
};

export const atualizarResposta = async (id, resposta) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resposta),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar resposta:", error);
    return null;
  }
};

export const deletarResposta = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar resposta:", error);
    return null;
  }
};

