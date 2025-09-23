export const myApplicationsPromise =email=>{
    return fetch(`http://localhost:5002/applications?email=${email}`).then(res=>res.json()).then()
}