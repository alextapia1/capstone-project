import axios from "axios";

//AXIOS UTIL FUNCTIONS
const baseURL = process.env.REACT_APP_BASE_URL;

export async function getDates() {
    try{
        const res = await axios.get(`${baseURL}/dates`)
        return res.data;
    } catch {
        return "Failed to request Date"
    }
}   

export async function postDate(addDate) {
    try{
        
        const res = await axios.post(`${baseURL}/dates`, addDate)
        console.log(res.data)
        return res.data;
    } catch {
        return "Failed to add a new Date";
    }
}

export async function deleteDate(date_ItemId){
    try{
        const res = await axios.delete(`${baseURL}/${date_ItemId}`)
        return res;
    } catch {
        return "Failed to delete Date"
    }
}

export async function patchDate(editDate){
    try{
        const res = await axios.patch(`${baseURL}/dates`, editDate)
        return res.data;
    } catch {
        return "Failed to edit Date"
    }
}