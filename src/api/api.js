import axios from 'axios';


export const fetchAllData = async () => {
    try {
        await axios.get("")
    } catch {
        console.log("Erreur lors de la de la recuperation des donnees")
    }
}
