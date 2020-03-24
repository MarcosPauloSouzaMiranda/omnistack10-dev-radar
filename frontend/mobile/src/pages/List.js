import React, { useState, useEffect } from 'react';

import { 
    AsyncStorage, 
    StyleSheet, 
    Image
} from 'react-native';

import { SafeAreaView } from 'react-navigation';

import logo from '../assets/logo.png';

export default function List(){

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs')
        .then(setTechs);
    }, []);

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <Image source={logo} style={styles.logo} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})