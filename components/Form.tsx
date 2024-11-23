import React, { createContext, ReactNode, useRef } from "react";
import {StyleProp, View, ViewStyle } from "react-native";
import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

type Context = {
    updateCurrentIndex:(index:number)=>void, 
    onCurrentIndexChange:(callback:(index:number)=>void)=>VoidFunction
}

export const FormContext = createContext<Context | null>(null)

export default function Form({lastIndex,children,style}:{lastIndex:number,children:ReactNode,style:StyleProp<ViewStyle>}) {
    const eventEmmiter = new EventEmitter()

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
            <View style={style}>
                {children}
            </View>            
        </FormContext.Provider>
    )
}
