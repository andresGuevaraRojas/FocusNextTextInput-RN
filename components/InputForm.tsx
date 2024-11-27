import { useRef } from "react";
import { TextInput, TextInputProps, NativeSyntheticEvent, TextInputSubmitEditingEventData, TextInputFocusEventData } from "react-native";
import useForm from "@/hooks/useForm";

export default function InputForm({index=0,onSubmitEditing,onFocus,...props}:TextInputProps & {index:number}) {
    
    const inputRef = useRef<TextInput>(null)

    const {focusNextTextInput,focusTextInput} = useForm(inputRef,index)

    return <TextInput        
        ref={inputRef}     
        onSubmitEditing={(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>)=>{
            if(onSubmitEditing){
                onSubmitEditing(e)
            }            
            focusNextTextInput()
        }}
        onFocus={(e: NativeSyntheticEvent<TextInputFocusEventData>)=>{
            if(onFocus){
                onFocus(e)
            }
            focusTextInput(index)
        }}
        {...props}
        
    />
}