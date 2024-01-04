
import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';



export default function FourCard() {

    return (
        <>
            <View>
                <View>
                    <Text style={styles.backNeck}>
                        Back & neck pain exercise package
                    </Text>
                </View>
                <View style={styles.FourBoxWrapper} >

                    <View style={styles.FourBox}>
                        <View>
                            <Image
                                style={styles.svgImages}
                                source={require('../assets/images/svg1.jpg')}
                            />
                        </View>
                        <View >
                            <Text style={styles.ExerNo}>
                                5
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ExerciseInfo}>
                                Total Exercise
                            </Text>
                        </View>

                    </View>
                    <View style={styles.FourBox}>
                        <View>
                            <Image
                                style={styles.svgImages}
                                source={require('../assets/images/svg2.jpg')}
                            />
                        </View>
                        <View >
                            <Text style={styles.ExerNo}>
                                65/21
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ExerciseInfo}>
                                Session Days
                            </Text>
                        </View>
                    </View>
                    <View style={styles.FourBox}>
                        <View>
                            <Image
                                style={styles.svgImages}
                                source={require('../assets/images/svg3.jpg')}
                            />
                        </View>
                        <View >
                            <Text style={styles.ExerNo}>
                                50/12
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ExerciseInfo}>
                                Reps/Sets
                            </Text>
                        </View>
                    </View>

                    <View style={styles.FourBox}>
                        <View>
                            <Image
                                style={styles.svgImages}
                                source={require('../assets/images/svg4.jpg')}
                            />
                        </View>
                        <View >
                            <Text style={styles.ExerNo}>
                                5 Hrs
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ExerciseInfo}>
                                Duration
                            </Text>
                        </View>
                    </View>

                </View>
            </View>

        </>
    )
}
const styles = StyleSheet.create({

    backNeck: {
        color: '#485057',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '800',
    },
    FourBoxWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    FourBox: {
        width: 160,
        height: 106,
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 25,
        elevation: 2,
    },
    svgImages: {
        width: 40,
        height: 40,
        marginLeft: "auto",
        marginRight: 'auto',
        marginTop: 15
    },
    ExerNo: {
        color: '#4B4E51',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        marginLeft: "auto",
        marginRight: 'auto',
        marginTop: 2
    },
    ExerciseInfo: {
        color: '#4B4E51',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '200',
        marginLeft: "auto",
        marginRight: 'auto',
    },
})