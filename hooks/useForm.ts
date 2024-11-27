import { FormContext } from "@/components/Form"
import { RefObject, useContext, useEffect } from "react"
import { TextInput } from "react-native"

const useForm = (ref:RefObject<TextInput>,index:number)=>{
    const context = useContext(FormContext)

    if(!context){
        throw Error("Context can´t be null")
    }

    useEffect(()=>{
        const subs = context.onChangeFocusedInputIndex((currentIndex)=>{
            if(currentIndex === index){                
                ref.current?.focus()
            }
        })

        return ()=>{               
            subs()
        }
    },[])

    return {
        focusNextTextInput:context.focusNextTextInput,
        focusTextInput:context.focusTextInput,        
    }
}

export default useForm