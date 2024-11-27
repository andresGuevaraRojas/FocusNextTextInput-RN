import React, { createContext, ReactNode, useMemo } from "react";
import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";
import NextInputEventEmmiter from "./NextInputEventEmmiter";

type Context = {
    focusNextTextInput:()=>void, 
    onChangeFocusedInputIndex:(callback:(index:number)=>void)=>VoidFunction
    focusTextInput:(index:number)=>void
}

export const FormContext = createContext<Context | null>(null)

export default function Form({lastIndex,children}:{lastIndex:number,children:ReactNode}) {
    const eventEmmiter = useMemo(()=>{
        return new NextInputEventEmmiter(lastIndex)
    },[])

    return (
        <FormContext.Provider value={{            
            focusNextTextInput:()=> {eventEmmiter.focusNextTextInput()},     
            focusTextInput: (index:number)=>{eventEmmiter.focusTextInput(index)},          
            onChangeFocusedInputIndex:(callback)=>{                
                const sub = eventEmmiter.addListener('onChangeFocusedInputIndex',callback)
                return ()=>{                   
                    sub.remove()
                }
            }
        }}>           
            {children}          
        </FormContext.Provider>
    )
}
