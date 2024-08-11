import { createContext, useState } from "react";


export const TanlanganContext = createContext ([])


function TanlanganProvider ({children}) {
    const storg = JSON.parse( localStorage.getItem('Product'))
    const [likeData, setlikeData] = useState(storg)

    const addlike = (data) => {
        const isExist = likeData.some((item) => item.id === data.id)
        if(!isExist) {
            setlikeData([...likeData, data])
            localStorage.setItem('Product', JSON.stringify([...likeData, data]))
        }
    }

    return(
        <TanlanganContext.Provider value={{likeData, addlike}}>
            {children}
        </TanlanganContext.Provider>
    )
}

export default TanlanganProvider