import api from ".";

 export async function setHecha(actividadId) {
  try {
    const response = await api.put('/usuario/estado', { actividadId: actividadId } ,{
        headers: {
            Authorization : localStorage.getItem('token')
        }
    })
    return response.data 
  } catch (error) {
    throw new Error(error)
  }
}
