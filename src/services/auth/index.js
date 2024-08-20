
async function requestAPI(url, method, body, additionalHeader) {
    const baseURL = "http://localhost:8081";

    const defaultHeaders = {
        "Content-type": "application/json",
    };
    const headers = { ...defaultHeaders, ...additionalHeader };
    const response = await fetch(`${baseURL}/${url}`, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: headers,
    });

    return response;
}

const signInAPI = async (email, senha) => {
    try {
        const body = {
            email: email.toLowerCase(),
            senha: senha,
        };

        const res = await requestAPI(`usuarios/login`, "POST", body, null);
        if (!res.ok) {
            const errorData = await res.json();
            console.log("Error:" + errorData)
        }

        return await res.json();
    } catch (error) {
        console.log(error);

        console.log("Error:" + error)
    }
};

const registerInAPI = async ({ nome, email, senha }) => {
    try {
        const body = {
            nome: nome,
            email: email,
            senha: senha,
        };

        const res = await requestAPI(`usuarios`, "POST", body, null);

        // Leia o corpo da resposta apenas uma vez
        const data = await res.json();

        if (!res.ok) {
            console.log("Error:", data);
            return null;
        }

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export {
    registerInAPI,
    signInAPI,
};
