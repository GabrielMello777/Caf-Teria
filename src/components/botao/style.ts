import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { themas } from "../../../src/app/global/themes";
const { width, height } = Dimensions.get('window');



export const style = StyleSheet.create({


button: {
  width: "100%",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 2, 
},

buttonText: {
  fontSize: 12,
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: 1,
  textAlign: "center",
},



});
