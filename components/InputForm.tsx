import { useContext, useRef } from "react";
import { TextInput,StyleSheet, TextInputProps, NativeSyntheticEvent, TextInputSubmitEditingEventData, TextInputFocusEventData } from "react-native";
import { FormContext } from "./Form";

export default function InputForm({index=0,onSubmitEditing,onFocus,...props}:TextInputProps & {index:number}) {
    const formContext = useContext(FormContext)
    const inputRef = useRef<TextInput>(null)

    if(formContext?.currentIndex === index){
        inputRef.current?.focus()
    }
    
    return <TextInput 
        {...props}
        ref={inputRef}     
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>)=>{
            if(onSubmitEditing){
                onSubmitEditing(e)
            }            
            formContext?.updateCurrentIndex(index + 1)
        }}
        onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>)=>{
            if(onFocus){
                onFocus(e)
            }
            formContext?.updateCurrentIndex(index)
        }}
        
    />
}