import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Iconify } from 'react-native-iconify';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  return (
    <>
        <View className="navbar w-full bg-blue-800 h-[10vh] flex flex-row justify-between pt-[6vh] px-4">
          <Iconify icon='ic:outline-menu' color="#fff"/>
          <View className="flex flex-row gap-2">
            <Iconify icon='mdi:cart' color="white"/>
            <Iconify icon='twemoji:flag-united-kingdom'/>
          </View>
        </View>
        <View>
          <MenuScreen />
        </View>
    </>
  );
}

