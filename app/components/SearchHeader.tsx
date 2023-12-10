import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'

import { TextInput, Text } from '../../components/Themed'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
    search: string
    placeholder?: string
    isFocused: boolean
    showBackButton?: boolean
    onChangeText: (text: string) => void
    onBlur: () => void
    onFocus: () => void
    onCancelButtonPress: () => void
    onSubmit: () => void
}
const { width, height } = Dimensions.get('window')
///
const SearchHeader = ({
    isFocused,
    search,
    placeholder = 'Search',
    showBackButton = true,
    onChangeText,
    onBlur,
    onFocus,
    onCancelButtonPress,
    onSubmit,
}: Props) => {
    //const searchRef = React.useRef(null)
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.goBack()
    }
    const inputRef = React.useRef(null)

    return (
        <>
            <View style={styles.header}>
                <View style={styles.header_inner}>
                    <View
                        style={{
                            ...styles.input_box,
                            paddingLeft: !showBackButton ? 40 : 0,
                        }}
                    >
                        {showBackButton && (
                            <TouchableWithoutFeedback
                                style={styles.search_icon_box}
                                onPress={handlePress}
                            >
                                <Ionicons
                                    name="chevron-back-outline"
                                    size={24}
                                    color="black"
                                />
                            </TouchableWithoutFeedback>
                        )}

                        <View
                            style={[
                                styles.input,
                                {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                },
                            ]}
                        >
                            <Ionicons name="search" size={20} color="#6b6e70" />
                            <TextInput
                                //ref={inputRef}
                                placeholder={placeholder}
                                placeholderTextColor="#6b6e70"
                                clearButtonMode="always"
                                style={styles.input}
                                value={search}
                                onChangeText={onChangeText}
                                onPressIn={onFocus}
                                onBlur={onBlur}
                                blurOnSubmit={true}
                                returnKeyType="search"
                                returnKeyLabel="search"
                                onSubmitEditing={onSubmit}
                            />
                        </View>
                        {isFocused && (
                            <View>
                                <TouchableWithoutFeedback
                                    style={{ marginLeft: 10 }}
                                    onPress={() => {
                                        onCancelButtonPress()
                                        onBlur()
                                    }}
                                >
                                    <Text>Cancel</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                    </View>
                </View>
                {/*</View>*/}
            </View>
            <View style={styles.separator} />
        </>
    )
}
export default SearchHeader
const styles = StyleSheet.create({
    header_safe_area: {
        zIndex: 1000,
    },
    header: {
        flexDirection: 'row',
        height: 50,
    },
    header_inner: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    search_icon_box: {
        //flexDirection: 'row',
        width: 40,
        height: 40,
        //backgroundColor: '#e4e6eb',
        //borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_box: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',

        position: 'absolute',
        top: 0,
        left: 0,
        //backgroundColor: '#fff',
        width: width - 40,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#e4e6eb',
        paddingHorizontal: 10,
        borderRadius: 20,
        fontSize: 16,
    },
    input_panel: {
        flex: 1,
        height: 40,
        //backgroundColor: 'red',
        paddingHorizontal: 20,
        borderRadius: 20,
        fontSize: 16,
    },
    separator: {
        marginTop: 10,
        height: 1,
        //    backgroundColor: '#e4e6eb',
        backgroundColor: 'tranparent',
    },
    //search_item: {
    //    paddingVertical: 20,
    //    paddingHorizontal: 20,
    //},
})
