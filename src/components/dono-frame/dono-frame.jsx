import axios from "axios"
import { useState } from "react";
import { useQuery } from '@tanstack/react-query';

const fetchDonos = () => {
    return axios.get(`https://dggraffledev.azurewebsites.net/api/Raffle/CharityMoneyRaised`)
};

const fetchPool = () => {
    return axios.get(`https://dgg-raffle-api.azurewebsites.net/api/Raffle/CharityMoneyPool`)
};


const DonoFrame = () => {

    let [chatterName, setChatterName] = useState('');
    let [chatterMovie, setChatterMovie] = useState('');
    let [dono, setDono] = useState('');

    const resetBoxes = () => {
        setChatterMovie('');
        setChatterName('');
        setDono('');
    }

    const { refetch } = useQuery(
        ['fetchDono'],
        fetchDonos,{
            enabled: false
        }
    )

    const { data, refetch: refetchPool } = useQuery(
        ['fetchPool'],
        fetchPool,{
            refetchOnMount: true,
            refetchOnWindowFocus: true
        }
    )
    console.log({data})

    const addRaffleEntry = () =>{
        console.log({chatterMovie, chatterName, dono})
        axios
             .post(`https://dgg-raffle-api.azurewebsites.net/api/Raffle/RaffleEntry`, {
                "chatterName": chatterName,
                "movieName": chatterMovie,
                "moneyDonated": dono
             })
             .then(resetBoxes())
        
             
        setTimeout(() => {  refetch() }, 1000);
        setTimeout(() => {  refetchPool() }, 1000);
    }

    const handleChatterName = (event) => {
        setChatterName(event.target.value);
    };

    const handleChatterMovie = (event) => {
        setChatterMovie(event.target.value);
    };

    const handleChatterDono = (event) => {
        setDono(event.target.value);
    };

    return (
        <>
            <div className='flex justify-center'>
                <div className="flex flex-col ">
                    <input onChange={handleChatterName} value={chatterName} className="mt-10 mr-5 h-10 rounded-lg font-bold" placeholder="Chatter's Name"></input>
                    <input onChange={handleChatterMovie} value={chatterMovie} className="mt-10 mr-5 h-10 rounded-lg font-bold" placeholder="Movie's Name"></input>
                    <input onChange={handleChatterDono} value={dono} type="number" className="mt-10 mr-5 h-10 rounded-lg font-bold" placeholder="Donation"></input>
                    <button className={`mt-10 mr-5 bg-gradient-to-r from-blue-300 to-pink-300 hover:bg-blue-700 text-amber-900 text-3xl font-light py-2 px-4 rounded
                    ${chatterName === '' || dono <= 0 || chatterMovie === '' ? "bg-blue-500 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => addRaffleEntry()}>
                            Add raffle entry
                    </button>
                </div>
                <iframe src=" https://www.againstmalaria.com/destiny#MainContent_UcFundraiserSponsors1_grdDonors" id='dono' title="dono drive" className="w-[1000px] h-[500px]"></iframe>   
                <div className="flex flex-col ">
                    <text className="ml-5 text-[40px] font-sans text-white mt-20">
                        Current pool:
                    </text>
                    <text className="flex ml-5 text-[40px] font-sans text-green-600 justify-center animate-pulse">
                        ${((isNaN(data?.data?.data) ? 0 : + data?.data?.data + 1)).toFixed(2)}
                    </text>
                </div>         
            </div>
        </>
    )
}

export default DonoFrame