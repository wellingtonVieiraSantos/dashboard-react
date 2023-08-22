import { BarChart } from '../BarChart'
import { LineChart } from '../LineChart'

import { InOutCard } from '../InOutCard'
import { SideCard } from '../SideCard'
import { InvestmentCard } from '../investmentCard'

export const Main = () => {

  return (
    <main className="w-4/5 p-1 flex flex-col bg-slate-200">
        <h1 className="text-2xl font-bold text-amber-700">Dashboard</h1>
        <div className="w-full items-end text-right">
            <h2 className='font-bold'>Bem-vindo, Ton!</h2>
            <p className="text-xs">Ultimo acesso dia 14 de Março</p>
        </div>
        <section className="h-[calc(100vh-80px)] grid grid-cols-3 grid-rows-3 gap-2">
            <InOutCard/>
            <SideCard/>
            <div className='bg-slate-100 rounded-lg col-span-2 shadow-md flex justify-center items-center'>
                <BarChart/>
            </div>
            <InvestmentCard/>
            <div className='bg-slate-100 rounded-lg shadow-md'>
                <LineChart/>
            </div>
        </section>
    </main>
  )
}
