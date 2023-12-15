import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import GroupScreen from './components/GroupScreen'
import GroupStepOne from './components/GroupStepOne'
import NavigationBar from './../../components/NavigationBar'
import { router } from 'expo-router'
import GroupDetails from './components/GroupDetails'
import PolicyRequirements from './components/PolicyRequirements'
import GroupProducts from './components/GroupProducts'
import { Text } from '../components/Themed'

type Props = {}

const GroupWizardScreen = (props: Props) => {
    const [step, setStep] = useState(0)
    const [numberOfSteps, setNumberOfSteps] = useState(5)
    const [currentStep, setCurrentStep] = useState(0)

    const nextStep = () => {
        if (currentStep < numberOfSteps) {
            setCurrentStep(currentStep + 1)
        }
    }
    const previousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleWizardStep = () => {
        switch (currentStep) {
            case 0:
                return <GroupStepOne />
            case 1:
                return <GroupDetails />
            case 2:
                return <PolicyRequirements />
            case 3:
                return <GroupProducts />
            //case 4:
            //    return <Step5 />
            default:
                return (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            //backgroundColor: 'pink',
                            padding: 20,
                        }}
                    >
                        <Text style={{ fontSize: 16 }}>
                            {' '}
                            Group application is complete. Please provide the
                            information given to you and fill out your group
                            members details and send it to the email address
                            provided
                        </Text>
                    </View>
                )
        }
    }

    return (
        <View style={styles.container}>
            <GroupScreen
                heading={'Group Life Application'}
                handleCancel={() => console.log('cancelled')}
            >
                {/*<ScrollView style={styles.scrollContent}>*/}
                <View style={styles.content}>{handleWizardStep()}</View>
                {/*</ScrollView>*/}
            </GroupScreen>
            <View style={styles.footer}>
                <NavigationBar
                    enableBackButton
                    enableNextButton
                    onBackButtonPress={() =>
                        currentStep === 0 ? router.back() : previousStep()
                    }
                    onNextButtonPress={() => {
                        nextStep()
                    }}
                />
            </View>
        </View>
    )
}

export default GroupWizardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flex: 1,
    },
    header: {
        //backgroundColor: '#00A3AD',
        //height: 120,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    footer: {
        width: '100%',
        height: 150,
        padding: 20,
        position: 'relative',
        bottom: 0,
    },
})
