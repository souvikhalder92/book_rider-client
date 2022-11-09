import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
      document.title = `${title} - Book Rider`;
    },[title])
}

export default useTitle;