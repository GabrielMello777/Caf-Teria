import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { themas } from "../../src/app/global/themes";
const { width, height } = Dimensions.get('window');



export const style = StyleSheet.create({




produtos: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingVertical: 20,
  gap: 20,
},

bara: {
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingVertical: 16,
  backgroundColor: "rgb(102, 0, 255)", 
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
}


});
