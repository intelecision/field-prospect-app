import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../../Styles/GlobalStyles'
import Checkbox from 'expo-checkbox'
import { useFormik, FormikProps, FormikErrors } from 'formik'
import { TobaccoAnDrugUseQuestionnaire } from '../../../../model/entities'
import YesNoQuestionnaire from '../../../components/YesNoQuestionare'
import CheckBoxWithLabel from '../../../components/CheckBoxWithLabel'
import { set } from 'date-fns'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { useTobaccoQuestionnaireContext } from '../../../../context/QuestionnaireContext'
import { YesNoRadioGroupState } from '../../../components/YesNoRadioGroup'

type Props = {
    formik: FormikProps<TobaccoAnDrugUseQuestionnaire>
}

type TobaccoType = {
    name: string
    isChecked: boolean
}

let TobaccoAndSubstanceTypeUsed: TobaccoType[] = [
    { name: 'Cigarettes', isChecked: false },
    { name: 'Cigars', isChecked: false },
    { name: 'Pipe', isChecked: false },
    { name: 'Chewing Tobacco', isChecked: false },
    { name: 'Snuff', isChecked: false },
    { name: 'Nicotine Gum', isChecked: false },
    { name: 'Nicotine Patch', isChecked: false },
    { name: 'Nicotine Nasal Spray', isChecked: false },
    { name: 'Nicotine Inhaler', isChecked: false },
    { name: 'Electronic Cigarette', isChecked: false },
    { name: 'Other', isChecked: false },
]

//const TobaccoAndSubstanceType = [
//    'Cigarettes',
//    'Cigars',
//    'Pipe',
//    'Chewing Tobacco',
//    'Snuff',
//    'Nicotine Gum',
//    'Nicotine Patch',
//    'Nicotine Nasal Spray',
//    'Nicotine Inhaler',
//    'Electronic Cigarette',
//    'Other',
//]

