import React, { createContext, ReactNode, useMemo } from "react";
import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

type Context = {
    updateCurrentIndex:(index:number)=>void, 
    onCurrentIndexChange:(callback:(index:number)=>void)=>VoidFunction
}

export const FormContext = createContext<Context | null>(null)

export default function Form({lastIndex,children}:{lastIndex:number,children:ReactNode}) {
    const eventEmmiter = useMemo(()=>{
        return new EventEmitter()
    },[])

    return (
        <FormContext.Provider value={{            
            updateCurrentIndex: (index: number) => {
                if(index>lastIndex){
                    return
                }                                
                eventEmmiter.emit('onCurrentIndexChange',index)
            },                      
            onCurrentIndexChange:(callback)=>{                
                const sub = eventEmmiter.addListener('onCurrentIndexChange',callback)
                return ()=>{                   
                    sub.remove()
                }
            }
        }}>           
            {children}          
        </FormContext.Provider>
    )
}
