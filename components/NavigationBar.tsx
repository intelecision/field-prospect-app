import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from './Themed'

type Props = {
    enableBackButton?: boolean
    enableNextButton?: boolean

    onBackButtonPress?: () => void
    onNextButtonPress?: () => void
}

const NavigationBar = (props: Props) => {
    return (
        <View
            style={[
                styles.container,
                {
                    justifyContent: props.enableBackButton
                        ? 'space-between'
                        : 'flex-end',
                },
            ]}
        >
            {props.enableBackButton ? (
                <TouchableOpacity onPress={props.onBackButtonPress}>
                    <View style={styles.backButton}>
                        <Text style={styles.backButtonText}>Back</Text>
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={props.onBackButtonPress} disabled>
                    <View
                        style={[styles.backButton, { backgroundColor: '#ddd' }]}
                    >
                        <Text style={styles.backButtonText}>Back</Text>
                    </View>
                </TouchableOpacity>
            )}

            {props.enableNextButton ? (
                <TouchableOpacity onPress={props.onNextButtonPress}>
                    <View style={[styles.nextButton]}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={props.onNextButtonPress} disabled>
                    <View
                        style={[styles.nextButton, { backgroundColor: '#ddd' }]}
                    >
                        <Text style={styles.nextButtonText}>Next</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default NavigationBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        borderTopColor: '#d3d3d3',
        borderTopWidth: 1,
        //backgroundColor: '#fff',
    },
    nextButton: {
        backgroundColor: '#00A3AD',
        borderRadius: 12,
        height: 40,
        margin: 10,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        //fontWeight: 'bold',
        fontFamily: 'OpenSans_Medium',
    },
    backButton: {
        backgroundColor: '#fff',
        borderRadius: 10,
        //padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#00A3AD',
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#00A3AD',
        textAlign: 'center',
        fontSize: 20,
        //fontWeight: 'bold',
        fontFamily: 'OpenSans_Medium',
    },
})
