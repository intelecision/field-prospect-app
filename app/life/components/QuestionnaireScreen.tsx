import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'

import { Text } from '../../../components/Themed'
import { Stack, router } from 'expo-router'
import Progress from './Propgress'
import { Ionicons } from '@expo/vector-icons'
import { Alert } from 'react-native'
import { globalStyles } from '../../Styles/GlobalStyles'

type Props = {
    heading: string
    children: React.ReactNode
    step: number
    numberOfSteps: number
    //showAskBestEstimate?: boolean
}

const handleCancel = () => {
    Alert.alert('Cancel', 'Are you sure you want to cancel?', [
        {
            text: 'Yes',
            onPress: () => router.push('/(start)'),
            style: 'cancel',
        },
        { text: 'No', onPress: () => console.log('OK Pressed') },
    ])
}

const QuestionnaireScreen: FC<Props> = (props: Props) => {
    const { heading, step, numberOfSteps, children } = props
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <Ionicons
                            name="close-outline"
                            size={32}
                            color="black"
                            style={{ marginRight: 20 }}
                            onPress={handleCancel}
                        />
                    ),
                }}
            />

            <View
                style={[
                    {
                        justifyContent: 'center',
                        backgroundColor: '#00A3AD',
                        alignItems: 'center',
                        minHeight: 60,
                    },
                ]}
            >
                <Text
                    style={{
                        fontFamily: 'OpenSans_700Bold',
                        fontSize: 20,
                        //fontWeight: '700',
                        justifyContent: 'center',
                        color: '#fff',
                    }}
                >
                    Questionnaire
                </Text>

                <Text
                    style={{
                        fontSize: 20,

                        justifyContent: 'center',
                        color: '#fff',
                    }}
                >
                    {heading}
                </Text>
                <View
                    style={{
                        height: 30,
                        margin: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Progress
                        currentStep={step}
                        numberOfSteps={numberOfSteps}
                    />
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 12,
                            justifyContent: 'center',
                            color: '#fff',
                        }}
                    >
                        Step {step + 1} of {numberOfSteps}
                    </Text>
                </View>
            </View>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {/*{showAskBestEstimate && (
                    <View style={{ padding: 20 }}>
                        <Text style={globalStyles.header_group_text}>
                            Where there are no actual figures, please ask
                            customer to provide a best estimates
                        </Text>
                    </View>
                )}*/}
                <View style={styles.content}>{children}</View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default QuestionnaireScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        //padding: 20,
    },
})
