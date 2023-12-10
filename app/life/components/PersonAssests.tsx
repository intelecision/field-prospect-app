import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'
import React, { useEffect } from 'react'
import { Text, TextInput } from '../../../components/Themed'
import { FormikProps } from 'formik'
import { globalStyles } from '../../Styles/GlobalStyles'
import { strToNumber } from '../../../formulae/calculations'
import { useQuoteContextType } from '../../../context/QuoteContext'
import { Asset } from '../../../model/entities'

type Props = {
    formik: FormikProps<Asset>
    setTotal(total: number): void
}

const PersonAssets = ({ formik, setTotal }: Props) => {
    const {
        setAssetAndLiabilities,
        assetAndLiabilities,
        personalMonthlyExpenses,
    } = useQuoteContextType()
    useEffect(() => {
        setAssetAndLiabilities({
            ...assetAndLiabilities,
            currentAccount: strToNumber(formik.values.currentAccount),
            savingAccount: strToNumber(formik.values.savingAccount),
            otherLiquidAssets: strToNumber(formik.values.otherLiquidAssets),
        })
        const total =
            strToNumber(formik.values.currentAccount) +
            strToNumber(formik.values.savingAccount) +
            strToNumber(formik.values.otherLiquidAssets)

        setTotal(total)
    }, [
        formik.values.currentAccount,
        formik.values.savingAccount,
        formik.values.otherLiquidAssets,
    ])

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
            <View style={styles.container}>
                <ScrollView
                    style={styles.contentContainer}
                    scrollEventThrottle={16}
                >
                    <View style={globalStyles.header_group}>
                        <Text style={globalStyles.header_group_text}>
                            ASSETS
                        </Text>
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Current Account</Text>
                        <TextInput
                            testID="currentAccount"
                            style={
                                formik.errors.currentAccount
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="0"
                            keyboardType="number-pad"
                            onBlur={formik.handleBlur('currentAccount')}
                            value={formik.values.currentAccount.toString()}
                            onChangeText={formik.handleChange('currentAccount')}
                        />
                        {formik.errors.currentAccount && (
                            <Text style={globalStyles.error}>
                                {formik.errors.currentAccount}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Saving Account</Text>
                        <TextInput
                            testID="savingAccount"
                            style={
                                formik.errors.savingAccount
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            keyboardType="number-pad"
                            placeholder="0"
                            onBlur={formik.handleBlur('savingAccount')}
                            value={formik.values.savingAccount.toString()}
                            onChangeText={formik.handleChange('savingAccount')}
                        />
                        {formik.errors.savingAccount && (
                            <Text style={globalStyles.error}>
                                {formik.errors.savingAccount}
                            </Text>
                        )}
                    </View>

                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            {' '}
                            Other Liquid Assets
                        </Text>
                        <TextInput
                            style={
                                formik.errors.otherLiquidAssets
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="0"
                            keyboardType="number-pad"
                            onBlur={formik.handleBlur('otherLiquidAssets')}
                            value={formik.values.otherLiquidAssets.toString()}
                            onChangeText={formik.handleChange(
                                'otherLiquidAssets'
                            )}
                        />
                        {formik.errors.otherLiquidAssets && (
                            <Text style={globalStyles.error}>
                                {formik.errors.otherLiquidAssets}
                            </Text>
                        )}
                    </View>
                    <View style={globalStyles.header_group}></View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default PersonAssets

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
        marginVertical: 20,
        paddingBottom: 40,
    },
})
