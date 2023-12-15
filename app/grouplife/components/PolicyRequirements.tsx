import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from '../../components/Themed'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Ionicons } from '@expo/vector-icons'

type Props = {}

const PolicyRequirements = (props: Props) => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>
                        POLICY REQUIREMENT
                    </Text>
                </View>
                <View style={globalStyles.indentations}>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            How many employees are to be covered by this scheme:
                        </Text>
                        <TextInput
                            placeholder="Title"
                            style={globalStyles.input}
                        />
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            When do you need the cover for your employees to
                            end?
                        </Text>
                        <TextInput
                            placeholder="65 years old (or State Pension Age if higher)"
                            style={globalStyles.input}
                        />
                    </View>
                </View>
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>
                        GROUP DATA
                    </Text>
                </View>
                <View style={globalStyles.indentations}>
                    <View style={[globalStyles.editGroup, { margin: 10 }]}>
                        <Text style={styles.text}>
                            We have provided a spreadsheet template for you to
                            complete and return to us by email or whatsApp{' '}
                        </Text>
                        <Text style={styles.text}>
                            Wee need the following information:
                        </Text>
                        <Text style={styles.text}>
                            1. Full name of each employee to be covered by the
                            scheme
                        </Text>
                        <Text style={styles.text}>
                            2. Date of birth of each employee
                        </Text>
                        <Text style={styles.text}>
                            3. Salary of each employee (or salary band if you
                            prefer)
                        </Text>
                        <Text style={styles.text}>
                            4. The date you want the cover to start for each
                            employee
                        </Text>
                        <Text style={styles.text}>
                            5. The date you want the cover to end for each
                            employee
                        </Text>
                        <Text style={styles.text}>
                            6. The amount of cover you want for each employee
                            (or multiple of salary)
                        </Text>
                        <Text style={styles.text}>7.National ID number</Text>
                    </View>
                    <View
                        style={[
                            globalStyles.editGroup,
                            {
                                height: 120,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 40,
                            },
                        ]}
                    >
                        <Text style={styles.text}>
                            Send spreadsheet to yhe group to complete
                        </Text>
                        <Ionicons
                            name="share-social-outline"
                            size={32}
                            color="green"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PolicyRequirements

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 30,
        flex: 1,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
})
