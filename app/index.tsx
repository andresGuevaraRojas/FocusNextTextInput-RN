import Form from "@/components/Form";
import InputForm from "@/components/InputForm";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Form lastIndex={2} style={styles.form}>
        <Text>Input 1</Text>
        <InputForm index={0} style={styles.input} />
        
        <Text>Input 2</Text>
        <InputForm index={1} style={styles.input}/>

        <Text>Input 3</Text>
        <InputForm index={2} style={styles.input}/>
      </Form>      
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