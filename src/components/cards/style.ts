import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { themas } from "../../../src/app/global/themes";
const { width, height } = Dimensions.get('window');



export const style = StyleSheet.create({



card:{

width: "40%",
height: width * 0.5,
borderWidth: 2,
borderColor: "black",
borderRadius: 20,
justifyContent: "flex-start",
alignItems: "center",
textAlign: "center",



},

img:{

    paddingTop: 30,
width: width * 0.3,
height: width * 0.3,
borderRadius: 20,
borderWidth: 2,


}


});
