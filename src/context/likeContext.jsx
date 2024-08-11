import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const Likecontext = createContext(null);
  



const Likeprovider = ({ children }) => {
  const [swproduct, setSwProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = () => {
    axios
      .get("https://ee013ca3e182458e.mokky.dev/idea_text1")
      .then((res) => {
        setSwProduct(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false); 
      });
  };

  useEffect(() => {
    getData();
  }, []);


  

  return (
    <Likecontext.Provider value={{ swproduct, isLoading }}>
      {children}
    </Likecontext.Provider>
  );
};

export default Likeprovider;





export const Productcontext2 = createContext(null);


const Productprovider2 = ({ children }) => {
  const [swproduct3, setSwProduct3] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = () => {
    axios
      .get("https://ee013ca3e182458e.mokky.dev/idea_text3")
      .then((res) => {
        setSwProduct3(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false); 
      });
  };

  useEffect(() => {
    getData();
  }, []);


  

  return (
    <Productcontext2.Provider value={{ swproduct3, isLoading }}>
      {children}
    </Productcontext2.Provider>
  );
};

export {Productprovider2};




export const Productcontext = createContext(null);


const Productprovider = ({ children }) => {
  const [swproduct2, setSwProduct2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getData = () => {
    axios
      .get("https://ee013ca3e182458e.mokky.dev/idea_text2")
      .then((res) => {
        setSwProduct2(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false); 
      });
  };

  useEffect(() => {
    getData();
  }, []);


  

  return (
    <Productcontext.Provider value={{ swproduct2, isLoading }}>
      {children}
    </Productcontext.Provider>
  );
};

export {Productprovider};
