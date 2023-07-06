import dgglGif from '../../assets/dggl-destiny-gif.gif'
import axios from "axios"
import { useEffect, useState } from 'react';

const DonoComponent = () => {
    let [moneyDonated, setMoneyDonated] = useState(0)
    
    useEffect(() => {
        axios
            .get(`https://dggraffledev.azurewebsites.net/api/Raffle/CharityMoneyRaised`)
            .then(response => setMoneyDonated(response.data.data))
    }, []);

    return (
        <>
            <div className='flex justify-center space-x-5'>
                <img src={dgglGif} alt='' className="w-48"></img>
                <text className="text-[50px] font-sans text-white mt-20">
                    DGG DONO GOAL
                </text>
                <text className="text-[50px] font-sans text-red-600 mt-20 animate-pulse">
                    ${((+moneyDonated)).toFixed(2)}
                </text>
                <text className="text-[50px] font-sans text-white mt-20">
                    /
                </text>
                <text className="text-[50px] font-sans text-green-600 mt-20 animate-bounce">
                    ${((++moneyDonated)).toFixed(2)}
                </text>
            </div>
        </>
    )
}

export default DonoComponent