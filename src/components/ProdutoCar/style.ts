import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { themas } from "../../../src/app/global/themes"; // Assuming 'themas' is correctly defined

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    card: {
        width: "100%",
        height: width * 0.5, 
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#D3D3D3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    leftSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingRight: 10,
    },
    rightSection: {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'flex-end', 
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8, 
        color: '#333',
    },
    img: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 10, 
        borderWidth: 1,
        borderColor: '#ccc',
    },
    priceLabel: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    priceValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: width * 0.3, 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: '#333',
    },
    buttonMinus: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    buttonPlus: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderLeftWidth: 1,
        borderColor: '#ccc',
    },
});