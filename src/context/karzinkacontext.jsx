import { createContext, useEffect, useState } from "react";



export const KarzinkaContext = createContext([]);

function KarzinkaProvider({ children }) {
  const storg = JSON.parse( localStorage.getItem('Product') || [])
  const [basketData, setBasketdata] = useState(storg);



  const addBasket = (data) => {

    const isExist = basketData.some((item) => item.id === data.id);
    if (!isExist) {
      setBasketdata([...basketData, data]);
    }
  };

  const onDelet = (id) => {
    const newData = basketData.filter((item) => item.id !== id);
    setBasketdata(newData);
  };

  useEffect(() => {
    localStorage.setItem('Product',JSON.stringify(basketData))
  },[basketData])



  return (
    <KarzinkaContext.Provider value={{ basketData, addBasket, onDelet}}>
      {children}
    </KarzinkaContext.Provider>
  );
}
export default KarzinkaProvider;
