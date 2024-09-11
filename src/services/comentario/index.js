const baseURL = "http://localhost:8081/comentarios";

export const fetchComentarios = async () => {
  try {
    const response = await fetch(`${baseURL}/`);
    if (!response.ok) {
      throw new Error("Erro ao buscar comentários");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
    return [];
  }
};

export const fetchComentarioPorId = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar comentário");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar comentário:", error);
    return null;
  }
};

export const fetchComentariosPorRespostaId = async (respostaId) => {
  try {
    const response = await fetch(`respostas/${respostaId}/comentarios`);
    if (!response.ok) {
      throw new Error("Erro ao buscar comentários por resposta ID");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar comentários por resposta ID:", error);
    return [];
  }
};

export const criarComentario = async (comentario) => {
  try {
    const response = await fetch(`${baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comentario),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar comentário:", error);
    return null;
  }
};

export const atualizarComentario = async (id, comentario) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comentario),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar comentário:", error);
    return null;
  }
};

export const deletarComentario = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar comentário:", error);
    return null;
  }
};

