import { useState, useEffect } from "react"
import axios from "axios"

export const useCharityMoneyRaised = () => {

    const fetchData = () => {
            return axios.get(`https://dggraffledev.azurewebsites.net/api/Raffle/CharityMoneyRaised`);
    };

    return [fetchData];
}