export async function getUser(username, password) {
    //TODO: Connect to DB to fetch the users after hashing the passwords
    return {
        username,
        role: "admin",
    };
}
