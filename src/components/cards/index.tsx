import { View, Text, Image, ImageProps, TouchableOpacityProps, } from "react-native";
import { useState } from "react";
import { style } from "./style";
import {Botao} from "../botao/index"

export function Card(props: ImageProps & TouchableOpacityProps &  { titulo?: string; image?: Required<ImageProps>; func?: () => void; })  {

   const {
        titulo,
        image,
        func,
    } = props;



    return(


<View style={style.card}>

    <Text {...props}>{titulo}</Text>
    
    <Image
        source={image}
        style={style.img}
        resizeMode="cover"
        />

<Botao nome={"Ver produto"} onPress={func}></Botao>


</View>

    )


}