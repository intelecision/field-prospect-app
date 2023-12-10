import { StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { Text } from '../../../components/Themed'
import { FormikProps } from 'formik'
import { MonthlySalary } from '../../../model/entities'
import { globalStyles } from '../../Styles/GlobalStyles'
import { strToNumber } from '../../../formulae/calculations'

type Props = {
    formik: FormikProps<MonthlySalary>
    setTotal(total: number): void
}

const MonthlyIncome = ({ formik, setTotal }: Props) => {
    const { values } = formik
    const { currentMonthlySalary, otherIncome } = values
    const calculateTotal = () => {
        let total = 0
        total += strToNumber(currentMonthlySalary)
        total += strToNumber(otherIncome)
        setTotal(total)
    }

    useEffect(() => {
        calculateTotal()
    }, [formik.values])

    return (
        <View>
            <View>
                <View style={{ padding: 20 }}>
                    <Text style={globalStyles.header_group_text}>
                        Where there are no actual figures, please ask customer
                        to provide a best estimates
                    </Text>
                </View>
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>
                        MONTHLY INCOME
                    </Text>
                </View>
                <View style={styles.indentations}></View>

                <View style={styles.editGroup}>
                    <Text style={styles.label}>Current Monthly Salary</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.currentMonthlySalary // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange(
                            'currentMonthlySalary'
                        )}
                        onBlur={formik.handleBlur('currentMonthlySalary')}
                        value={formik.values.currentMonthlySalary.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.currentMonthlySalary && (
                        <Text style={globalStyles.error}>
                            {formik.errors.currentMonthlySalary}
                        </Text>
                    )}
                </View>
                <View style={styles.editGroup}>
                    <Text style={styles.label}>Other income</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.otherIncome // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('otherIncome')}
                        onBlur={formik.handleBlur('otherIncome')}
                        value={formik.values.otherIncome.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.otherIncome && (
                        <Text style={globalStyles.error}>
                            {formik.errors.otherIncome}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    )
}

export default MonthlyIncome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    editGroup: {
        //marginHorizontal: 20,
        marginVertical: 10,
    },
    editGroupText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        //fontWeight: 'bold',
        marginHorizontal: 20,
        //marginVertical: 10,
    },
    input: {
        marginHorizontal: 20,
        marginVertical: 4,
        padding: 10,
        borderColor: '#d3d3d3',
        //backgroundColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
    },
    line: {
        height: 1,
        backgroundColor: '#d3d3d3',
        marginHorizontal: 20,
        marginVertical: 10,
        width: '70%',
    },
    header_group: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        //justifyContent: 'center',
        marginHorizontal: 20,
        //marginVertical: 10,
    },
    header_group_text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#00A3AD',
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
