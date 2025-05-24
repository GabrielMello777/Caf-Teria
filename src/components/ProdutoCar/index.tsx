import { View, Text, Image, ImageProps, TouchableOpacityProps } from "react-native";
import { useState } from "react";
import { style } from "./style";
import { Botao } from "../botao/index"; // Assuming Botao component is correctly imported

export function Produto(props: ImageProps & TouchableOpacityProps & {
    titulo?: string;
    image?: ImageProps['source']; // Correct type for image source
    func?: () => void;
    funcMais?: () => void;
    funcMenos?: () => void;
    preco?: number;
    quantia?: number;
}) {

    const {
        titulo,
        image,
        funcMais,
        funcMenos,
        preco,
        quantia,
    } = props;

    return (
        <View style={style.card}>
            <View style={style.leftSection}>
                <Text style={style.titleText}>{titulo}</Text>
                {image && ( 
                    <Image
                        source={image}
                        style={style.img}
                        resizeMode="cover"
                    />
                )}
            </View>

            <View style={style.rightSection}>
                <Text style={style.priceLabel}>Preço</Text>
                <Text style={style.priceValue}>R${preco != null ? preco.toFixed(2) : '0.00'}</Text>
                <View style={style.quantityControl}>
                    <Botao nome={"-"} onPress={funcMenos} style={style.buttonMinus} />
                    <Text style={style.quantityText}>{quantia != null ? quantia : 1}</Text>
                    <Botao nome={"+"} onPress={funcMais} style={style.buttonPlus} />
                </View>
            </View>
        </View>
    );
}