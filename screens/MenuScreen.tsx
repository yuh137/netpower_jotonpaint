import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { Iconify } from 'react-native-iconify'

const MenuScreen = () => {
  const dummyArray = new Array(16).fill(0);
//   const [isVisible, setVisible] = useState<{ index: number, visible: boolean }[]>([])
  const [isLoading, setLoading] = useState(true)

    // useEffect(() => {
    //     dummyArray.forEach((item, index) => {
    //         setVisible( [ ...isVisible, { index: index, visible: false } ] )
    //     })
    //     setLoading(false);
    // }, [])

    const dummyArray2 = new Array(3).fill(0);


  return (
    <ScrollView>
        <View className="h-screen flex gap-4 bg-slate-300/50 mt-[0.4px]">
            <View>
                <Text className="px-6 text-lg">Menu</Text>
            </View>
            <View className="flex flex-row flex-wrap px-3 gap-6">
                    {dummyArray.map((item, index) => {
                        const [visible, setVisible] = useState(false);

                        const renderDropdown = () => {
                            if (visible) {
                                return (
                                    <>
                                        {dummyArray2.map((item, index) => (
                                            <>
                                                <View key={index} className='px-2 py-2'>
                                                    <View className="border border-solid w-[56px] h-[56px] border-slate-400 rounded-lg flex items-center justify-center" onTouchStart={() => setVisible(prevState => !prevState)}>
                                                        <Iconify icon="mdi:home" size={34}/>
                                                    </View>
                                                    <Text className="text-sm text-center">
                                                        Home
                                                    </Text>
                                                </View>
                                            </>
                                        ))}
                                    </>
                                )
                            }
                        }
                        
                        return (
                        <View key={index}>
                            <View className="border border-solid w-[56px] h-[56px] border-slate-400 rounded-lg flex items-center justify-center" onTouchStart={() => setVisible(prevState => !prevState)}>
                                <Iconify icon="mdi:home" size={34}/>
                            </View>
                            <Text className="text-sm text-center">
                                Home
                            </Text>
                            <View className={(index % 4 === 0 || index % 4 === 1) ? 'flex flex-row bg-white rounded-lg gap-2 z-10 absolute top-full' : `flex flex-row bg-white rounded-lg gap-2 z-10 absolute top-full right-[10%]`}>
                                {renderDropdown()}
                            </View>
                        </View>
                    )})}
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    invisible: {
        display: "none"
    },
    visible: {
        display: "flex",
        position: "absolute",

    }
})

export default MenuScreen