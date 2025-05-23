import  React, { forwardRef, LegacyRef } from "react";
import { TextInputProps } from "react-native";
import { Text, View, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import {style} from "./style";
import Icon from 'react-native-vector-icons/MaterialIcons';




export function  Input(props: TextInputProps & { nome?: string, place?: string; icon?: string; privado?: boolean; })  {

    const {
        nome,
        place,
        icon,
        privado,
    } = props;

    return(
      <>

      {nome ? <Text style={style.titulo}>{nome}</Text> : null}

      <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 }}>
        {icon ? (
          <Icon name={icon} size={24} color="#000" style={{ marginRight: 10 }} {...props}/>
        ) : null}
        <TextInput
          placeholder={place}
          style={{ flex: 1, height: 40 }}
          secureTextEntry={privado}
        />
      </View>

      
      
      </>
    )

}