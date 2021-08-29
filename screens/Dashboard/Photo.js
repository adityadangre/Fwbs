import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, StyleSheet, SafeAreaView, Platform, StatusBar, TextInput, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import DropDownPicker from "react-native-dropdown-picker";

export default class Photo extends Component {
    pickFromGallery = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                media: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            console.log(data)
        }else{
            Alert.alert('You need to give us permission to open your gallery')
        }
    }

    pickFromCamera = async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                media: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                quality: 0.5
            })
            console.log(data)
        }else{
            Alert.alert('You need to give us permission to open the camera')
        }
    }
render(){
    return (
        <View>
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea} />
            <Text style={styles.text}>Pick a photo of the book which you want to sell</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginRight: 50, alignItems: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={() => pickFromGallery()}>
                <Text style={styles.buttonText}>Galary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => pickFromCamera()}>
                <Text  style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TextInput placeholder='Name of the Book*' placeholderTextColor='gray' style={styles.textinput} />
                <TextInput placeholder='Author*' placeholderTextColor='gray' style={styles.textinput} />
                <TextInput placeholder='Publication*' placeholderTextColor='gray' style={styles.textinput} />
                <TextInput placeholder='Selling Points*' placeholderTextColor='gray' style={styles.textinput} />
                <TextInput placeholder='Description (Optional)' placeholderTextColor='gray' style={[styles.textinput, {height: 150}]} multiline />
            </View>
            </ScrollView>
            <TouchableOpacity style={styles.postbtn}>
                <Text style={styles.postbtntext}>Post</Text>
            </TouchableOpacity>
        </View>
        )
}
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(40)
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#FFBA00',
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    textinput: {
        borderWidth: 3,
        borderRadius: 5,
        width: 300,
        marginTop: 20,
        textAlign: 'center',
        marginBottom: 15
    },
    postbtn: {
        backgroundColor: '#FFBA00',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginTop: -10,
    },
    postbtntext: {
        fontWeight: 'bold',
        fontSize: 25,
    }
})