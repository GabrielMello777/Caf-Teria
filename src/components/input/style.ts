import { StyleSheet, Dimensions, StatusBar } from "react-native";


const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
 
  txtinpt: {
    height: height * 0.06,
    width: width * 0.85,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 10,
    fontFamily: 'Roboto-Regular',
    textAlign: "center",
justifyContent: "center",
alignItems: "center",
  },



titulo: {
  fontWeight: "bold",
  textAlign: "center",
  marginVertical: 20,
  fontFamily: "Montserrat-Bold",
  justifyContent: "center",
  alignItems: "center",
},

});
