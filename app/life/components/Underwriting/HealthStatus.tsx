import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../../components/Themed'
import { globalStyles } from '../../../Styles/GlobalStyles'
import Checkbox from 'expo-checkbox'
import YesNoQuestionnaire from '../../../components/YesNoQuestionare'
import { FormikProps } from 'formik'
import { HealthQuestionnaire } from '../../../../model/entities'
import { YesNoRadioGroupState } from '../../../components/YesNoRadioGroup'
import { is } from 'date-fns/locale'
import { useQuoteContextType } from '../../../../context/QuoteContext'

type Props = {
    formik: FormikProps<HealthQuestionnaire>
}

function HealthStatus({ formik }: Props) {
    const { quoteSummary, setQuoteSummary } = useQuoteContextType()

    const allCheckedNo = () => {
        const checkedAnswers = [
            formik.values.hasLouGehrigDisease,
            formik.values.isCognitiveImpaired,
            formik.values.onDialysis,
            formik.values.isCancerPatient,
        ]
        return checkedAnswers.filter((answer) => answer === false).length === 4
    }

    const ableToPerformActivities = () => {
        const checkedAnswers = [
            formik.values.isAbleToBath,
            formik.values.isAbleToDress,
            formik.values.isAbleToEat,
            formik.values.isAbleTogoToilet,
            formik.values.isContinence,
            formik.values.isAbleToTransfer,
        ]

        return checkedAnswers.filter((answer) => answer === true).length > 4
    }

    useEffect(() => {
        if (allCheckedNo() && ableToPerformActivities()) {
            setQuoteSummary({ ...quoteSummary, accepted: true })
        } else {
            setQuoteSummary({ ...quoteSummary, accepted: false })
        }
    }, [formik.values])

    const verifyAnswers = () => {
        if (allCheckedNo() && ableToPerformActivities()) {
            return true
        } else {
            return false
        }
    }

    return (
        <View style={styles.container}>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    HEALTH STATUS
                </Text>
            </View>
            <View style={globalStyles.indentations}>
                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        question="Have you ever been diagnosed Lou-Gehrig's disease (ALS)?"
                        state={formik.values.hasLouGehrigDisease}
                        isRow={false}
                        labelYes="Yes, I am"
                        labelNo="No, I am not"
                        onPressYes={() => {
                            formik.setFieldValue('hasLouGehrigDisease', true)
                        }}
                        onPressNo={() => {
                            formik.setFieldValue('hasLouGehrigDisease', false)
                        }}
                    />
                </View>
                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        question="Do you have any Cognitive impairments (Alzheimer's disease, dementia, stroke)?"
                        state={formik.values.isCognitiveImpaired}
                        isRow={false}
                        labelYes="Yes, I am"
                        labelNo="No, I am not"
                        onPressYes={() => {
                            formik.setFieldValue('isCognitiveImpaired', true)
                        }}
                        onPressNo={() => {
                            formik.setFieldValue('isCognitiveImpaired', false)
                        }}
                    />
                </View>
                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        question="Are you currently on Dialysis dependency?"
                        state={formik.values.onDialysis}
                        isRow={false}
                        labelYes="Yes, I am"
                        labelNo="No, I am not"
                        onPressYes={() => {
                            formik.setFieldValue('onDialysis', true)
                        }}
                        onPressNo={() => {
                            formik.setFieldValue('onDialysis', false)
                        }}
                    />
                </View>

                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        question="Are you a cancer patient?"
                        state={formik.values.isCancerPatient}
                        isRow={false}
                        labelYes="Yes, I am"
                        labelNo="No, I am not"
                        onPressYes={() => {
                            formik.setFieldValue('isCancerPatient', true)
                        }}
                        onPressNo={() => {
                            formik.setFieldValue('isCancerPatient', false)
                        }}
                    />
                </View>

                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Are you able to perform of the following daily
                        activities?
                    </Text>
                    <View style={styles.row}>
                        <Checkbox
                            style={styles.checkBox}
                            color={
                                formik.values.isAbleToBath
                                    ? '#00A3AD'
                                    : undefined
                            }
                            value={formik.values.isAbleToBath}
                            onValueChange={(value) =>
                                formik.setFieldValue('isAbleToBath', value)
                            }
                        />
                        <Text style={globalStyles.label}>Bathing</Text>
                    </View>
                    <View style={styles.row}>
                        <Checkbox
                            style={styles.checkBox}
                            color={
                                formik.values.isAbleToDress
                                    ? '#00A3AD'
                                    : undefined
                            }
                            value={formik.values.isAbleToDress}
                            onValueChange={(value) =>
                                formik.setFieldValue('isAbleToDress', value)
                            }
                        />
                        <Text style={globalStyles.label}>Dressing</Text>
                    </View>
                    <View style={styles.row}>
                        <Checkbox
                            style={styles.checkBox}
                            color={
                                formik.values.isAbleToEat
                                    ? '#00A3AD'
                                    : undefined
                            }
                            value={formik.values.isAbleToEat}
                            onValueChange={(value) =>
                                formik.setFieldValue('isAbleToEat', value)
                            }
                        />
                        <Text style={globalStyles.label}>Eating</Text>
                    </View>
                    <View style={styles.row}>
                        <Checkbox
                            style={styles.checkBox}
                            color={
                                formik.values.isAbleTogoToilet
                                    ? '#00A3AD'
                                    : undefined
                            }
                            value={formik.values.isAbleTogoToilet}
                            onValueChange={(value) =>
                                formik.setFieldValue('isAbleTogoToilet', value)
                            }
                        />
                        <Text style={globalStyles.label}>Toileting</Text>
                    </View>
                    <View style={styles.row}>
                        <Checkbox
                            style={styles.checkBox}
                            color={
                                formik.values.isContinence
                                    ? '#00A3AD'
                                    : undefined
                            }
                            value={formik.values.isContinence}
                            onValueChange={(value) =>
                                formik.setFieldValue('isContinence', value)
                            }
                        />
                        <Text style={globalStyles.label}>Continence</Text>
                    </View>
                    <View style={styles.row}>
                        <Checkbox
                            style={styles.checkBox}
                            color={
                                formik.values.isAbleToTransfer
                                    ? '#00A3AD'
                                    : undefined
                            }
                            value={formik.values.isAbleToTransfer}
                            onValueChange={(value) =>
                                formik.setFieldValue('isAbleToTransfer', value)
                            }
                        />
                        <Text style={globalStyles.label}>
                            Transferring from bed to chair
                        </Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HealthStatus

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {},
    row: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        //justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkBox: {
        borderColor: '#00A3AD',
        borderWidth: 1,
    },
})
