import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { globalStyles } from '../Styles/GlobalStyles'

type Props = {
    label: string
    isChecked: boolean
    //color?: string
    onChecked: () => void
    //onPress: () => void
}

const CheckBoxWithLabel = ({
    label,
    //color = '#00A3AD',
    onChecked: onChecked,
    isChecked,
}: //onPress,
Props) => {
    const [_, setChecked] = useState(false)
    return (
        <Pressable
            onPress={() => {
                onChecked()
                setChecked(!isChecked)
            }}
        >
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}
                >
                    <Checkbox
                        color={isChecked ? '#00A3AD' : undefined}
                        value={isChecked}
                        onValueChange={(value) => {
                            onChecked()
                        }}
                    />
                    <Text style={globalStyles.label}>{label}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CheckBoxWithLabel

const styles = StyleSheet.create({})
