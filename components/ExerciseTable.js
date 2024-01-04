
import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';



export default function ExerciseTable() {

    return (
        <>
            <View>
                <View>
                    <Text style={styles.Exercise}>
                        Exercise
                    </Text>
                </View>
                <View style={styles.ExerciseNoWrapper}>
                    <View style={styles.ExerciseNo}>

                        <View style={styles.ExerciseNoInner}>

                            <View>
                                <Image
                                    style={styles.svgImages2}
                                    source={require('../assets/images/svg5.jpg')}
                                />
                            </View>
                            <View style={styles.ExerciseDiscription}>
                                <View>
                                    <Text style={styles.ExerciseNo2}>
                                        Exercise 1
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.ExerciseNo3}>
                                        Back Pain Exercise
                                    </Text>
                                </View>

                            </View>

                        </View>

                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Reps / Set
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    10/3
                                </Text>
                            </View>

                        </View>
                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Duretion
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    5 Min
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.ExerciseNo}>

                        <View style={styles.ExerciseNoInner}>

                            <View>
                                <Image
                                    style={styles.svgImages2}
                                    source={require('../assets/images/svg5.jpg')}
                                />
                            </View>
                            <View style={styles.ExerciseDiscription}>
                                <View>
                                    <Text style={styles.ExerciseNo2}>
                                        Exercise 2
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.ExerciseNo3}>
                                        Back Pain Exercise
                                    </Text>
                                </View>

                            </View>

                        </View>

                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Reps / Set
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    10/3
                                </Text>
                            </View>

                        </View>
                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Duretion
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    5 Min
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.ExerciseNo}>

                        <View style={styles.ExerciseNoInner}>

                            <View>
                                <Image
                                    style={styles.svgImages2}
                                    source={require('../assets/images/svg6.jpg')}
                                />
                            </View>
                            <View style={styles.ExerciseDiscription}>
                                <View>
                                    <Text style={styles.ExerciseNo2}>
                                        Exercise 3
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.ExerciseNo3}>
                                        Back Pain Exercise
                                    </Text>
                                </View>

                            </View>

                        </View>

                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Reps / Set
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    10/3
                                </Text>
                            </View>

                        </View>
                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Duretion
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    5 Min
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.ExerciseNo}>
                        <View style={styles.ExerciseNoInner}>

                            <View>
                                <Image
                                    style={styles.svgImages2}
                                    source={require('../assets/images/svg7.jpg')}
                                />
                            </View>
                            <View style={styles.ExerciseDiscription}>
                                <View>
                                    <Text style={styles.ExerciseNo2}>
                                        Exercise 4
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.ExerciseNo3}>
                                        Back Pain Exercise
                                    </Text>
                                </View>

                            </View>

                        </View>

                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Reps / Set
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    10/3
                                </Text>
                            </View>

                        </View>
                        <View style={styles.ExerciseDiscription}>
                            <View>
                                <Text style={styles.ExerciseNo2}>
                                    Duretion
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.ExerciseNo3}>
                                    5 Min
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </>
    )
}
const styles = StyleSheet.create({

    Exercise: {
        marginTop: 15,
        color: '#444B62',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    ExerciseNoWrapper: {



    },
    ExerciseNo: {
        marginTop: 8,
        width: '100%',
        height: 55,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: '#FFF',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 2,
        flexDirection: 'row'
    },
    ExerciseNoInner: {

        flexDirection: 'row'

    },
    ExerciseDiscription: {
        width: 100,
        marginLeft: "auto",
        marginRight: 'auto',
    },
    svgImages2: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginTop: 10
    },
    ExerciseNo2: {
        color: '#444B62',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 'auto',
    },
    ExerciseNo3: {
        color: '#8B93A8',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        marginLeft: "auto",
        marginRight: 'auto',
    },
})