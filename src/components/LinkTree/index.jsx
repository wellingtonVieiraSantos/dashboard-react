import {AiOutlineDashboard, AiOutlineWallet, AiOutlineBank} from 'react-icons/ai'
import {BiCategoryAlt, BiExit} from 'react-icons/bi'
import { PiArrowsLeftRightBold} from 'react-icons/pi'

import { Link } from '../Link'

export const LinkTree = () => {
  return (
    <div className='w-full flex flex-col items-center gap-1'>
            <Link>
                <AiOutlineDashboard />
                <span>Dashboard</span>
            </Link>
            <Link>
                <AiOutlineWallet />
                <span>Carteira</span>
            </Link>
            <Link>
                <BiCategoryAlt />
                <span>Categorias</span>
            </Link>
            <Link>
                <PiArrowsLeftRightBold />
                <span>Transações</span>
            </Link>
            <Link>
                <AiOutlineBank />
                <span>Extrato</span>
            </Link>
            <Link>
                <BiExit />
                <span>Sair</span>
            </Link>
        </div>
  )
}
