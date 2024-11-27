import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

export default class NextInputEventEmmiter extends EventEmitter{
    focusedInputIndex = 0;
    textInputsCount = 0
    constructor(textInputsCount:number){
        super()
        this.textInputsCount = textInputsCount
    }
    focusNextTextInput(){
        if(this.focusedInputIndex === this.textInputsCount){
            return
        }

        this.focusedInputIndex+=1
        this.emit('onChangeFocusedInputIndex',this.focusedInputIndex)
    }
    focusTextInput(index:number){
        this.focusedInputIndex = index
        this.emit('onChangeFocusedInputIndex',this.focusedInputIndex)
    }
}