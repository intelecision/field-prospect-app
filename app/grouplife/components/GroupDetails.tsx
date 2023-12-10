// Component: GroupDetails

import { useState } from 'react'
import { View, Text, TextInput } from '../../../components/Themed'
import { globalStyles } from '../../Styles/GlobalStyles'
import { YesNoRadioGroup } from '../../components/YesNoRadioGroup'
import { boolean } from 'yup'
import { YesNoCheckState } from '../../components/YesNoCheckGroup'
import { tr } from 'date-fns/locale'

type Props = {}

const GroupDetails = (props: Props) => {
    const [isChecked, setChecked] = useState(undefined)
    return (
        <View>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    GROUP DETAILS
                </Text>
            </View>
            <View style={globalStyles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group Name</Text>
                    <TextInput placeholder="Title" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Group Type</Text>
                    <TextInput placeholder="Title" style={globalStyles.input} />
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Is your Group registered in Ghana
                    </Text>
                    <View style={globalStyles.indentations}>
                        <YesNoRadioGroup
                            state={isChecked}
                            labelYes={'Yes'}
                            labelNo={'No'}
                            onPressYes={() => console.log('yes')}
                            onPressNo={() => console.log('yes')}
                        />
                    </View>
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Is your business registered with Companies House?
                    </Text>
                    <View style={globalStyles.indentations}>
                        <YesNoRadioGroup
                            state={isChecked}
                            labelYes={'Yes'}
                            labelNo={'No'}
                            onPressYes={() => console.log('yes')}
                            onPressNo={() => console.log('yes')}
                        />
                    </View>
                    <Text style={globalStyles.label}>
                        Company Registration Number
                    </Text>
                    <TextInput placeholder="Title" style={globalStyles.input} />
                </View>
                {/*<View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Is your business registered with Companies House?
                    </Text>
                    <YesNoRadioGroup
                        state={isChecked}
                        labelYes={'Yes'}
                        labelNo={'No'}
                        onPressYes={() => console.log('yes')}
                        onPressNo={() => console.log('yes')}
                    />
                </View>*/}
            </View>
        </View>
    )
}

export default GroupDetails
