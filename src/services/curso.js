async function requestAPI(url, method, body, additionalHeader) {
    const baseURL = "http://localhost:8081";

    const defaultHeaders = {
        "Content-type": "application/json",
    };
    const headers = {...defaultHeaders, ...additionalHeader};
    const response = await fetch(`${baseURL}/${url}`, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: headers,
    });

    return response;
}


const disciplinasPorCurso = async (idCurso) => {
    try {
        const res = await requestAPI(`cursos/` + idCurso + "/disciplinas", "GET", null, null);
        if (!res.ok) {
            const errorData = await res.json();
            console.log("Error:" + errorData)
        }

        return await res.json();
    } catch (error) {
        console.log(error);

        console.log("Error:" + error)
    }
}

export {
    disciplinasPorCurso,
}