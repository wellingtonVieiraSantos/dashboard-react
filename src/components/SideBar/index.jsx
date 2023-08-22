import { LinkTree } from '../LinkTree'
import { UserCard } from '../UserCard'

export const SideBar = () => {
  return (
    <nav className="w-1/5 h-screen bg-slate-700 text-slate-100 flex flex-col items-center p-3 gap-10">
        <img src="./src/assets/logo.png" alt="" className='w-20 aspect-square -hue-rotate-270'/>
        <UserCard/>
        <LinkTree/>
    </nav>
  )
}
