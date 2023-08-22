/* eslint-disable react/prop-types */
import { createContext } from "react";
import { UserData } from '../data/database'

export const DataContext = createContext()

export const DataContextProvider = ({children}) => {

    const mes = UserData.map(data => data.mes)
    const recebidos = UserData.map(data => data.recebidos)
    const despesas = UserData.map(data => data.despesas)
    const investido = UserData.map(data => data.investido)


    return(
        <DataContext.Provider value={{mes, recebidos, despesas, investido}}>
            {children}
        </DataContext.Provider>
    )
}