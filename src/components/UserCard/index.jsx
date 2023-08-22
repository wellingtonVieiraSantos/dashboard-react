import  avatar  from '../../assets/avatar.png'

export const UserCard = () => {
  return (
    <div className="h-40 flex flex-col items-center aspect-square">
        <img src={avatar} alt="avatar de usuario" className='w-24' />
        <p>Ton</p>
        <span className='text-sm'>email@email.com</span>
    </div>
  )
}
