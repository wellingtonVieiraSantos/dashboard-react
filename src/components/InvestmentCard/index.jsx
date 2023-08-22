import {BsHouseSlash, BsHouseCheck} from 'react-icons/bs'

export const InvestmentCard = () => {
  return (
    <div className='bg-slate-100 rounded-lg shadow-md flex flex-col justify-around p-2'>
        <h2 className='text-xl font-bold text-amber-700'>Meta de Investimento:</h2>
        <p>Casa Própria</p>
        <p className='text-xs'>R$ <span className='font-bold'>2060,00</span> de R$ <span className='font-bold'>100.000,00</span></p>
        <div className='flex justify-between items-center gap-4 text-lg'>
            <BsHouseSlash className='text-3xl'/>
            <input type="range" defaultValue="5" className="w-full h-4 bg-slate-50 rounded-lg appearance-none cursor-pointer dark:bg-gray-200"/>
            <BsHouseCheck className='text-3xl'/>
        </div>
    </div>
  )
}
