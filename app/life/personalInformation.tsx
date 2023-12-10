import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, TextInput } from '../../components/Themed'
import { globalStyles } from '../Styles/GlobalStyles'
import Checkbox from 'expo-checkbox'

const PersonalInformation = () => {
    return (
        <View>
            <SafeAreaView style={styles.container}>
                <View
                    style={[
                        {
                            justifyContent: 'center',
                            backgroundColor: '#00A3AD',
                            alignItems: 'center',
                            height: 120,
                            marginBottom: 20,
                        },
                    ]}
                >
                    <Text style={{ fontSize: 30, color: '#fff' }}>
                        Personal Monthly Budget
                    </Text>
                    <Text style={{ fontSize: 16, color: '#fff' }}>
                        Income and Expenditure
                    </Text>
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Client name (First, Middle, Last)
                    </Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="0"
                        keyboardType="numbers-and-punctuation"
                    />
                </View>
                <View style={globalStyles.editGroup}></View>
            </SafeAreaView>
        </View>
    )
}

export default PersonalInformation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
