import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi'

export const InOutCard = () => {
  return (
    <div className="w-full flex justify-evenly col-span-2 p-3">
      <div className="w-2/5 h-5/6 aspect-video bg-blue-200 rounded-lg flex flex-col justify-between p-2 shadow-md border border-blue-300">
        <p className='text-xl text-amber-700 font-bold'>Entradas</p>
        <p className='self-center text-3xl'>R$ 4.650,60</p>
        <GiReceiveMoney className='self-end text-3xl'/>
      </div>
      <div className="w-2/5 h-5/6 aspect-video bg-red-200 rounded-lg flex flex-col justify-between p-2 shadow-md border border-red-300">
        <p className='text-xl text-amber-700 font-bold'>Despesas</p>
        <p className='self-center text-3xl'>R$ 1,610,00</p>
        <GiPayMoney className='self-end text-3xl'/>
      </div>
    </div>
  )
}
