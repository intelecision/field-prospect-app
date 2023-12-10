import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FormikProps, useFormik } from 'formik'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { Transportation } from '../../../model/entities'

type Props = {
    formik: FormikProps<Transportation>
    setTotal: (total: number) => void
}

const TransportationExpenses = (props: Props) => {
    const { formik, setTotal } = props
    const { values } = formik

    useEffect(() => {
        console.log('TransportationExpenses.tsx: useEffect()')
        calcTotal()
    }, [values])

    const calcTotal = () => {
        let total = 0
        total += parseInt(values.vehiclePayment.toString())
        total += parseInt(values.busTaxiFare.toString())
        total += parseInt(values.vehicleInsurance.toString())
        total += parseInt(values.licensing.toString())
        total += parseInt(values.fuel.toString())
        total += parseInt(values.maintenance.toString())
        total += parseInt(values.other.toString())
        setTotal(total)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={globalStyles.header_group_text}>
                    Where there are no actual figures, please ask customer to
                    provide a best estimates
                </Text>
            </View>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    TRANSPORTATION{' '}
                </Text>
            </View>
            <View style={styles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Vehicle Payment</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.vehiclePayment // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('vehiclePayment')}
                        onBlur={formik.handleBlur('vehiclePayment')}
                        value={formik.values.vehiclePayment.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.vehiclePayment && (
                        <Text style={globalStyles.error}>
                            {formik.errors.vehiclePayment}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Bus/Taxi</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.busTaxiFare // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('busTaxiFare')}
                        onBlur={formik.handleBlur('busTaxiFare')}
                        value={formik.values.busTaxiFare.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.busTaxiFare && (
                        <Text style={globalStyles.error}>
                            {formik.errors.busTaxiFare}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Insurance</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.vehicleInsurance // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('vehicleInsurance')}
                        onBlur={formik.handleBlur('vehicleInsurance')}
                        value={formik.values.vehicleInsurance.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.vehicleInsurance && (
                        <Text style={globalStyles.error}>
                            {formik.errors.vehicleInsurance}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Licensing</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.licensing // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('licensing')}
                        onBlur={formik.handleBlur('licensing')}
                        value={formik.values.licensing.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.licensing && (
                        <Text style={globalStyles.error}>
                            {formik.errors.licensing}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Fuel</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.fuel // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('fuel')}
                        onBlur={formik.handleBlur('fuel')}
                        value={formik.values.fuel.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.fuel && (
                        <Text style={globalStyles.error}>
                            {formik.errors.fuel}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Maintenance</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.maintenance // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('maintenance')}
                        onBlur={formik.handleBlur('maintenance')}
                        value={formik.values.maintenance.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.maintenance && (
                        <Text style={globalStyles.error}>
                            {formik.errors.maintenance}
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
    )
}

export default TransportationExpenses

const styles = StyleSheet.create({
    container: {},
    indentations: {
        //  marginVertical: 20,
        marginHorizontal: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
})
