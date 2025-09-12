// api/person.ts
import axios from "axios"
import * as ChurchToolsClient from "@churchtools/churchtools-client";

const { churchtoolsClient, activateLogging } = ChurchToolsClient;

activateLogging();

churchtoolsClient.get('/whoami').then(whoAmI => {
    console.log(whoAmI);
}).catch(error => {
    console.error(error);
});

export function initChurchToolsClient(baseUrl: string, loggingEnabled = false) {
    churchtoolsClient.setBaseUrl(baseUrl);
    if (loggingEnabled) {
        activateLogging();
    }
}

export function handleError(error: any) {
    if (error.response && error.response.data) {
        alert(error.response.data.translatedMessage || error.response.data.message);
    } else {
        console.error(error);
        alert(
            error +
            '\nProbably the CORS headers are not set correctly.' +
            '\nPlease check your console output and refer to the documentation for more information.'
        );
    }
}

export function login(username: string, password: string) {
    return churchtoolsClient.post('/login', {
        username,
        password
    });
}

export async function logout() {
    console.log("logout")
    return churchtoolsClient.post('/logout');
}

export async function getPersonById(id?: number) {
    try {
        const data = await churchtoolsClient.get(`/persons/${id}`);
        console.log("Data:", data);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getAllPersons(statuses?: number[]) {
    try {
        const data = await churchtoolsClient.get(`/persons`, {
            status_ids: statuses
        });
        console.log("Data:", data);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
