import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Checkbox from 'expo-checkbox'

type Props = {}
const GroupLife = [
    {
        id: 1,
        name: 'Group Life',
        description: 'Group Life',
        created_at: '2021-08-10T14:54:04.000000Z',
        updated_at: '2021-08-10T14:54:04.000000Z',
        selected: false,
        question:
            'Are you a business or other entity that wishes to provide group insurance coverage, such as life insurance or critical illness benefits, for its employees or members as a benefit?',
    },
    {
        id: 2,
        name: 'Funeral Insurance',
        description: 'Funeral Insurace',
        created_at: '2021-08-10T14:54:04.000000Z',
        updated_at: '2021-08-10T14:54:04.000000Z',
        selected: false,
        question:
            'Does the group expects to incur funeral and burial expenses when a memberof the group dies?',
    },

    {
        id: 4,
        name: 'Group term life insurance',
        description: 'Group term life insurance',
        created_at: null,
        updated_at: null,
        selected: false,
        question: 'Does your Group need Group this?',
    },
    {
        id: 5,
        name: 'Group credit life insurance',
        description: 'Group credit life insurance',
        created_at: null,
        updated_at: null,
        selected: false,
        question: 'Does your Group need Group this?',
    },
    {
        id: 6,
        name: 'Group travel insurance',
        description: 'Group travel insurance',
        created_at: null,
        updated_at: null,
        selected: false,
        question: 'Does your Group need Group this?',
    },
]
const GroupProducts = (props: Props) => {
    const [selectedProduct, setSelectedProduct] = React.useState([])
    const handleChecked = (product: any) => {
        const updatedList = GroupLife.map((item) => {
            if (item.id === product.id) {
                return {
                    ...item,
                    selected: !product.selected,
                }
            }
            return item
        })
        //setSelectedProduct(updatedList)
    }
    return (
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
                        Please answer the following questions to assist us in
                        recommending a suitable life insurance product for you.
                    </Text>
                    {GroupLife.map((question, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleChecked(question)}
                        >
                            <View key={index} style={styles.sectionContent}>
                                <Text style={styles.title}>
                                    {question.name}
                                </Text>
                                <View key={index} style={styles.section}>
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
    )
}

export default GroupProducts
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
