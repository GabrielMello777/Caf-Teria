import { Tabs } from "expo-router";
import { Image, Text, View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "produtos", 
          tabBarIcon: () => (

              <Image source={{ uri: "https://images.vexels.com/media/users/3/156627/isolated/preview/256e3aede9c4ec21decf89f5b58aea7e-icone-plano-da-xicara-de-cafe.png" }} style={{ width: 24, height: 24 }} />
          ),
          headerShown: false,
        }}
      />

     <Tabs.Screen 
        name="carrinho" 
        options={{ 
          title: "Produtos", 
          tabBarIcon: () => (

              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/126/126510.png" }} style={{ width: 24, height: 24 }} />
          ),
          headerShown: false,
        }}

      />


      

    </Tabs>
  );
}
