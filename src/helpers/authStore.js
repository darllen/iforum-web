export async function setUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
    const user = sessionStorage.getItem("user");

    if (user) {
        return JSON.parse(user);
    }

    return null;
}
