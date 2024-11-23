import { useEffect, useRef } from "react";
import { TextInput, TextInputProps, NativeSyntheticEvent, TextInputSubmitEditingEventData, TextInputFocusEventData } from "react-native";
import useForm from "@/hooks/useForm";

export default function InputForm({index=0,onSubmitEditing,onFocus,...props}:TextInputProps & {index:number}) {
    const formContext = useForm()
    const inputRef = useRef<TextInput>(null)

    useEffect(()=>{
        const subs = formContext.onCurrentIndexChange((currentIndex)=>{
            if(currentIndex === index){
                inputRef.current?.focus()
            }
        })

        return ()=>{
            subs()
        }
    },[])

    
    
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