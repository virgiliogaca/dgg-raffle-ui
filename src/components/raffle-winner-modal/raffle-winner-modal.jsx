import conffetti from '../../assets/conffetti.gif'

const RaffleWinnerModal = (
    {
        handleChange,
        winnerChatter
    }
) => {
    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blue-100 outline-none focus:outline-none">
                {/*header*/}
                
                <img src={conffetti} alt='' className="flex fixed w-72 -ml-2 justify-center items-center"></img>
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-400 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Congratulations!!
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg font-bold leading-relaxed">
                    Winner chatter:
                  </p>
                  <p className="my-4 text-slate-500 text-lg font-light leading-relaxed">
                    {winnerChatter.chatterName}
                  </p>
                  <p className="my-4 text-slate-500 text-lg font-bold leading-relaxed">
                    Movie to watch:
                  </p>
                  <p className="my-4 text-slate-500 text-lg font-light leading-relaxed">
                    {winnerChatter.chatterMovie}
                  </p>
                  <p className="my-4 text-slate-500 text-lg font-bold leading-relaxed flex justify-center">
                    YEE Wins
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gradient-to-r from-blue-300 to-pink-300 hover:bg-blue-700 text-amber-900 text-3xl font-light px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleChange(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        
    )
}

export default RaffleWinnerModal;