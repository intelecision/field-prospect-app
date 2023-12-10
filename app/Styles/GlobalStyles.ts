import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    editGroup: {
        //marginHorizontal: 20,
        marginVertical: 5,
    },
    editGroupText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,

        marginHorizontal: 20,
    },
    input: {
        height: 40,
        marginHorizontal: 20,
        marginVertical: 4,
        padding: 10,
        borderColor: '#d3d3d3',

        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
    },
    subtotal: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#d3d3d3',
    },
    subtotalText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'OpenSans_Medium',
    },
    header_group: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        //justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    header_group_text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#00A3AD',
    },
    heading_1: {
        fontFamily: 'OpenSans',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading_2: {
        fontFamily: 'OpenSans',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    group: {
        //marginTop: 10,
    },
    section: {
        fontFamily: 'OpenSans',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify',
    },
    input_error: {
        marginHorizontal: 20,
        marginVertical: 4,
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        fontSize: 16,
    },
    error: {
        color: 'crimson',
        fontSize: 14,
        marginHorizontal: 20,
        marginVertical: 4,
    },
    indentations: {
        marginHorizontal: 20,
    },
    checkBox: {
        borderColor: '#00A3AD',
        borderWidth: 1,
    },
})

//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        backgroundColor: '#fff',
//    },
//    contentContainer: {
//        flex: 1,
//        paddingTop: 20,
//    },
//    welcomeContainer: {
//        alignItems: 'center',
//        marginTop: 10,
//        marginBottom: 20,
//    },
//    editGroup: {
//        //marginHorizontal: 20,
//        marginVertical: 10,
//    },
//    editGroupText: {
//        fontSize: 20,
//        fontWeight: 'bold',
//    },
//    label: {
//        fontSize: 16,
//        //fontWeight: 'bold',
//        marginHorizontal: 20,
//        //marginVertical: 10,
//    },
//    input: {
//        marginHorizontal: 20,
//        marginVertical: 4,
//        padding: 10,
//        borderColor: '#d3d3d3',
//        //backgroundColor: '#eee',
//        borderWidth: 1,
//        borderRadius: 5,
//        fontSize: 20,
//    },
//    subtotal: {
//        flexDirection: 'row',
//        height: 50,
//        justifyContent: 'space-between',
//        alignItems: 'center',
//        paddingHorizontal: 20,
//        borderTopWidth: 1,
//        borderTopColor: '#d3d3d3',
//    },
//    subtotalText: {
//        fontSize: 18,
//        fontWeight: 'bold',
//    },
//})
