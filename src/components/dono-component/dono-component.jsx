import dgglGif from '../../assets/dggl-destiny-gif.gif'
import { useCharityMoneyRaised } from '../../hooks/useCharityMoneyRaised';
import { useEffect } from 'react';

const DonoComponent = () => {
    // eslint-disable-next-line
    let [response, fetchData] = useCharityMoneyRaised();

    // eslint-disable-next-line
    useEffect(()=> {
        // eslint-disable-next-line
        fetchData();
    }, [response, fetchData]);

    return (
        <>
            <div className='flex justify-center space-x-5'>
                <img src={dgglGif} alt='' className="w-48"></img>
                <text className="text-[50px] font-sans text-white mt-20">
                    DGG DONO GOAL
                </text>
                <text className="text-[50px] font-sans text-red-600 mt-20 animate-pulse">
                    ${((+response?.data)).toFixed(2)}
                </text>
                <text className="text-[50px] font-sans text-white mt-20">
                    /
                </text>
                <text className="text-[50px] font-sans text-green-600 mt-20 animate-bounce">
                    ${((+response?.data + 1)).toFixed(2)}
                </text>
            </div>
        </>
    )
}

export default DonoComponent