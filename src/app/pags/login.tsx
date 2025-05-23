import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Keyboard,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Link } from 'expo-router';
import { useState, useRef, useEffect } from 'react';
import { useRouter, useFocusEffect } from 'expo-router';
import { useFonts } from 'expo-font';
import {Input} from "../../components/input/index";
import { Botao } from '../../components/botao';

export default function Home() {
  const router = useRouter();
const [verSenha, setVerSenha] = useState(true);
const [visivel, setVisivel] = useState(true);

function verSen() {

    setVerSenha(!verSenha);
setVisivel(!visivel);

}
  return (
    <SafeAreaView style={{ flex: 1}}>

 <ImageBackground   source={require("../../../assets/fundobg.png")} resizeMode="cover"      
 style={{ flex: 1,
    justifyContent: 'center',}}>


    <KeyboardAvoidingView  behavior="padding"  >


     <View style={{ alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'flex-end', 
        }}> 



<Image source={require("../../../assets/icon.png")} style={{width: 100, height: 100}}></Image>
</View>

<View style={{ alignSelf: 'center', alignItems: 'center', width: "80%" }}>
<Input nome='Email' icon='email'></Input>

<Input nome='Senha' icon='password' privado={visivel}>
  <TouchableOpacity onPress={verSen}>
    <Text style={{ fontSize: 18 }}>{verSenha ? '🙈' : '👁️'}</Text>
  </TouchableOpacity>
</Input>

<Text>{""}</Text>

<TouchableOpacity
  style={{
    backgroundColor: '#DDDDDD', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }}
  onPress={() => {
    Alert.alert('Login', 'Login realizado com sucesso!');
    router.push('/tabs');}} >
  <Text style={{ color: '#000000', fontSize: 16 }}>Logar</Text>
</TouchableOpacity>
 </View>
      <Text style={{ fontSize: 12, color: 'blue' }}>esqueceu a senha?</Text>
    </KeyboardAvoidingView>
</ImageBackground>

    </SafeAreaView>
  );
}