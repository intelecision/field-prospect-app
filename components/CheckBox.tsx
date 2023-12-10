import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

type Props = {
    checked: boolean
    text: string
}

const CheckBox = ({ text, checked }: Props) => {
    return (
        <View>
            <AntDesign
                name={checked ? 'checksquare' : 'checksquareo'}
                size={24}
                color="black"
            />
        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({})
