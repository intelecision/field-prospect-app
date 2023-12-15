import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Checkbox from 'expo-checkbox'
import { Text } from '../../components/Themed'
import { Question, QuestionnaireList } from '../../data/questionaire'
import { ScrollView } from 'react-native-gesture-handler'
import { useInterestedProduct } from '../../../context/QuoteContext'
import { globalStyles } from '../../Styles/GlobalStyles'

type Props = {
    selectedPolicy: Question[]
    setSelectedPolicy: (policy: Question[]) => void
}
const ChooseProducts = ({ selectedPolicy, setSelectedPolicy }: Props) => {
    const { interestedProduct: interestProduct, setInterestedProduct } =
        useInterestedProduct()
    //const [selectedPolicy, setSelectedPolicy] = useState<Question[]>([])

    const [updatedQuestionnaireList, setUpdatedQuestionnaireList] =
        useState<Question[]>(QuestionnaireList)

    const handleChecked = (question: Question) => {
        const updatedList = updatedQuestionnaireList.map((item) => {
            if (item.id === question.id) {
                return {
                    ...item,
                    selected: !question.selected,
                }
            }
            return item
        })
        setUpdatedQuestionnaireList(updatedList)
    }

    const findSelectedPolicy = () => {
        const selectedPolicy = updatedQuestionnaireList.filter(
            (item) => item.selected
        )

        return selectedPolicy
    }

    useEffect(() => {
        setSelectedPolicy(findSelectedPolicy())
    }, [updatedQuestionnaireList])

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.content}>
                            <Text
                                style={[
                                    styles.paragraph,
                                    {
                                        fontSize: 18,
                                        fontWeight: '700',
                                        margin: 20,
                                        //color: '#fff',
                                    },
                                ]}
                            >
                                Please answer the following questions to assist
                                us in recommending a suitable life insurance
                                product for you.
                            </Text>
                            {updatedQuestionnaireList.map((question, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleChecked(question)}
                                >
                                    <View
                                        key={index}
                                        style={styles.sectionContent}
                                    >
                                        <Text style={styles.title}>
                                            {question.policy}
                                        </Text>
                                        <View
                                            key={index}
                                            style={styles.section}
                                        >
                                            <View style={{ flex: 0.9 }}>
                                                <Text style={styles.paragraph}>
                                                    {question.question}
                                                </Text>
                                            </View>
                                            <View style={{ flex: 0.1 }}>
                                                <Checkbox
                                                    style={styles.checkBox}
                                                    value={question.selected}
                                                    onValueChange={() => {
                                                        handleChecked(question)
                                                    }}
                                                    color={
                                                        question.selected
                                                            ? '#31afb3'
                                                            : undefined
                                                    }
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ChooseProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginHorizontal: 10,
        //    marginVertical: 32,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sectionContent: {
        //alignItems: 'center',
        marginBottom: 20,
        borderRadius: 6,
        padding: 20,
        marginVertical: 4,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    paragraph: {
        fontSize: 15,
        textAlign: 'justify',
    },
    checkBox: {
        alignSelf: 'center',
        marginLeft: 10,
        borderColor: '#31afb3',
        borderWidth: 1,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginBottom: 10,
    },
})
function useLifeInsuranceContext() {
    throw new Error('Function not implemented.')
}
