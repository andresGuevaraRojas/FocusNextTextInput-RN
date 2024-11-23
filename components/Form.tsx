import React, { createContext, ReactNode, useRef } from "react";
import {StyleProp, View, ViewStyle } from "react-native";
import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

type Context = {
    currentIndex:number,
    updateCurrentIndex:(index:number)=>void, 
    onCurrentIndexChange:(callback:(index:number)=>void)=>VoidFunction
}

export const FormContext = createContext<Context | null>(null)

export default function Form({lastIndex,children,style}:{lastIndex:number,children:ReactNode,style:StyleProp<ViewStyle>}) {

    const currentIndex = useRef(0)

    const eventEmmiter = new EventEmitter()

    return (
        <FormContext.Provider value={{
            currentIndex: currentIndex.current,
            updateCurrentIndex: (index: number) => {
                if(index>lastIndex){
                    return
                }
                currentIndex.current = index
                eventEmmiter.emit('onCurrentIndexChange',currentIndex.current)
            },                      
            onCurrentIndexChange:(callback)=>{
                const a = eventEmmiter.addListener('onCurrentIndexChange',callback)
                return ()=>{
                    a.remove()
                }
            }
        }}>
            <View style={style}>
                {children}
            </View>            
        </FormContext.Provider>
    )
}