const TobaccoAndSubstanceUsage = ({ formik }: Props) => {
    const { tobaccoQuestionnaire, setTobaccoQuestionnaire } =
        useTobaccoQuestionnaireContext()
    const [hasUsedTobacco, setHasUsedTobacco] =
        useState<YesNoRadioGroupState>(undefined)
    const [hasUsedNicotine, setHasUsedNicotine] =
        useState<YesNoRadioGroupState>(undefined)
    const [isSmoker, setIsSmoker] = useState<YesNoRadioGroupState>(undefined)
    const [hasUsedIllicitDrugs, setHasUsedIllicitDrugs] =
        useState<YesNoRadioGroupState>(undefined)
    const [howManySmokesPerDay, setHowManySmokesPerDay] = useState(0)
    const [typeOfNicotineUsed, setTypeOfNicotineUsed] = useState<string>('')
    const [otherTypeOfNicotineUsed, setOtherTypeOfNicotineUsed] = useState('')
    const [otherTypeOfNicotineUsedValue, setOtherTypeOfNicotineUsedValue] =
        useState('')
    const [otherTypeOfNicotineUsedChecked, setOtherTypeOfNicotineUsedChecked] =
        useState<YesNoRadioGroupState>(undefined)

    const setTobaccoAndSubstanceTypeUsed = (value: TobaccoType) => {
        TobaccoAndSubstanceTypeUsed.map((item) => {
            if (item.name === value.name) {
                item.isChecked = !value.isChecked
            }
        })
    }
    const getTobaccoAndSubstanceTypeUsed = () => {
        let result = ''
        TobaccoAndSubstanceTypeUsed.map((item) => {
            if (item.isChecked) {
                result = result + item.name + ','
            }
        })
        return result
    }

    const resetTobaccoTypes = () => {
        TobaccoAndSubstanceTypeUsed.map((item) => {
            item.isChecked = false
        })
    }

    const isOtherSelected = () => {
        let result = false
        TobaccoAndSubstanceTypeUsed.map((item) => {
            if (item.name === 'Other' && item.isChecked) {
                result = true
            }
        })
        return result
    }

    useEffect(() => {
        if (formik.values.haveYouUsedNicotineBasedProducts) {
            setHasUsedNicotine(true)
        } else {
            setHasUsedNicotine(false)
        }

        if (hasUsedNicotine) {
            formik.setFieldValue(
                'whichNicotineBasedProducts',
                getTobaccoAndSubstanceTypeUsed()
            )
        } else {
            formik.setFieldValue('whichNicotineBasedProducts', '')
            setTobaccoQuestionnaire({
                ...tobaccoQuestionnaire,
                whichNicotineBasedProducts: '',
                haveYouUsedNicotineBasedProducts: false,
            })
            setOtherTypeOfNicotineUsed('')
        }
    }, [
        typeOfNicotineUsed,
        otherTypeOfNicotineUsedChecked,
        otherTypeOfNicotineUsed,
    ])
    console.log('hasUsedNicotine', hasUsedNicotine)

    return (
        <View style={styles.container}>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    TOBACCO USAGE
                </Text>
            </View>
            <View style={globalStyles.indentations}>
                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        isRow={false}
                        question="Have you ever used Nicotine-based products?"
                        state={hasUsedNicotine}
                        labelYes="Yes, I have"
                        labelNo="No, I have not"
                        onPressYes={() => {
                            setHasUsedNicotine(true)
                            formik.setFieldValue(
                                'haveYouUsedNicotineBasedProducts',
                                true
                            )
                        }}
                        onPressNo={() => {
                            setHasUsedNicotine(false)
                            formik.setFieldValue(
                                'haveYouUsedNicotineBasedProducts',
                                false
                            )
                            resetTobaccoTypes()
                        }}
                    />

                    {hasUsedNicotine && (
                        <View style={globalStyles.editGroup}>
                            <View style={{ flex: 1, marginVertical: 10 }}>
                                <Text style={globalStyles.label}>
                                    Which types of nicotine products have you
                                    used?
                                </Text>

                                {TobaccoAndSubstanceTypeUsed.map(
                                    (item, index) => (
                                        <View
                                            key={index}
                                            style={{
                                                flex: 1,
                                                marginTop: 10,
                                                marginHorizontal: 20,
                                            }}
                                        >
                                            <CheckBoxWithLabel
                                                label={item.name}
                                                isChecked={item.isChecked}
                                                onChecked={() => {
                                                    setTobaccoAndSubstanceTypeUsed(
                                                        item
                                                    )
                                                    setTypeOfNicotineUsed(
                                                        getTobaccoAndSubstanceTypeUsed()
                                                    )
                                                    if (item.name === 'Other') {
                                                        setOtherTypeOfNicotineUsedChecked(
                                                            isOtherSelected()
                                                        )
                                                    }
                                                }}
                                            />
                                        </View>
                                    )
                                )}
                                {otherTypeOfNicotineUsedChecked && (
                                    <View style={globalStyles.editGroup}>
                                        <TextInput
                                            placeholder="other"
                                            style={globalStyles.input}
                                            onChangeText={(text) => {
                                                setOtherTypeOfNicotineUsed(text)
                                                //formik.setFieldValue(
                                                //    'otherTypeOfNicotineUsed',
                                                //    text
                                                //)
                                            }}
                                            value={otherTypeOfNicotineUsed}
                                        />
                                    </View>
                                )}
                            </View>
                        </View>
                    )}

                    <View style={{}}>
                        <View style={{ flex: 0.9 }}>
                            <YesNoQuestionnaire
                                isRow={false}
                                question="Are you a Smoker or Non-Smoker?"
                                state={isSmoker}
                                labelYes="Yes, I am"
                                labelNo="No, I am not"
                                onPressYes={() => {
                                    setIsSmoker(true)
                                    formik.setFieldValue('areYouSmoker', true)
                                }}
                                onPressNo={() => {
                                    setIsSmoker(false)
                                    formik.setFieldValue('areYouSmoker', false)
                                }}
                            />
                        </View>
                    </View>
                    {isSmoker && (
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                How many cigarettes do you smoke per day?
                            </Text>
                            <TextInput
                                placeholder="0"
                                style={globalStyles.input}
                                onChangeText={(text) => {
                                    setHowManySmokesPerDay(Number(text))
                                    formik.setFieldValue(
                                        'ifSmokerHowManyPerDay',
                                        Number(text)
                                    )
                                }}
                                value={String(
                                    formik.values.ifSmokerHowManyPerDay
                                )}
                                keyboardType="numeric"
                            />
                        </View>
                    )}
                    <View style={globalStyles.editGroup}>
                        <YesNoQuestionnaire
                            isRow={false}
                            question="Do you or have you ever used illicit drugs?"
                            state={hasUsedIllicitDrugs}
                            labelYes="Yes, I have"
                            labelNo="No, I have not"
                            onPressYes={() => {
                                setHasUsedIllicitDrugs(true)
                                formik.setFieldValue(
                                    'haveYouUsedIllicitDrugs',
                                    'Yes'
                                )
                            }}
                            onPressNo={() => {
                                setHasUsedIllicitDrugs(false)
                                formik.setFieldValue(
                                    'haveYouUsedIllicitDrugs',
                                    'No'
                                )
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TobaccoAndSubstanceUsage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {},
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
})
