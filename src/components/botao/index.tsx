import { View, Text, Image, ImageProps, TextInputProps,  TextInput, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { useState } from "react";
import { style } from "./style";



export function Botao(props: TouchableOpacityProps & { nome?: string})  {

   const {
       nome,
    } = props;



    return(


<View>

<TouchableOpacity {...props} style={style.button}>

<Text {...props} style={style.buttonText}>{nome}</Text>

</TouchableOpacity>


</View>

    )


}