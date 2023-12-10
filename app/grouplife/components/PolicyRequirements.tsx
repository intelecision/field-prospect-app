import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from '../../components/Themed'
import { globalStyles } from '../../Styles/GlobalStyles'
import { YesNoRadioGroup } from '../../components/YesNoRadioGroup'

type Props = {}

const PolicyRequirements = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    POLICY REQUIREMENT
                </Text>
            </View>
            <View style={globalStyles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        How many employees are to be covered by this scheme:
                    </Text>
                    <TextInput placeholder="Title" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        When do you need the cover for your employees to end?
                    </Text>
                    <TextInput
                        placeholder="65 years old (or State Pension Age if higher)"
                        style={globalStyles.input}
                    />
                </View>
            </View>
        </View>
    )
}

export default PolicyRequirements

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
})
