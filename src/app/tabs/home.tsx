import {Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import {JSX, useState} from 'react';
import {style} from '../style';
import {Card} from '../../components/cards/index';
import {Alert} from 'react-native';
import {Tabs} from 'expo-router';

export default function Home() {

  const [input, setInput] = useState('');
const [componente, setComponente] = useState<JSX.Element | null>(null);
const [Visible, setVisible] = useState(false);
const [modalData, setModalData] = useState({ title: '', message: '' });
const [titulo, setTitulo] = useState("");
const [mensagem, setmensagem] = useState("");
const [imagem, setImagem] = useState("");

    function teste(numero: number) {


switch (numero) {

    case 1:

setVisible(true);
setTitulo("Café expresso");
setmensagem("O café expresso é um tipo de café preparado com água quente e pressão, resultando em uma bebida concentrada e rica em sabor.");
setImagem("https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg");
        break;

        case 2:

    
setVisible(true);
setTitulo("Café da casa ");
setmensagem("Este Café é o convite perfeito para desacelerar, para saborear cada gole e para sentir o aconchego de algo feito com paixão e dedicação. Seja para despertar o dia com energia e inspiração, ou para aquecer um momento especial e único, este café topzera é a sua dose diária de felicidade em uma xícara. Permita-se essa experiência!");
setImagem("https://blog.coffeemais.com/wp-content/uploads/2021/07/como-fazer-um-bom-cafe-150x150.jpg");

        break;

        default:
        Alert.alert("produto não encontrado");
}


    }

    function addCarrinho(titulo: string, imagem: string, mensagem: string): void {
        

Alert.alert("Produto adicionado ao carrinho", `Título: ${titulo}\nImagem: ${imagem}\nMensagem: ${mensagem}`);


    }

return(

 
    <SafeAreaView style={{ flex: 1 , backgroundColor: "#AD8B70" }}> 

 <View style={[style.bara, { backgroundColor: "#B0B0B0" , paddingBottom: 10, position: "relative"}]}>
        

          </View>

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


<Card titulo="Produto 1" 
image={{ uri: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg" }}

/>


<Card titulo="Produto 2" 
image={{ uri: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg" }}

/>

<Card titulo="Produto 1" 
image={{ uri: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg" }}

/>


<Card titulo="Produto 2" 
image={{ uri: "https://minhasreceitinhas.com.br/wp-content/uploads/2023/04/unknown_340814842_763583995338120_1516047819594032270_n.jpg" }}

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
         onPress={() => addCarrinho(titulo, imagem, mensagem)}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


</ScrollView>

</SafeAreaView>
)



}