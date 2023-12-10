import {
    Platform,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useCallback } from 'react'

import { Entypo, MaterialIcons } from '@expo/vector-icons'

import { router } from 'expo-router'
import { colors } from '../../../../../constants/Colors'
import SearchHeader from '../../../../components/SearchHeader'

type Props = {
    children: React.ReactNode
    canGoBack?: boolean
    handleSubmit: (search: string) => void
}

const HelpScreen = (props: Props) => {
    const { children, canGoBack, handleSubmit } = props
    const [search, setSearch] = React.useState<string>('')
    const [isSearching, setIsSearching] = React.useState<boolean>(false)
    const [isFocused, setIsFocused] = React.useState<boolean>(false)

    const _onFocus = () => {
        if (!isFocused) setIsFocused(true)
    }
    const _onBlur = () => {
        setIsFocused(false)
    }
    const oncancelButtonPress = () => {
        setIsFocused(false)
        setSearch('')
        _onBlur()
    }

    const updateSearch = useCallback(
        (text: string) => {
            setSearch(text)
            if (text.length > 0 && !isFocused) {
                setIsFocused(true)
            }
            if (text.length > 0) {
                //searchPhrases(search)
                setIsSearching(true)
            } else {
                setIsSearching(false)
            }
        },
        [search]
    )
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#f8f8fa',
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            }}
        >
            <StatusBar barStyle="dark-content" />
            <SearchHeader
                search={search}
                showBackButton={true}
                onChangeText={updateSearch}
                isFocused={isFocused}
                onBlur={_onBlur}
                onFocus={_onFocus}
                onCancelButtonPress={oncancelButtonPress}
                onSubmit={() => {
                    handleSubmit(search)
                }}
            />
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={styles.button}>
                        <Entypo name="home" size={24} color={colors.primary} />
                    </View>
                    <Text>Home</Text>
                </View>
                <TouchableOpacity
                    style={{}}
                    onPress={() => {
                        router.push('/help/knowladgeBase')
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={styles.button}>
                            <MaterialIcons
                                name="local-library"
                                size={24}
                                color={colors.primary}
                            />
                        </View>
                        <Text style={{}}>Knowledge Base</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={styles.button}>
                        <Entypo
                            name="ticket"
                            size={24}
                            color={colors.primary}
                        />
                    </View>
                    <Text style={{}}>Ticket</Text>
                </View>
                <View style={styles.content}>{children}</View>
            </View>
        </SafeAreaView>
    )
}

export default HelpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    searchItem: {
        borderRadius: 6,
        padding: 10,
        marginVertical: 2,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 100,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
})
