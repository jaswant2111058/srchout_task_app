
import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import Table from "../components/table"
import FourCard from "../components/fourCard"
import ExerciseTable from "../components/ExerciseTable"
import ScoreCard from "../components/scoreCard"
import Phone from 'react-native-vector-icons/FontAwesome5';
import Mail from 'react-native-vector-icons/Entypo';



export default function Home() {


    return (
        <>


            <ScrollView>
                <View style={styles.homeWrapper}>

                    <FourCard />
                    <ExerciseTable />

                    <View style={styles.DateWrapper}>

                        <View>

                        </View>
                        <Text style={styles.Date}>
                            Oct 31  Nov 06 2023
                        </Text>
                        <View >

                        </View>

                    </View>
                    <View style={styles.weekWrapper} >
                        <Text style={styles.week}>
                            Week 1 of 3
                        </Text>
                    </View>
                    <Table />
                    <ScoreCard />
                    <View style={styles.DrInfoWrapper}>
                        <View style={styles.svgImagesDRWrapper}>
                            <Image
                                style={styles.svgImagesDR}
                                source={require('../assets/images/DrDP.jpg')}
                            />
                        </View>
                        <View style={styles.DrNameWrapper}>
                            <Text style={styles.DrName}>
                                qwertyuiuhjklp uijkl
                            </Text>
                            <Text style={styles.BrandName}>
                                BrandName
                            </Text>
                        </View>
                        <View style={styles.svgImagesChatWrapper}>
                            <Image
                                style={styles.svgImagesChat}
                                source={require('../assets/images/svg8.jpg')}
                            />
                        </View>
                    </View>
                    <View style={styles.DrContact}>

                        <View style={styles.DrPhone}>
                            <View style={styles.DrPhoneIcon}>
                                <Phone name="phone-alt" size={30} color={'#6F6AF8'} />
                            </View>
                            <View>
                                <Text style={styles.DrPhoneNo}>
                                    +91 6454554155
                                </Text>
                            </View>
                        </View>
                        <View style={styles.DrMail}>
                            <View style={styles.DrMailIcon}>
                                <Mail name="mail" size={30} color={'#6F6AF8'} />
                            </View>
                            <View>
                                <Text style={styles.DrMailID}>
                                    BrandName@sdfgh.com
                                </Text>
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

    homeWrapper: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
    },


    DateWrapper: {
        marginTop: 15,
        width: 184,
        height: 20,
        flexShrink: 0,
    },
    Date: {
        color: '#444B62',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',

    },
    weekWrapper: {
        marginLeft: 'auto',
    },
    week: {
        color: '#444B62',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',

    },

    DrInfoWrapper: {
        marginTop: 15,
        width: '100%',
        height: 101,
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 73 / 2,
        elevation: 2,
        flexDirection: 'row'
    },
    DrInfo: {

    },
    svgImagesChat: {
        width: 40,
        height: 40,
        marginLeft: "auto",
        marginRight: 'auto',
        marginTop: 15
    },
    svgImagesDR: {
        width: 70,
        height: 70,
    },
    svgImagesDRWrapper: {
        marginTop: 15,
        marginLeft: "auto",
        marginRight: 'auto',
    },
    svgImagesChatWrapper: {
        marginTop: 15,
        marginLeft: "auto",
        marginRight: 'auto',
    },
    BrandName: {
        marginTop: 15,
        color: '#999',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    DrName: {
        marginTop: 15,
        color: '#485057',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',

    },
    DrContact: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(227, 226, 255, 0.37)',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 82 / 2, // Adjust this value based on your design
        elevation: 2,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent:'space-between'

    },
    DrPhone: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 5,
    },
    DrPhoneIcon: {


    },
    DrPhoneNo: {
        color: '#6F6AF8',
        marginTop: 10,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,

    },
    DrMail: {

        marginTop: 10,
        flexDirection: 'row',
        gap: 5,
    },
    DrMailIcon: {


    },
    DrMailID: {

        color: '#6F6AF8',
        marginTop: 10,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
    },

});