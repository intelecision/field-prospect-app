import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import {
    addDays,
    format,
    startOfWeek,
    getDate,
    isSameDay,
    compareAsc,
    isToday,
    getWeek,
} from 'date-fns'
import SlotDay from './SlotDay'
import { colors } from '../../constants/Colors'

type Props = {
    date: Date
    onChange: (date: Date) => void
    onNextWeek: () => void
    onPrevWeek: () => void
}
type FormattedDate = {
    formatted: string
    date: Date
    day: number
}
const CalendarHeader = ({ date, onChange, onNextWeek, onPrevWeek }: Props) => {
    const [weekDays, setWeekDays] = useState<FormattedDate[]>([])
    const [selectedDate, setSelectedDate] = useState<string | undefined>(
        undefined
    )
    const [disabledTouch, setDisabledTouch] = useState(false)

    const getWeekDays = (date: Date) => {
        const start = startOfWeek(date, { weekStartsOn: 1 })
        let final = []

        for (let index = 0; index < 32; index++) {
            const date = addDays(start, index)
            final.push({
                formatted: format(date, 'EEE').toUpperCase(),
                date,
                day: getDate(date),
            })
        }
        return final
    }
    useEffect(() => {
        setWeekDays(getWeekDays(date))
        setSelectedDate(format(new Date(date), 'dd-MMM-yyyy'))

        return () => {}
    }, [date])

    const start = startOfWeek(date, { weekStartsOn: 1 })
    const disableBack =
        getWeek(new Date(), { weekStartsOn: 1 }) -
            getWeek(start, { weekStartsOn: 1 }) ===
        0
    const disableForward =
        getWeek(start, { weekStartsOn: 1 }) -
            getWeek(new Date(), { weekStartsOn: 1 }) ===
        3

    type ScrollParams = {
        index: number
        animated?: boolean
        viewOffset?: number
        viewPosition?: number
    }

    //const scrollToIndex = (param: ScrollParams) => {
    //    console.log(param)
    //}
    //const scrollToItem(params: {
    //    animated?: ?boolean,
    //    item: Item,
    //    viewPosition?: number,
    //}) =>
    //{
    //}
    return (
        <View
            style={{
                backgroundColor: 'white',
                height: 110,
            }}
        >
            <ScrollView
                horizontal
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        //paddingStart: 10,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}
                    >
                        {weekDays.map((weekDay, i) => {
                            const textStyles = []
                            const badgeStyle = []
                            let disableTouch = false
                            const inDate = compareAsc(new Date(), weekDay.date)

                            if (inDate != -1 || isToday(weekDay.date)) {
                                disableTouch = true
                            }
                            const sameDate = isSameDay(weekDay.date, date)
                            if (sameDate) {
                                badgeStyle.push(styles.badge)
                                textStyles.push(styles.numTextStyle)
                            } else {
                                textStyles.push(styles.normal, {
                                    color: isToday(weekDay.date)
                                        ? colors.primary
                                        : disableTouch
                                        ? 'gray'
                                        : 'black',
                                })
                            }

                            return (
                                <TouchableOpacity
                                    key={i}
                                    disabled={disableTouch}
                                    //style={touchable}
                                    onPress={() => {
                                        onChange(weekDay.date)
                                    }}
                                >
                                    <SlotDay
                                        key={i}
                                        disabled={disableTouch}
                                        dayName={weekDay.formatted}
                                        dayNum={weekDay.day}
                                        textStyles={textStyles}
                                        badgeStyle={badgeStyle}
                                        isToday={isToday(weekDay.date)}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CalendarHeader

const styles = StyleSheet.create({
    badge: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 20,
        height: 30,
        width: 30,
    },
    numTextStyle: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white',
    },
    normal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
    },
    today: {
        color: colors.primary,
    },
    disableStyle: {
        color: 'gray',
    },
})
