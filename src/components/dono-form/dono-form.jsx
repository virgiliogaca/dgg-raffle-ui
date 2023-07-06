import axios from "axios"
import { useState } from 'react';
import { RaffleWinnerModal } from '../raffle-winner-modal';

const DonoForm = () => {
    let [winnerChatter, setWinnerChatter] = useState()
    const [showModal, setShowModal] = useState(false);

    const startTheRaffle = () =>{
        setShowModal(true);
        axios
             .get(`https://dggraffledev.azurewebsites.net/api/Raffle/RaffleWinner`)
             .then(response => setWinnerChatter(response.data.data))
    }

    console.log({winnerChatter});
    return (
        <>
            <div className='flex justify-center'>
                <button className={`bg-gradient-to-r from-blue-300 to-pink-300 hover:bg-blue-700 text-amber-900 text-3xl font-light py-2 px-4 rounded`}
                onClick={() => startTheRaffle()}>
                    BEGIN   THE   RAFFLE
                </button>
                {showModal ? <RaffleWinnerModal handleChange={() => setShowModal()} winnerChatter={winnerChatter}/> : null}
            </div>
            
        </>
    )
}

export default DonoForm