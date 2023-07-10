import { useQuery } from '@tanstack/react-query';
import dgglGif from '../../assets/dggl-destiny-gif.gif'
import axios from "axios"

const fetchDonos = () => {
    return axios.get(`https://dgg-raffle-api.azurewebsites.net/api/Raffle/CharityMoneyRaised`)
};

const DonoComponent = () => {

    const { data } = useQuery(
        ['fetchDono'],
        fetchDonos,{
            refetchOnMount: true,
            refetchOnWindowFocus: true
        }
    )
    console.log({data})

    return (
        <>
            <div className='flex justify-center space-x-5'>
                <img src={dgglGif} alt='' className="w-48"></img>
                <text className="text-[50px] font-sans text-white mt-20">
                    DGG DONO GOAL
                </text>
                <text className="text-[50px] font-sans text-red-600 mt-20 animate-pulse">
                    ${((isNaN(data?.data?.data) ? 0 : + data?.data?.data)).toFixed(2)}
                </text>
                <text className="text-[50px] font-sans text-white mt-20">
                    /
                </text>
                <text className="text-[50px] font-sans text-green-600 mt-20 animate-bounce">
                    ${((isNaN(data?.data?.data) ? 0 : + data?.data?.data + 1)).toFixed(2)}
                </text>
            </div>
        </>
    )
}

export default DonoComponent