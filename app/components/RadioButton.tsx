import React, { memo } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import theme from '../../themes/theme'
import { Text } from '../../components/Themed'

interface RadioButtonProps {
    label: string
    filled: boolean
    hasError?: boolean
    onPress?: () => void
}

export const RadioButton = memo(function RadioButton({
    filled,
    label,
    hasError,
    onPress,
}: RadioButtonProps) {
    return (
        <Pressable
            style={styles.container}
            onPress={() => (onPress ? onPress() : null)}
        >
            <View
                style={[
                    styles.radioButton,
                    hasError && styles.radioButtonError,
                ]}
            >
                {filled && (
                    <View
                        style={[styles.filled, hasError && styles.filledError]}
                    />
                )}
            </View>
            <Text style={[styles.label, hasError && styles.labelError]}>
                {label}
            </Text>
        </Pressable>
    )
})

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    filled: {
        backgroundColor: theme.colors.tintColorLight,
        borderRadius: 10,
        height: 16,
        position: 'absolute',
        right: 3,
        top: 3,
        width: 16,
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
        borderRadius: 12,
        borderWidth: 1,
        height: 24,
        position: 'relative',
        width: 24,
    },
    radioButtonError: {
        borderColor: theme.colors.danger,
    },
})
