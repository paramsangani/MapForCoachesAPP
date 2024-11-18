import { useEffect, useState } from "react";

const fetchHomeProduct=()=>{

    const [isLoading, setIsLoading] = useState(false);
    
    const [data, setData] = useState([]);
        
    const[error, setError] = useState(null);

    console.log("This hook is getting called");

    const fetchData=async() => {

        try{
            setIsLoading(true);
            //

            setIsLoading(false);

        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false);
        }

    }

    
    useEffect(()=>{
        fetchData();

    },[]);

    return {isLoading, error}
}

export default fetchHomeProduct;