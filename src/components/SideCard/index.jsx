import { PieChart } from '../PieChart'

export const SideCard = () => {
  return (
    <div className='bg-slate-100 rounded-lg row-span-3 p-2 shadow-md'>
        <div className='w-full h-1/3 p-3 border-b-[1px] border-black'>
            <p className='mb-5 text-amber-700 font-bold'>Últimas Transações</p>
            <div className='flex flex-col'>
                <p>+ <span className='text-xs'>Venda Armário: R$ 200,00</span></p>
                <p>- <span className='text-xs'>Aluguel: R$ 1000,00</span></p>
                <p>- <span className='text-xs'>Mensalidade Escola: R$ 610,00</span></p>
                <p>+ <span className='text-xs'>Salário: R$ 4450,60</span></p>
            </div>
        </div>
        <div className='w-4/5 h-2/3 p-5 flex flex-col gap-5 justify-center m-auto'>
            <h2>Gastos com cartão</h2>
            <PieChart/>
        </div>
     </div>
  )
}
