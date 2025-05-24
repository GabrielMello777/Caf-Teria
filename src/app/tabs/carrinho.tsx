import {Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, Animated, Dimensions} from 'react-native';
import React, {JSX, useState, useRef, useEffect} from 'react';
import {style} from '../style';
import {Card} from '../../components/cards/index';
import {Alert} from 'react-native';
import {Link, Tabs} from 'expo-router';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import carrinho from './carrinho';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Produto} from '../../components/ProdutoCar/index';
import { Botao } from '../../components/botao';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProdutoSalvo = {
  preco: number | undefined;
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
const produtoVar= [];
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

  const intervalId = setInterval(() => {
    carregarProdutosSimples();
  }, 2000);

  return () => clearInterval(intervalId);
}, []);


    const [Visible2, setVisible2] = useState(false);  
  
const ProfDrawr = () => {


  return (
    <drawer.Navigator initialRouteName='' drawerContent={()=> <View> <Text>Oi</Text></View>} >
   

      <drawer.Screen name="Carrinho" component={carrinho} />

    </drawer.Navigator>
  );

}

  let a=1;
  function login() {
    switch (a) {
      case 1:
        setVisible2(true);
        a=2;
        break
      case 2:
        setVisible2(false);
        a=2;
    }
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


  
const quantidade: number[]= [];

async function clearAllProducts() {
  try {
    const quantiaString = await AsyncStorage.getItem("quantia");
    const currentQuantia = quantiaString ? parseInt(quantiaString, 10) : 0;

    for (let i = 0; i < currentQuantia; i++) {
      await AsyncStorage.removeItem(`produto${i}`);
    }

    await AsyncStorage.removeItem("quantia");

    setQuantiaProdutos(0);     
    setProdutos([]);          
    setQuantia([]);        

    Alert.alert("Carrinho Limpo", "Todos os produtos foram removidos do carrinho.");
  } catch (e) {
    console.error("Erro ao limpar o carrinho:", e);
    Alert.alert("Erro", "Não foi possível limpar o carrinho.");
  }
}




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
          style={{borderWidth: 2, borderRadius: 20, width: 50, height: 50}}
          size={50}
          onPress={login}
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




<ScrollView 
  contentContainerStyle={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  }}
>

  {produto.map((item, index) => (
    <><Produto
      key={index}
      image={item?.imagem ? { uri: item.imagem } : undefined}
      titulo={item?.titulo}
      preco={item?.preco}
      quantia={quantia[index] || 0}
      funcMais={() => {
        const novaQuantia = [...quantia];
        novaQuantia[index] = (novaQuantia[index] || 0) + 1;
        setQuantia(novaQuantia);
      } }
      funcMenos={() => {
        const novaQuantia = [...quantia];
        novaQuantia[index] = (novaQuantia[index] || 0) - 1;
        setQuantia(novaQuantia);
      } } /><Text>{""}</Text></>

  ))}
       

<View style={{  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingVertical: 20,
  gap: 20,}}>
<Botao nome="Enviar pedido" style={{ borderWidth: 1,}}></Botao>



          <Botao nome="Limpar Carrinho" onPress={clearAllProducts}></Botao>
 </View>



</ScrollView>


 <Modal visible={Visible2} transparent={true} animationType="fade">
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              backgroundColor: 'rgba(0,0,0,0.5)',
              paddingTop: 50, 
              paddingLeft: 20, 
            }}
          >
            <View
              style={{
                backgroundColor: '#D4C6B1',
                borderRadius: 10,
                padding: 20,
                width: '50%',
                alignItems: 'center',
              }}
            >
              <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end' }}> 
                <TouchableOpacity onPress={()=> setVisible2(false)}>
                  <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>X</Text>
                </TouchableOpacity>
              </View>
              <Link href={"../pags/login"}>Ir para Login</Link>
            </View>
          </View>
        </Modal>

</SafeAreaView>
)



}