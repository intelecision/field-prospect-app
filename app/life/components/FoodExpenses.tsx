import { StyleSheet, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { FormikProps, useFormik } from 'formik'
import { FoodAndClothing } from '../../../model/entities'
import { usePersonalMonthlyExpenses } from '../../../context/QuoteContext'
import { strToNumber } from '../../../formulae/calculations'
type Props = {
    formik: FormikProps<FoodAndClothing>
    setTotal: (total: number) => void
}

const FoodExpenses = ({ formik, setTotal }: Props) => {
    const { personalMonthlyExpenses, setPersonalMonthlyExpenses } =
        usePersonalMonthlyExpenses()

    const { values } = formik

    useEffect(() => {
        setPersonalMonthlyExpenses({
            ...personalMonthlyExpenses,
            foodAndClothing: {
                groceries: strToNumber(values.groceries),
                other: strToNumber(values.other),
                restaurant: strToNumber(values.restaurant),
            },
        })
        calcTotal()
    }, [formik.values])

    const calcTotal = () => {
        let total = 0
        total += strToNumber(values.groceries)
        total += strToNumber(values.other)
        total += strToNumber(values.restaurant)
        setTotal(total)
        console.log('total', total)
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ padding: 20 }}>
                    <Text style={globalStyles.header_group_text}>
                        Where there are no actual figures, please ask customer
                        to provide a best estimates
                    </Text>
                </View>
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>
                        FOOD EXPENSES
                    </Text>
                </View>
                <View style={styles.indentations}>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Groceries</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.groceries // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('groceries')}
                            onBlur={formik.handleBlur('groceries')}
                            value={formik.values.groceries.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.groceries && (
                            <Text style={globalStyles.error}>
                                {formik.errors.groceries}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Restaurant</Text>
                        <TextInput
                            placeholder="0"
                            style={
                                formik.errors.restaurant // use formik object here
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            onChangeText={formik.handleChange('restaurant')}
                            onBlur={formik.handleBlur('restaurant')}
                            value={formik.values.restaurant.toString()}
                            keyboardType="numbers-and-punctuation"
                        />
                        {formik.errors.restaurant && (
                            <Text style={globalStyles.error}>
                                {formik.errors.restaurant}
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
        </View>
    )
}

export default FoodExpenses

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: {
        flex: 1,
    },
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
