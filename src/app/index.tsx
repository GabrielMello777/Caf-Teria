import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,TextInput,TouchableOpacity,Alert,ActivityIndicator, SafeAreaView,Keyboard } from "react-native";
import {Link} from "expo-router";
import { useState, useRef, useEffect } from 'react';
import {useRouter, useFocusEffect} from 'expo-router';
import { useFonts } from 'expo-font';

export default function Home() {

const router = useRouter();

useEffect(() => {

  setTimeout(() => {
router.push('/tabs')
  });

}, []);


return(

<View> 
<Link href="./tabs" asChild>
<Text>AAAAAAAA</Text>
</Link>


</View>
)


}