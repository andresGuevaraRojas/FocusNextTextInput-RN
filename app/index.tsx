import Form from "@/components/Form";
import InputForm from "@/components/InputForm";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Index() {

  const [name,setName] = useState("")

  return (
    <View
      style={styles.container}
    >
      <View style={styles.form}>
        <Form lastIndex={2}>
          <Text>Input 1</Text>
          <InputForm index={0} style={styles.input} value={name} onChangeText={text=>{setName(text)}} />
          
          <Text>Input 2</Text>
          <InputForm index={1} style={styles.input}/>

          <Text>Input 3</Text>
          <InputForm index={2} style={styles.input}/>
        </Form>       
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  form:{
    gap:8
  },
  input:{
    width:"100%",
    borderWidth:1,
    borderColor:"black"
  }
})