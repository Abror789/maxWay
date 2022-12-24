import axios from "axios"
import { baseURl } from "../../components/Variables"

export const getLinks=async()=>{
    const {data}=await axios.get(`${baseURl}links`)
    return data
}