const theme = {
    colors: {
        white: '#FFFFFF',
        black: '#0B0B0B',
        label: '#999999',
        ternaryText: '#666666',
        inputBackground: 'lightgray',
        placeholder: 'rgb(128,128,128)',
        secondaryText: 'rgb(183, 183, 183)',
        border: 'rgb(204,204,204)',
        danger: 'red',
        secondaryBackground: 'rgba(40, 104, 173, 0.1)',
        success: 'rgb(194, 205, 66)',
        themeBlue: 'rgb(40, 104, 173)',
        themeBlueGrey: '#2868adb0',
        themeGreen: 'rgb(194, 205, 66)',
        tintColorLight: '#31afb3',
        themeRed: 'rgb(211, 48, 124)',
        themeOrange: 'rgb(233, 157, 56)',
        opacityBlack: 'rgba(0, 0, 0, 0.5)',
        themeDarkOrange: 'rgb(162, 87, 32)',
        modalBg: 'rgba(0, 0, 0, 0.6)',
        dropdownIconColor: 'grey',
        datepickerIconColor: 'grey',
        lighterGrey: '#f2f2f2',
        lightGrey: '#bfbfbf',
        defaultGrey: '#bfbfbf',
        darkGrey: '#a6a6a6',
        darkerGrey: '#737373',
        lightBlue: 'rgb(121, 199, 223)',
        greyLight: '#bfbfbf69',
        transparentBlue: 'rgba(237, 245, 254, 1)',
        transparentRed: 'rgba(251, 238, 241, 1)',
        transparentGreen: 'rgba(237, 247, 242, 1)',
        transparentYellow: 'rgba(254, 247, 237, 1)',
        transparentRed2: 'rgba(243, 203, 211, 1)',
    },
    borderColor: {
        blue: 'rgba(199, 223, 251, 1)',
        red: 'rgba(243, 203, 211, 1)',
        green: 'rgba(197, 231, 213, 1)',
        yellow: 'rgba(250, 224, 181, 1)',
    },
    borderRadii: {
        s: 5,
        m: 10,
        l: 20,
        xl: 30,
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        xheader: {
            fontFamily: 'ShopifySans-Bold',
            fontWeight: 'bold',
            fontSize: 48,
            lineHeight: 42.5,
        },
        header: {
            fontFamily: 'ShopifySans-Bold',
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
        },
        subheader: {
            fontFamily: 'ShopifySans-SemiBold',
            fontWeight: '600',
            fontSize: 28,
            lineHeight: 36,
        },
        body: {
            fontFamily: 'ShopifySans',
            fontSize: 16,
            lineHeight: 24,
        },
    },
    fontSize: {
        s: 10,
        ss: 13,
        m: 15,
        sl: 17,
        l: 20,
        xl: 30,
    },
    icon: {
        s: 10,
        m: 15,
        l: 20,
        xl: 30,
        xxl: 40,
    },
    zIndex: {
        dropdown: 9,
        datepicker: 99,
        modal: 999,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
}

export type Theme = typeof theme
export default theme
