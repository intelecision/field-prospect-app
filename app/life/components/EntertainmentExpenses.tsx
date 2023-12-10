import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { FormikProps } from 'formik'
import { Entertainment } from '../../../model/entities'
import { strToNumber } from '../../../formulae/calculations'
type Props = {
    formik: FormikProps<Entertainment>
    setTotal: (total: number) => void
}

const EntertainmentExpenses = (props: Props) => {
    const { formik, setTotal } = props
    const { values } = formik

    useEffect(() => {
        calcTotal()
    }, [values])

    const calcTotal = () => {
        let total = 0
        total += strToNumber(values.movies)
        total += strToNumber(values.concerts)
        total += strToNumber(values.sportingEvents)
        total += strToNumber(values.theaters)
        total += strToNumber(values.other)

        setTotal(total)
    }

    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <Text style={globalStyles.header_group_text}>
                    Where there are no actual figures, please ask customer to
                    provide a best estimates
                </Text>
            </View>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    ENTERTAINMENT{' '}
                </Text>
            </View>
            <View style={styles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Movies</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.movies // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('movies')}
                        onBlur={formik.handleBlur('movies')}
                        value={formik.values.movies.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.movies && (
                        <Text style={globalStyles.error}>
                            {formik.errors.movies}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Concerts</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.concerts // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('concerts')}
                        onBlur={formik.handleBlur('concerts')}
                        value={formik.values.concerts.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.concerts && (
                        <Text style={globalStyles.error}>
                            {formik.errors.concerts}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Sport Events</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.sportingEvents // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('sportingEvents')}
                        onBlur={formik.handleBlur('sportingEvents')}
                        value={formik.values.sportingEvents.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.sportingEvents && (
                        <Text style={globalStyles.error}>
                            {formik.errors.sportingEvents}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Theaters</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.theaters // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('theaters')}
                        onBlur={formik.handleBlur('theaters')}
                        value={formik.values.theaters.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.theaters && (
                        <Text style={globalStyles.error}>
                            {formik.errors.theaters}
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

export default EntertainmentExpenses

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
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
