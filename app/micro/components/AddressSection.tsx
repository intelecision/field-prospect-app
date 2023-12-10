import { StyleSheet, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'
import { FormikProps, useFormik } from 'formik'
import { Text, TextInput } from '../../../components/Themed'
import * as Yup from 'yup'
import { ClientInformation } from '../../../model/entities'

type Props = {
    formik: FormikProps<ClientInformation>
}

const AddressSection = ({ formik }: Props) => {
    const [inputHeight, setInputHeight] = React.useState(100)

    return (
        <View>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    PERSONAL ADDRESS
                </Text>
            </View>
            <View style={globalStyles.editGroup}>
                <Text style={globalStyles.label}>Address</Text>
                <TextInput
                    style={
                        formik.errors.address
                            ? globalStyles.input_error
                            : {
                                  ...globalStyles.input,
                                  height: Math.max(100, inputHeight),
                                  minHeight: 100,
                              }
                    }
                    multiline
                    placeholder="Address"
                    onChangeText={formik.handleChange('address')}
                    onBlur={formik.handleBlur('address')}
                    value={formik.values.address}
                    onContentSizeChange={(event) => {
                        setInputHeight(event.nativeEvent.contentSize.height)
                        console.log(event.nativeEvent.contentSize.height)
                    }}
                />
                {formik.errors.address && (
                    <Text style={globalStyles.error}>
                        {formik.values.address}
                    </Text>
                )}
            </View>
            <View style={globalStyles.editGroup}>
                <Text style={globalStyles.label}>City</Text>
                <TextInput
                    style={
                        formik.errors.city
                            ? globalStyles.input_error
                            : {
                                  ...globalStyles.input,
                              }
                    }
                    placeholder="City"
                    onChangeText={formik.handleChange('city')}
                    onBlur={formik.handleBlur('city')}
                    value={formik.values.city}
                />
                {formik.errors.city && (
                    <Text style={globalStyles.error}>{formik.values.city}</Text>
                )}
            </View>
            <View style={globalStyles.editGroup}>
                <Text style={globalStyles.label}>Region</Text>
                <TextInput
                    style={
                        formik.errors.region
                            ? globalStyles.input_error
                            : {
                                  ...globalStyles.input,
                              }
                    }
                    placeholder="Region"
                    onChangeText={formik.handleChange('region')}
                    onBlur={formik.handleBlur('region')}
                    value={formik.values.region}
                />
                {formik.errors.region && (
                    <Text style={globalStyles.error}>
                        {formik.values.region}
                    </Text>
                )}
            </View>
            <View style={[globalStyles.editGroup, { paddingBottom: 20 }]}>
                <Text style={globalStyles.label}>Postal Code</Text>
                <TextInput
                    style={
                        formik.errors.postalCodeOrDigitalAddress
                            ? globalStyles.input_error
                            : {
                                  ...globalStyles.input,
                              }
                    }
                    placeholder="postal Code Or DigitalAddress"
                    onChangeText={formik.handleChange(
                        'postalCodeOrDigitalAddress'
                    )}
                    onBlur={formik.handleBlur('postalCodeOrDigitalAddress')}
                    value={formik.values.postalCodeOrDigitalAddress}
                    textContentType="postalCode"
                    autoCapitalize="characters"
                />
                {formik.errors.postalCodeOrDigitalAddress && (
                    <Text style={globalStyles.error}>
                        {formik.values.postalCodeOrDigitalAddress}
                    </Text>
                )}
            </View>
            <View style={[globalStyles.editGroup, { paddingBottom: 20 }]}>
                <Text style={globalStyles.label}>Email</Text>
                <TextInput
                    style={
                        formik.errors.email
                            ? globalStyles.input_error
                            : {
                                  ...globalStyles.input,
                              }
                    }
                    placeholder="someone@insure.com"
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    textContentType="postalCode"
                    autoCapitalize="characters"
                    keyboardType="email-address"
                />
                {formik.errors.email && (
                    <Text style={globalStyles.error}>
                        {formik.values.email}
                    </Text>
                )}
            </View>
            <View style={[globalStyles.editGroup, { paddingBottom: 20 }]}>
                <Text style={globalStyles.label}>Contact Telephone No.</Text>
                <TextInput
                    style={
                        formik.errors.contactPhone
                            ? globalStyles.input_error
                            : {
                                  ...globalStyles.input,
                              }
                    }
                    placeholder="someone@insure.com"
                    onChangeText={formik.handleChange('contactPhone ')}
                    onBlur={formik.handleBlur('contactPhone ')}
                    value={formik.values.contactPhone}
                    textContentType="telephoneNumber"
                    autoCapitalize="characters"
                    keyboardType="phone-pad"
                />
                {formik.errors.contactPhone && (
                    <Text style={globalStyles.error}>
                        {formik.values.contactPhone}
                    </Text>
                )}
            </View>
            <View style={{ height: 40, padding: 20 }}></View>
        </View>
    )
}

export default AddressSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        //padding: 10,
    },
})
