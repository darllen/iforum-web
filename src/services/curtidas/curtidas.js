const baseURL = "http://localhost:8081/curtidas";

// Adicionar ou remover curtida (toggle)
export const toggleCurtida = async (id_usuario, id_resposta) => {
    try {
        const response = await fetch(`http://localhost:8081/curtidas/toggle`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id_usuario, id_resposta}),
        });

        if (!response.ok) {
            throw new Error("Erro ao alternar curtida");
        }

        const data = await response.json();

        // Retorna a quantidade de curtidas atualizada da resposta
        return data.curtidasResposta;
    } catch (error) {
        console.error("Erro ao alternar curtida:", error);
        return null;
    }
};

export const verificarCurtidasUsuario = async (id_usuario, id_pergunta) => {
    try {
        const response = await fetch(`${baseURL}/usuario/${id_usuario}/pergunta/${id_pergunta}/respostas`);
        if (!response.ok) {
            throw new Error("Erro ao verificar curtidas");
        }
        const respostasCurtidas = await response.json();
        return respostasCurtidas;  // Retorna a lista de IDs das respostas curtidas
    } catch (error) {
        console.error("Erro ao verificar curtidas:", error);
        return [];
    }
};
