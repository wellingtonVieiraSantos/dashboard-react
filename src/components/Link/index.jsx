/* eslint-disable react/prop-types */

export const Link = ({children}) => {
  return (
    <a href="#" className='w-2/3 flex items-center justify-start rounded 
    cursor-pointer gap-3 text-lg p-2 hover:bg-slate-200 hover:text-amber-600'>
        {children}
    </a>
  )
}
