import { FormContext } from "@/components/Form"
import { useContext } from "react"

const useForm = ()=>{
    const context = useContext(FormContext)

    if(!context){
        throw Error("Context can´t be null")
    }

    return context
}

export default useForm