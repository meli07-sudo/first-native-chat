import React from 'react'
import { View } from 'react-native'

export default function Layout({children}) {
    return (
        <View style={{backgroundColor:themeColors.mainColor}}>
            {children}
        </View>
    )
}
