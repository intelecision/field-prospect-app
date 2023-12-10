import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text, TextInput } from '../../../components/Themed'
import { FormikProps, useFormik } from 'formik' // import useFormik hook
import { globalStyles } from '../../Styles/GlobalStyles'
import { YesNoRadioGroup } from '../../components/YesNoRadioGroup'
import { HousingAndUtilities } from '../../../model/entities'
import * as Yup from 'yup'
import { strToNumber } from '../../../formulae/calculations'

type Props = {
    formik: FormikProps<HousingAndUtilities>
    setTotal: (total: number) => void
}

const AccommodationExpenses = (props: Props) => {
    const { formik, setTotal } = props
    const { values } = formik

    const [isMortgageOrRent, setIsMortgageOrRent] = useState<'yes' | 'no'>(
        'yes'
    )

    const calcHousing = () => {
        //const thisFormik = getNextFormik(step)
        let total = 0
        total =
            strToNumber(values.mortgageOrRent) +
            strToNumber(values.phone) +
            strToNumber(values.electricity) +
            strToNumber(values.gas) +
            strToNumber(values.satelliteTv) +
            strToNumber(values.waterAndSewer) +
            strToNumber(values.wasteRemoval) +
            strToNumber(values.maintenanceOrRepair) +
            strToNumber(values.supplies) +
            strToNumber(values.other)
        setTotal(total)
    }

    const handleYes = () => {
        setIsMortgageOrRent('yes')
    }
    //props.myFormik.setFieldValue('mortgageOrRent', 340)
    const handleNo = () => {
        setIsMortgageOrRent('no')
    }
    useEffect(() => {
        setIsMortgageOrRent('yes')
    }, [])

    useEffect(() => {
        calcHousing()
        if (isMortgageOrRent === 'yes') {
            formik.setFieldValue('isMortgageOrRent', true)
        } else {
            formik.setFieldValue('isMortgageOrRent', false)
        }
    }, [isMortgageOrRent, formik.values])

    const YesNoToBool = (value: 'yes' | 'no') => {
        if (value === 'yes') {
            return true
        } else {
            return false
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={{ padding: 20 }}>
                <Text style={globalStyles.header_group_text}>
                    Where there are no actual figures, please ask customer to
                    provide a best estimates
                </Text>
            </View>
            <View>
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>HOUSING </Text>
                </View>
                <View style={styles.indentations}>
                    <View style={globalStyles.editGroup}>
                        <View style={styles.radio}>
                            <YesNoRadioGroup
                                labelYes="Mortgage"
                                labelNo="Rent"
                                onPressYes={handleYes}
                                onPressNo={handleNo}
                                state={YesNoToBool(isMortgageOrRent)}
                            />
                        </View>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.mortgageOrRent // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('mortgageOrRent')}
                            onBlur={formik.handleBlur('mortgageOrRent')}
                            value={formik.values.mortgageOrRent.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.mortgageOrRent && (
                            <Text style={globalStyles.error}>
                                {formik.errors.mortgageOrRent}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Phone</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.phone // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('phone')}
                            onBlur={formik.handleBlur('phone')}
                            value={formik.values.phone.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.phone && (
                            <Text style={globalStyles.error}>
                                {formik.errors.phone}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Electricity</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.electricity // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('electricity')}
                            onBlur={formik.handleBlur('electricity')}
                            value={formik.values.electricity.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.electricity && (
                            <Text style={globalStyles.error}>
                                {formik.errors.electricity}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Gas</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.gas // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('gas')}
                            onBlur={formik.handleBlur('gas')}
                            value={formik.values.gas.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.gas && (
                            <Text style={globalStyles.error}>
                                {formik.errors.gas}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Satellite Tv</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.satelliteTv // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('satelliteTv')}
                            onBlur={formik.handleBlur('satelliteTv')}
                            value={formik.values.satelliteTv.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.satelliteTv && (
                            <Text style={globalStyles.error}>
                                {formik.errors.satelliteTv}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Water & Sewage</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.waterAndSewer // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('waterAndSewer')}
                            onBlur={formik.handleBlur('waterAndSewer')}
                            value={formik.values.waterAndSewer.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.waterAndSewer && (
                            <Text style={globalStyles.error}>
                                {formik.errors.waterAndSewer}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Waste Removal</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.wasteRemoval // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('wasteRemoval')}
                            onBlur={formik.handleBlur('wasteRemoval')}
                            value={formik.values.wasteRemoval.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.wasteRemoval && (
                            <Text style={globalStyles.error}>
                                {formik.errors.wasteRemoval}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            Maintenance & Repairs
                        </Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.maintenanceOrRepair // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange(
                                'maintenanceOrRepair'
                            )}
                            onBlur={formik.handleBlur('maintenanceOrRepair')}
                            value={formik.values.maintenanceOrRepair.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.maintenanceOrRepair && (
                            <Text style={globalStyles.error}>
                                {formik.errors.maintenanceOrRepair}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Supplies</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.supplies // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('supplies')}
                            onBlur={formik.handleBlur('supplies')}
                            value={formik.values.supplies.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.supplies && (
                            <Text style={globalStyles.error}>
                                {formik.errors.supplies}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Other</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.other // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('other')}
                            onBlur={formik.handleBlur('other')}
                            value={formik.values.other.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.other && (
                            <Text style={globalStyles.error}>
                                {formik.errors.other}
                            </Text>
                        )}
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AccommodationExpenses

const styles = StyleSheet.create({
    container: {},
    indentations: {
        marginHorizontal: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    radio: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    footer: {
        justifyContent: 'flex-end',
    },
})
