import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from './Themed'

type Props = {
    title: string
    buttonStyle?: 'Normal' | 'Outline'
    showLoading?: boolean
    onPress: () => void
}

const Button = (props: Props) => {
    const { title, buttonStyle = 'Normal', onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={
                    buttonStyle == 'Normal'
                        ? styles.button
                        : styles.button_outline
                }
            >
                {props.showLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text
                        style={{
                            color: buttonStyle == 'Normal' ? '#fff' : '#31afb3',
                        }}
                    >
                        {title}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        backgroundColor: '#31afb3',
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
    },
    button: {
        height: 50,
        alignItems: 'center',
        backgroundColor: '#31afb3',
        padding: 10,
        borderRadius: 30,
        borderColor: '#31afb3',

        justifyContent: 'center',
        margin: 10,
    },
    button_outline: {
        height: 50,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        borderColor: '#31afb3',
        borderWidth: 1.25,
    },
})
