import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React from 'react'
import { TextInput } from '../../components/Themed'
import { globalStyles } from '../../Styles/GlobalStyles'
import { FormikProps, useFormik } from 'formik'
import * as yup from 'yup'
import ToggleButton from '../../components/ToggleButtom'
import YesNoToggleCheckBox from '../../components/YesNoToggleCheckBox'
type GroupStepOneProps = {
    formik: FormikProps<any>
}
const GroupStepOne = () => {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                >
                    <View style={styles.content}>
                        <View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                CONTACT DETAILS
                            </Text>
                        </View>
                        <View style={globalStyles.indentations}>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Contact Full Name
                                </Text>
                                <TextInput
                                    placeholder="Title"
                                    style={globalStyles.input}
                                />
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Position in the Group/Company
                                </Text>
                                <TextInput
                                    placeholder="Position in group"
                                    style={globalStyles.input}
                                />
                            </View>

                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Contact Phone Number
                                </Text>
                                <TextInput
                                    placeholder="Title"
                                    style={globalStyles.input}
                                />
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Contact Email
                                </Text>
                                <TextInput
                                    placeholder="Title"
                                    style={globalStyles.input}
                                />
                            </View>
                        </View>
                        {/*<View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group Description</Text>
                    <TextInput placeholder="Title" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group Address</Text>
                    <TextInput
                        placeholder="Address"
                        style={globalStyles.input}
                    />
                </View>*/}

                        {/*<YesNoToggleCheckBox
                    labelYes="Yes"
                    labelNo="No"
                    state={undefined}
                    onPressYes={() => console.log('yes')}
                    onPressNo={() => console.log('no')}
                />*/}
                        {/*<View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group City</Text>
                    <TextInput placeholder="City" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group State</Text>
                    <TextInput placeholder="State" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group Zip</Text>
                    <TextInput placeholder="Zip" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group Country</Text>
                    <TextInput
                        placeholder="Country"
                        style={globalStyles.input}
                    />
                </View>*/}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default GroupStepOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
    },
})
