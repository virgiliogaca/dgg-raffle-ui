import { useState, useEffect } from "react"
import axios from "axios"

export const useCharityMoneyRaised = () => {
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://dggraffledev.azurewebsites.net/api/Raffle/CharityMoneyRaised`);
            setResponse(res.data);
        } catch(error){
            console.error('Error getting the charity money raised data: ', error)
        }
    };

    useEffect(()=> {
        fetchData();
    }, []);

    return [response, fetchData];
}