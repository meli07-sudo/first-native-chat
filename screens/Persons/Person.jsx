import React from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'


export default function Person({personInfo,action}) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.username}>{personInfo.username}</Text>
            <Pressable onPress={action}>
                <Feather name="message-square" size={24} color="#0004ff88" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:"100%",
        borderBottomWidth:2,
        borderColor:"#80808038",
        paddingHorizontal:7,
        paddingVertical:25,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    username:{
        fontSize:16.5,
        fontWeight:"bold",
    }
})
