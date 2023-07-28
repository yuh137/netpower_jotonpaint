import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Button, Modal, Linking } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Iconify } from 'react-native-iconify'

const QRScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [data, setData] = useState<string[]>([]);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);

    const handleDelete = (index: number) => {
        const updated: string[] = [...data];
        updated.splice(index, 1);
        setData(updated)
    }
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setData(prevState => [ ...prevState, data ]);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View className='w-full hscreen'>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          className='w-full h-screen absolute'
        />
            {scanned ? (<>
            <Modal className='absolute top-1/2 left-1/2 right-1/2 bottom-1/2 border border-black border-solid'>
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                {data?.map((item, index) => (
                    <View key={index} className='bg-slate-500 border border-black border-solid px-6 py-4'>
                        <TouchableOpacity onPress={() => {Linking.openURL(item)}} className='flex flex-row justify-between'>
                            <Text>
                                {item}
                            </Text>
                            <TouchableOpacity onPress={() => {handleDelete(index)}}>
                                <Iconify icon='mdi:minus'/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                ))}
            </Modal>
        </>) : (<></>)}
      </View>
    );
  
}

export default QRScreen