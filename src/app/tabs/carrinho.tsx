import {Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, Animated, Dimensions} from 'react-native';
import React, {JSX, useState, useRef, useEffect} from 'react';
import {style} from '../style';
import {Card} from '../../components/cards/index';
import {Alert} from 'react-native';
import {Tabs} from 'expo-router';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import carrinho from './carrinho';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Produto} from '../../components/ProdutoCar/index';
import { Botao } from '../../components/botao';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProdutoSalvo = {
  titulo: string;
  imagem: string;
  mensagem?: string;
};


export default function Home() {

  const [input, setInput] = useState('');
const [componente, setComponente] = useState<JSX.Element | null>(null);
const [Visible, setVisible] = useState(false);
const [modalData, setModalData] = useState({ title: '', message: '' });
const [titulo, setTitulo] = useState("");
const [mensagem, setmensagem] = useState("");
const [imagem, setImagem] = useState("");
const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

const { width } = Dimensions.get('window');
const slideAnim = useRef(new Animated.Value(-width * 0.75)).current;

const drawer= createDrawerNavigator();

const [quantia, setQuantia] = useState([0,]);
  const [quantiaProdutos, setQuantiaProdutos] = useState(0);
  const [produto, setProdutos] = useState<ProdutoSalvo[]>([]);

 useEffect(() => {
    const carregarProdutosSimples = async () => {
      try {
        const quantiaString = await AsyncStorage.getItem("quantia");
        const quantiaProdutosSalva = quantiaString ? parseInt(quantiaString, 10) : 0;
        setQuantiaProdutos(quantiaProdutosSalva);

        const produtosCarregados: ProdutoSalvo[] = [];

        for (let i = 0; i < quantiaProdutosSalva; i++) {
          const produtoString = await AsyncStorage.getItem(`produto${i}`);
          if (produtoString) {
            produtosCarregados.push(JSON.parse(produtoString));
          }
        }
        setProdutos(produtosCarregados);
      } catch (e) {
        console.error("Erro ao carregar produtos:", e);
      }
    };

    carregarProdutosSimples();
  }, []); 

  
const ProfDrawr = () => {


  return (
    <drawer.Navigator initialRouteName='' drawerContent={()=> <View> <Text>Oi</Text></View>} >
   

      <drawer.Screen name="Carrinho" component={carrinho} />

    </drawer.Navigator>
  );

}




    function addCarrinho(titulo: string, imagem: string, mensagem: string): void {
        

Alert.alert("Produto adicionado ao carrinho", `Título: ${titulo}\nImagem: ${imagem}\nMensagem: ${mensagem}`);


    }
  const openMenu = () => {
    setMostrarCarrinho(true); 
    Animated.timing(
      slideAnim,
      {
        toValue: 0, 
        duration: 300, 
        useNativeDriver: true, 
      }
    ).start();
  };

  const closeMenu = () => {
    Animated.timing(
      slideAnim,
      {
        toValue: -width * 0.75,
        duration: 300,
        useNativeDriver: true,
      }
    ).start(() => setMostrarCarrinho(false)); 
  };
interface ProductData {
    titulo: string;
    imageUrl: string;
    func?: () => void; 
}
const produtosData: ProductData[] = produto.map((prod, idx) => ({
  titulo: prod.titulo,
  imageUrl: prod.imagem,
  func: () => addCarrinho(prod.titulo, prod.imagem, prod.mensagem ?? ''),
  id: idx.toString(),
}));



return(

 
    <SafeAreaView style={{ flex: 1 , backgroundColor: "#AD8B70" }}> 

      <View style={[style.bara, {
        backgroundColor: "#B0B0B0",
        paddingBottom: 10,
        width: "100%",
        height: 60,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 15, 
      }]}>
        <TouchableOpacity onPress={openMenu}>
          <Text style={{ padding: 10 }}>☰ Abrir Menu</Text>
        </TouchableOpacity>

<Image source={require("../../../assets/icon.png")} style={style.img}></Image>

<Icon
  name='person'  
  style={{borderWidth: 2, borderRadius: 20, width: 50, height: 50, justifyContent: "center", alignItems: "center"}}
  size={50}
  onPress={() => Alert.alert("oi")}
  />
      </View>

 {mostrarCarrinho && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 60,
            left: 0,
            width: '75%',
            height: '100%',
            backgroundColor: '#f6efdf',
            zIndex: 10,
            transform: [{ translateX: slideAnim }] // Apply the animated translation
          }}
        >
          <Text style={{ padding: 20 }}>Oi</Text>
          <TouchableOpacity onPress={closeMenu}>
            <Text style={{ padding: 20, color: 'red' }}>Fechar</Text>
          </TouchableOpacity>
        </Animated.View>
      )}




      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 20 }}>




       {produtosData.map((produto) => (
                    <Produto
                        key={produto.id} 
                        titulo={produto.titulo}
                        image={{ uri: produto.imageUrl }}
                        func={produto.func}
                    />
                ))}
    
      </View>

<Botao nome="Enviar pedido" style={{ borderWidth: 1,}}></Botao>


<ScrollView> 





</ScrollView>

</SafeAreaView>
)



}