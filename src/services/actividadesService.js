import api from ".";


const getAllActivities = async () => {
    try {
        const { data } = await api.get('/actividad', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        
        const array = [data[0], data[1], data[2], data[3]]
        return array
    } catch (error) {
        throw new Error(error)
    }
}


export {
    getAllActivities
}