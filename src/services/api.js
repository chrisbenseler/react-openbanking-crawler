
const domain = process.env.REACT_APP_API_DOMAIN + "/api";

const listInstitutions = async () => {
    const resp = await fetch(`${domain}/institutions`);
    return await resp.json();
}

const listPersonalLoansFromInstitution = async (id) => {
    const resp = await fetch(`${domain}/institutions/${id}/personal-loans`);
    return await resp.json();
}


export { listInstitutions, listPersonalLoansFromInstitution };