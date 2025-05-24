import {Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, Animated, Dimensions} from 'react-native';
import React, {JSX, useState, useRef, useEffect} from 'react';
import {style} from '../style';
import {Card} from '../../components/cards/index';
import {Alert} from 'react-native';
import {Link, Tabs} from 'expo-router';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import carrinho from './carrinho';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Botao } from '../../components/botao';

type ProdutoSalvo = {
  titulo: string;
  imagem: string;
  preco: number;
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
  const [Visible2, setVisible2] = useState(false);  
const [preco, setPreco] = useState(0);

  const { width } = Dimensions.get('window');
  const slideAnim = useRef(new Animated.Value(-width * 0.75)).current;
  const [quantiaProdutos, setQuantiaProdutos] = useState(0);
  const [produto, setProdutos] = useState<ProdutoSalvo[]>([]);

  const drawer= createDrawerNavigator();

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
  }, []); 

  const ProfDrawr = () => {
    return (
      <drawer.Navigator initialRouteName='' drawerContent={()=> <View> <Text>Oi</Text></View>} >
        <drawer.Screen name="Carrinho" component={carrinho} />
      </drawer.Navigator>
    );
  }

  function teste(numero: number) {
    switch (numero) {
  case 1:
    setVisible(true);
    setTitulo("Café expresso");
    setmensagem("O café expresso é um tipo de café preparado com água quente e pressão, resultando em uma bebida concentrada e rica em sabor.");
    setImagem("https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg");
    setPreco(5.20);
    break;
  case 2:
    setVisible(true);
    setTitulo("Café da casa");
    setmensagem("Este Café é o convite perfeito para desacelerar, saborear cada gole e sentir o aconchego de algo feito com paixão e dedicação.");
    setImagem("https://blog.coffeemais.com/wp-content/uploads/2021/07/como-fazer-um-bom-cafe-150x150.jpg");
    setPreco(3.00);
    break;
  case 3:
    setVisible(true);
    setTitulo("Bolinha de queijo");
    setmensagem("Deliciosas bolinhas de queijo crocantes por fora e cremosas por dentro, perfeitas para petiscar a qualquer hora.");
    setImagem("https://i.ytimg.com/vi/5L2YzCGoN9o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqghUsAw-loY4OAtkRggrYnz66Tg");
    setPreco(6.50);
    break;
  case 4:
    setVisible(true);
    setTitulo("Esfiha de carne");
    setmensagem("Esfiha aberta recheada com carne bem temperada, massa macia e sabor irresistível.");
    setImagem("https://i.ytimg.com/vi/2vSMnk-35m0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmFogriyPlH8TTFb52EFPkIKKJ_w");
    setPreco(4.00);
    break;
  case 5:
    setVisible(true);
    setTitulo("Bolo de laranja");
    setmensagem("Bolo de laranja macio e molhadinho, com sabor cítrico na medida certa. Ideal para acompanhar o café.");
    setImagem("https://essareceitafunciona.com.br/wp-content/uploads/2022/10/Receita-de-bolo-de-laranja-Essa-Receita-Funciona-8.jpg");
    setPreco(5.00);
    break;
  case 6:
    setVisible(true);
    setTitulo("Bomba de chocolate");
    setmensagem("Bomba de chocolate recheada com creme e coberta com chocolate, perfeita para quem ama sobremesas.");
    setImagem("https://www.receiteria.com.br/wp-content/uploads/bomba-de-chocolate-capa.jpg");
    setPreco(7.00);
    break;
  default:
    Alert.alert("Produto não encontrado");
}
  }

async function addCarrinho(titulo: string, imagem: string, mensagem: string, preco: number) {
  const isDuplicate = produto.some(
    (item) => item.titulo === titulo && item.imagem === imagem
  );

  if (isDuplicate) {
    Alert.alert("Produto já está no carrinho", `${titulo} já foi adicionado.`);
    return;
  }

  const newQuantia = quantiaProdutos + 1;
  setQuantiaProdutos(newQuantia);
  await AsyncStorage.setItem("quantia", newQuantia.toString());
  await AsyncStorage.setItem(`produto${newQuantia - 1}`, JSON.stringify({ titulo, imagem, mensagem, preco }));

  setProdutos(prevProdutos => [...prevProdutos, { titulo, imagem, mensagem, preco }]);

  Alert.alert("Produto adicionado ao carrinho", `${titulo} - R$${preco.toFixed(2)}`);
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

  async function teste2() {
    for (let i = 0; i < quantiaProdutos; i++) {
      const produto = await AsyncStorage.getItem(`produto${i}`);
      Alert.alert(produto ? produto : 'Produto não encontrado');
    }
  }

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
            transform: [{ translateX: slideAnim }] 
          }}
        >
          <Text style={{ padding: 20 }}>Oi</Text>
          <TouchableOpacity onPress={closeMenu}>
            <Text style={{ padding: 20, color: 'red' }}>Fechar</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      <ScrollView> 
        <View style={style.produtos}> 
          <Card titulo="Café expresso" 
            image={{ uri: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg" }}
            func={() => teste(1)}
          />
          <Card titulo="Café da casa" 
            image={{ uri: "https://blog.coffeemais.com/wp-content/uploads/2021/07/como-fazer-um-bom-cafe-150x150.jpg" }}
            func={() => teste(2)}
          />
          <Card titulo="Bolinha de queijo" 
            image={{ uri: "https://i.ytimg.com/vi/5L2YzCGoN9o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqghUsAw-loY4OAtkRggrYnz66Tg" }}
                      func={() => teste(3)}

          />
          <Card titulo="Esfiha de carne" 
            image={{ uri: "https://i.ytimg.com/vi/2vSMnk-35m0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmFogriyPlH8TTFb52EFPkIKKJ_w" }}
                      func={() => teste(4)}

          />
          <Card titulo="Bolo de laranja" 
            image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNR_d1pUUbfaVkhNeY-QfajiHm15KaZE6xjg&s" }}
                     func={() => teste(5)}

         />
          <Card titulo="Bomba de chocolate" 
            image={{ uri: "https://www.receiteria.com.br/wp-content/uploads/bomba-de-chocolate-capa.jpg" }}
                     func={() => teste(6)}

         />
        </View>



        <Modal visible={Visible} transparent={true} animationType="fade">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: '#D4C6B1', borderRadius: 10, padding: 20, width: '80%', alignItems: 'center' }}>
              <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setVisible(false)}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>X</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15 }}>{titulo}</Text>
              <Image
                source={{ uri: imagem }} 
                style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 15 }}
              />
              <Text style={{ textAlign: 'center', fontSize: 16, lineHeight: 22, marginBottom: 20 }}>
                {mensagem}
              </Text>
              <TouchableOpacity style={{ backgroundColor: '#B8A48B', paddingVertical: 12, paddingHorizontal: 30,
                  borderRadius: 8 }}
                  onPress={() => addCarrinho(titulo, imagem, mensagem, preco)}>
  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
    Adicionar ao carrinho (R${preco.toFixed(2)})</Text>             
     </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
      </ScrollView>
    </SafeAreaView>
  )
}
