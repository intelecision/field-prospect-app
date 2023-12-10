import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../components/Themed'
import theme from '../../themes/theme'

type Props = {
    label: string
    filled: boolean
    hasError?: boolean
    onPress?: () => void
}

const ToggleButton = (props: Props) => {
    const { label, filled, hasError, onPress } = props
    return (
        <Pressable
            style={styles.container}
            onPress={() => (onPress ? onPress() : null)}
        >
            <View
                style={[
                    styles.radioButton,
                    {
                        backgroundColor: filled
                            ? theme.colors.tintColorLight
                            : '#fff',
                    },
                    hasError && styles.radioButtonError,
                    { justifyContent: 'center', alignItems: 'center' },
                ]}
            >
                <Text
                    style={{
                        color: filled ? '#fff' : theme.colors.tintColorLight,
                        fontSize: 16,
                        fontFamily: 'OpenSans_700Bold',
                        textAlign: 'center',
                    }}
                >
                    {label}
                </Text>
            </View>
        </Pressable>
    )
}

export default ToggleButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    filled: {
        backgroundColor: theme.colors.tintColorLight,
        borderRadius: 4,
        width: 40,
        height: 40,
        position: 'absolute',
        //right: 3,
        //top: 3,
    },
    filledError: {
        backgroundColor: theme.colors.danger,
    },
    label: {
        color: theme.colors.black,
        marginLeft: theme.spacing.s,
        marginTop: -2,
        fontSize: 16,
    },
    labelError: {
        color: theme.colors.danger,
    },
    radioButton: {
        borderColor: theme.colors.tintColorLight,
        borderRadius: 4,
        borderWidth: 1,
        height: 40,
        width: 50,
        position: 'relative',
    },
    radioButtonError: {
        borderColor: theme.colors.danger,
    },
})
