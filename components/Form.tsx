import React, { createContext, ReactNode, useState } from "react";
import {StyleProp, View, ViewStyle } from "react-native";

type Context = {
    currentIndex:number,
    updateCurrentIndex:(index:number)=>void,
}

export const FormContext = createContext<Context | null>(null)

export default function Form({lastIndex,children,style}:{lastIndex:number,children:ReactNode,style:StyleProp<ViewStyle>}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <FormContext.Provider value={{
            currentIndex: currentIndex,
            updateCurrentIndex: (index: number) => {
                if(index>lastIndex){
                    return
                }
                setCurrentIndex(index)                 
            },                      
        }}>
            <View style={style}>
                {children}
            </View>            
        </FormContext.Provider>
    )
}
