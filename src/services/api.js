
const domain = process.env.REACT_APP_API_DOMAIN + "/api";

const listInstitutions = async () => {
    const resp = await fetch(`${domain}/institutions`);
    return await resp.json();
}

const listPersonalLoansFromInstitution = async (id, page) => {
    const resp = await fetch(`${domain}/institutions/${id}/personal-loans?page=${page}`);
    return await resp.json();
}


export { listInstitutions, listPersonalLoansFromInstitution };