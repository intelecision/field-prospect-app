// Component: GroupDetails

import { useState } from 'react'
import { View, Text, TextInput } from '../../../components/Themed'
import { globalStyles } from '../../Styles/GlobalStyles'
import {
    YesNoRadioGroup,
    YesNoRadioGroupState,
} from '../../components/YesNoRadioGroup'
import { boolean } from 'yup'
import { YesNoCheckState } from '../../components/YesNoCheckGroup'
import { tr } from 'date-fns/locale'
import { ScrollView, StyleSheet } from 'react-native'

type Props = {}

const GroupDetails = (props: Props) => {
    const [isChecked, setChecked] = useState<YesNoRadioGroupState>(undefined)
    const [isRegistered, setRegistered] =
        useState<YesNoRadioGroupState>(undefined)
    const [isRegisteredWithCompaniesHouse, setRegisteredWithCompaniesHouse] =
        useState<YesNoRadioGroupState>(undefined)
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>
                        GROUP DETAILS
                    </Text>
                </View>
                <View style={globalStyles.indentations}>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Group Name</Text>
                        <TextInput
                            placeholder="Title"
                            style={globalStyles.input}
                        />
                    </View>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Group Type</Text>
                        <TextInput
                            placeholder="Title"
                            style={globalStyles.input}
                        />
                    </View>

                    {/*<View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Is your Group registered in Ghana
                    </Text>
                    <View style={globalStyles.indentations}>
                        <YesNoRadioGroup
                            state={isRegistered}
                            labelYes={'Yes'}
                            labelNo={'No'}
                            onPressYes={() => setRegistered(true)}
                            onPressNo={() => setRegistered(false)}
                        />
                    </View>
                </View>*/}
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            Is your Group registered as Company?
                        </Text>
                        <View style={globalStyles.indentations}>
                            <YesNoRadioGroup
                                state={isRegisteredWithCompaniesHouse}
                                labelYes={'Yes'}
                                labelNo={'No'}
                                onPressYes={() =>
                                    setRegisteredWithCompaniesHouse(true)
                                }
                                onPressNo={() =>
                                    setRegisteredWithCompaniesHouse(false)
                                }
                            />
                        </View>

                        {isRegisteredWithCompaniesHouse && (
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Company Registration/TIN Number
                                </Text>
                                <TextInput
                                    placeholder="Title"
                                    style={globalStyles.input}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default GroupDetails
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
