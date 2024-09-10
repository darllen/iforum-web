const baseURL = "http://localhost:8081/usuarios";

export const fetchTopUsuarios = async () => {
    try {
        const response = await fetch(`${baseURL}?orderBy=total_curtidas&limit=5`);
        if (!response.ok) {
            throw new Error("Erro ao buscar usuários");
        }
        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        return [];
    }
};

export const fetchUserInfo = async (usuarioId) => {
    try {
        const response = await fetch(`${baseURL}/${usuarioId}/contagem`);

        if (!response.ok) {
            throw new Error("Erro ao buscar usuários");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        return [];
    }
};


export const fetchUsuarioPorId = async (id) => {
    try {
        const response = await fetch(`${baseURL}/${id}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar usuário");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return null;
    }
};

export const atualizarUsuario = async (id, usuario) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(usuario),
        });
        return await response.json();
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        return null;
    }
};

export const deletarUsuario = async (id) => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {method: "DELETE"});
        return await response.json();
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        return null;
    }
};
