import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { set } from 'date-fns'
//import Animated from 'react-native-reanimated'

type Props = {
    onPress: () => void
    onGroupPress: () => void
    style?: any
}

const FloatingButton = ({ style, onPress, onGroupPress }: Props) => {
    const animation = new Animated.Value(0)
    const [btn_1] = React.useState(new Animated.Value(40))
    const [btn_2] = React.useState(new Animated.Value(40))
    const [btn_3] = React.useState(new Animated.Value(40))
    const [open, setOpen] = React.useState(false)

    const popIn = () => {
        setOpen(true)
        Animated.timing(btn_1, {
            toValue: 130,
            duration: 500,
            useNativeDriver: false,
        }).start()
        Animated.timing(btn_2, {
            toValue: 110,
            duration: 500,
            useNativeDriver: false,
        }).start()
        Animated.timing(btn_3, {
            toValue: 130,
            duration: 500,
            useNativeDriver: false,
        }).start()

        console.log('open', open)
    }

    const popOut = () => {
        setOpen(false)
        Animated.timing(btn_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start()
        Animated.timing(btn_2, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start()
        Animated.timing(btn_3, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

    const toggleMenu = () => {
        //const toValue = open ? 0 : 1
        //Animated.spring(animation, {
        //    toValue,
        //    friction: 5,
        //    useNativeDriver: true,
        //}).start()
        //setOpen(!open)
        console.log('open', open)
    }
    ////const animation = useAnimation

    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    })

    const pinStyle = {
        transform: [
            {
                scale: animation,
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -70],
                }),
            },
        ],
    }
    console.log('open', open)

    return (
        <View style={{}}>
            <Animated.View
                style={[styles.button, styles.secondary, { bottom: btn_1 }]}
            >
                <TouchableWithoutFeedback onPress={onPress}>
                    <AntDesign name="addusergroup" size={24} color="white" />
                </TouchableWithoutFeedback>
            </Animated.View>
            <Animated.View
                style={[
                    styles.button,
                    styles.secondary,
                    { bottom: btn_2, right: btn_2 },
                ]}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        setOpen(false)
                        setTimeout(() => {
                            onGroupPress()
                        }, 1000)
                        //    onGroupPress()
                    }}
                >
                    {/*<AntDesign name="bars" size={24} color="white" />*/}
                    <MaterialCommunityIcons
                        name="crowd"
                        size={24}
                        color="white"
                    />
                </TouchableWithoutFeedback>
            </Animated.View>
            <Animated.View
                style={[styles.button, styles.secondary, { right: btn_3 }]}
            >
                <TouchableWithoutFeedback onPress={onPress}>
                    <AntDesign name="adduser" size={24} color="white" />
                </TouchableWithoutFeedback>
            </Animated.View>

            <TouchableOpacity
                onPress={() => (open === false ? popIn() : popOut())}
            >
                <View style={[styles.button]}>
                    <AntDesign name="plus" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    content: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        right: 40,
        bottom: 40,
        width: 60,
        height: 60,
        borderRadius: 30,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowColor: '#00A3AD',
        backgroundColor: '#00A3AD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu: {
        backgroundColor: '#00A3AD',
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    secondary: {
        backgroundColor: '#00A3AD',
        width: 48,
        height: 48,
        borderRadius: 24,
        marginVertical: 8,
    },
})
