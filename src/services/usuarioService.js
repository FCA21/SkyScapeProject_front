import api from ".";

async function getPerfil() {
    try {
        const { data } = await api.get('/usuario/getPerfil', {
            headers:{
            Authorization: localStorage.getItem('token'),
        },
        
})
return data 
} catch (error) {
    throw new Error(error)
} 
}

export  {getPerfil}