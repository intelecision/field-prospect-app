import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import {
    addDays,
    differenceInCalendarDays,
    format,
    getDate,
    getDay,
    getDaysInMonth,
    isMonday,
    previousMonday,
    set,
} from 'date-fns'
import { Text } from '../../../components/Themed'
import CalendarHeader from '../../components/CalendarHeader'
import { Stack } from 'expo-router'

type Calendar = {
    date: Date
    appointments: Appointment[]
}

type Appointment = {
    time: string
    name: string
    phone: string
    email: string
}
const calendar: Calendar[] = [
    {
        date: new Date(),
        appointments: [
            {
                time: '8:00',
                name: 'John Doe',
                phone: '08012345678',
                email: 'jason@me.com',
            },
        ],
    },
]
const CalendarView = () => {
    const [days, setDays] = React.useState<string[]>([])
    const [dates, setDates] = React.useState<Date[]>([])
    const [dayNames, setDayNames] = React.useState<string[]>([
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
    ])
    const [calendar, setCalendar] = React.useState<Calendar[]>([])
    const { width } = Dimensions.get('window')
    const [index, setIndex] = React.useState(0)
    const [viewPosition, setViewPosition] = React.useState(0)
    useEffect(() => {
        //    getCalendarDays()
        numberOfDaysFromPreviousMonth()
    }, [])

    const getCalendarDays = () => {
        const days = []
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const firstDay = new Date(year, month, 1).getDay()
        const lastDay = new Date(year, month + 1, 0).getDay()
        const lastDate = getDaysInMonth(date)
        const prevMonday = previousMonday(date)
        const nextFirstDay = new Date(year, month, 1)

        for (let i = 0; i < lastDate; i++) {
            //days.push(format(addDays(nextFirstDay, i), 'dd MMM EEE'))
            days.push(getDate(addDays(nextFirstDay, i)).toString())
        }
        setDays(days)

        return days
    }
    const isFirstDayIsMonday = () => {
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const thisMonth = new Date(year, month, 1)
        const result = isMonday(thisMonth)

        return result
    }
    const numberOfDaysFromPreviousMonth = () => {
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        const thisMonth = new Date(year, month, 1)

        const lastMonth = new Date(
            thisMonth.getFullYear(),
            thisMonth.getMonth() - 1,
            1
        )

        const lastMonthLastDay = new Date(
            lastMonth.getFullYear(),
            lastMonth.getMonth() + 1,
            0
        )
        const lastMonthLastMonday = previousMonday(lastMonthLastDay)

        const daysDifference = differenceInCalendarDays(
            thisMonth,
            lastMonthLastMonday
        )
        const days = []
        const dates = []
        const daysInMonth = getDaysInMonth(thisMonth) + daysDifference

        for (let i = 0; i < daysInMonth; i++) {
            days.push(format(addDays(lastMonthLastMonday, i), 'dd MMM EEE'))
            dates.push(addDays(lastMonthLastMonday, i))
            console.log(addDays(lastMonthLastMonday, i))
        }
        setDays(days)
        setDates(dates)
        //    console.log(days)
        return days
    }
    const flatListRef = useRef<FlatList>(null)

    useEffect(() => {
        //flatListRef.current?.scrollToIndex({
        //    index,
        //    animated: true,
        //    viewPosition,
        //})
    }, [index, viewPosition])

    //flatListRef.current?.scrollToIndex({ index: 0, animated: true })
    //flatListRef.current?.

    console.log('index', index)

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'My Calendar',
                    headerTitle: 'My Calendar',
                    headerBackTitle: 'Back',
                    headerShown: true,

                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans_700Bold',
                    },
                    headerTintColor: '#000',
                }}
            />
            <View style={styles.content}>
                <CalendarHeader
                    date={new Date(Date.now())}
                    onChange={function (date: Date): void {
                        console.log('date', date)
                        setIndex(getDay(date))
                    }}
                    onNextWeek={function (): void {}}
                    onPrevWeek={function (): void {}}
                />
                <FlatList
                    style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}
                    data={dates}
                    ref={flatListRef}
                    initialScrollIndex={index}
                    onScroll={(event) => {
                        console.log(
                            'Scroll position',
                            event.nativeEvent.contentOffset.y
                        )
                        setViewPosition(event.nativeEvent.contentOffset.x)
                        //setIndex(
                        //    Math.round(event.nativeEvent.contentOffset.x / width)
                        //)
                    }}
                    renderItem={({ item, index: fIndex }) => (
                        <View style={styles.list}>
                            <Text style={styles.date}>
                                {format(item, 'dd MMM')}
                                <Text style={{ fontWeight: 'normal' }}>
                                    {' '}
                                    {format(item, 'EEEE')}
                                </Text>
                            </Text>
                            <Text> no appointment {fIndex}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    //ListHeaderComponent={() => (
                    //    <View>
                    //        <CalendarHeader
                    //            date={new Date(Date.now())}
                    //            onChange={function (date: Date): void {
                    //                console.log('date', date)
                    //                setIndex(getDay(date))
                    //            }}
                    //            onNextWeek={function (): void {}}
                    //            onPrevWeek={function (): void {}}
                    //        />
                    //    </View>
                    //)}
                />
            </View>
        </View>
    )
}

export default CalendarView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingTop: 10,
    },
    list: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    footer: {
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        //fontSize: 16,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'OpenSans_700Bold',
    },
})
