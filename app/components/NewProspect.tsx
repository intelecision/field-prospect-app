import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    onNewProspect: () => void
    onMicroProspect: () => void
    onGroupLife: () => void
}

const NewProspect = ({
    onMicroProspect,
    onNewProspect,
    onGroupLife,
}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.bottom}>
                <View style={styles.itemRow}>
                    <TouchableOpacity onPress={onNewProspect}>
                        <View style={styles.circle}>
                            <MaterialIcons
                                name="group-add"
                                size={30}
                                color={colors.white}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Formal Sector</Text>
                </View>
                <View style={styles.itemRow}>
                    <TouchableOpacity onPress={onMicroProspect}>
                        <View style={styles.circle}>
                            <MaterialIcons
                                name="group-add"
                                size={30}
                                color={colors.white}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Micro Sector</Text>
                </View>
                <View style={styles.itemRow}>
                    <TouchableOpacity onPress={onGroupLife}>
                        <View style={styles.circle}>
                            <MaterialIcons
                                name="group-add"
                                size={30}
                                color={colors.white}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Group Insurance</Text>
                </View>
            </View>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            {/*<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />*/}
        </View>
    )
}

export default NewProspect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: colors.primary, // '#fff',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primary,
        borderWidth: 2,
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //marginBottom: 36,
        //paddingHorizontal: 20,

        width: '100%',
    },
    itemRow: {
        //flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        //backgroundColor: 'pink',
    },
    text: {
        //fontSize: 18,
        fontWeight: 'bold',
    },
})
