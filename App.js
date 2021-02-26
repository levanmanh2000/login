import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({ navigation }) {
  return(
    <View style={styles.all} >
        
        

        <TextInput style={styles.input} 
            placeholder='tai khoan' ></TextInput>

        <TextInput style={styles.input} 
            placeholder='mat khau' 
            secureTextEntry ></TextInput>

        <TouchableOpacity style={styles.btLogin} 
            title="LOGIN"
            onPress={() => navigation.navigate('Proo')} >
            <Text style={styles.textLogin} >LOGIN</Text>
        </TouchableOpacity>

    </View>
  );
}

function Proo({ navigation }) {
  return (
      <View style={styles.pr} >
          <Text>Profession</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
  );
}

const styles=StyleSheet.create({
  all:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
  },
  img:{
      width:300,
      height:150,
      resizeMode:'contain'
  },
  input:{
      width:300,
      height:40,
      backgroundColor:'#fff',
      borderRadius:5,
      fontSize:18,
      paddingHorizontal:15
  },
  btLogin:{
      width:300,
      height:50,
      backgroundColor:'#000',
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
      marginTop:40
  },
  textLogin:{
      color:'#fff',
      fontSize:18,
      fontWeight:'bold'
  },
  pr:{
    flex:1,
    fontSize:20,
    justifyContent:'center',
    alignItems:'center'
  }
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Proo" component={Proo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}