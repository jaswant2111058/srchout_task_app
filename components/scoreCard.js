
import { StyleSheet, Text, View, Image, ScrollView, Pressable, TouchableHighlight } from 'react-native';

import Svg, { Circle, Path } from 'react-native-svg';


export default function ScoreCard() {

    const radius = 40;
    const strokeWidth = 10;
    const progress = 1.5;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = (circumference - progress) * circumference;

    return (
        <>
            <View>
            <ScrollView horizontal={true}>
                        <View style={styles.scoreCardWrapper}>
                            <View style={styles.scoreCard}>
                                <Svg height="200" width="100">
                                    <Circle
                                        cx="55"
                                        cy="100"
                                        r={radius}
                                        stroke="#EBEBEB"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                    />
                                    <Path
                                        d={`M 55 100 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${2 * radius} a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
                                        stroke="#FFA756"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                        strokeLinecap="round"
                                        strokeDasharray={strokeDasharray}
                                        strokeDashoffset={strokeDashoffset}
                                    />
                                </Svg>
                                <View style={styles.scoreTextWrapper}>
                                    <Text style={styles.scoreText}>
                                        Quality score
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.scoreCard}>
                                <Svg height="200" width="100">
                                    <Circle
                                        cx="55"
                                        cy="100"
                                        r={radius}
                                        stroke="#EBEBEB"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                    />
                                    <Path
                                        d={`M 55 100 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${2 * radius} a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
                                        stroke="#1B9Af7"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                        strokeLinecap="round"
                                        strokeDasharray={strokeDasharray}
                                        strokeDashoffset={strokeDashoffset}
                                    />
                                </Svg>
                                <View style={styles.scoreTextWrapper}>
                                    <Text style={styles.scoreText}>
                                        Quality score
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.scoreCard}>
                                <Svg height="200" width="100">
                                    <Circle
                                        cx="55"
                                        cy="100"
                                        r={radius}
                                        stroke="#EBEBEB"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                    />
                                    <Path
                                        d={`M 55 100 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${2 * radius} a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
                                        stroke="#FF87CF"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                        strokeLinecap="round"
                                        strokeDasharray={strokeDasharray}
                                        strokeDashoffset={strokeDashoffset}
                                    />
                                </Svg>
                                <View style={styles.scoreTextWrapper}>
                                    <Text style={styles.scoreText}>
                                        Quality score
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.scoreCard}>
                                <Svg height="200" width="100">
                                    <Circle
                                        cx="55"
                                        cy="100"
                                        r={radius}
                                        stroke="#EBEBEB"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                    />
                                    <Path
                                        d={`M 55 100 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${2 * radius} a ${radius} ${radius} 0 1 1 0 -${2 * radius}`}
                                        stroke="#FFA756"
                                        strokeWidth={strokeWidth}
                                        fill="transparent"
                                        strokeLinecap="round"
                                        strokeDasharray={strokeDasharray}
                                        strokeDashoffset={strokeDashoffset}
                                    />
                                </Svg>
                                <View style={styles.scoreTextWrapper}>
                                    <Text style={styles.scoreText}>
                                        Quality score
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            </View>

        </>
    )
}
const styles = StyleSheet.create({

    scoreCardWrapper: {
        marginTop: 15,
        flexDirection: 'row',
        gap: 10,
    },
    scoreCard: {
        width: 200,
        height: 120,
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 73, // Adjust this value based on your design
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scoreTextWrapper: {
        width: 60,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    scoreText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 16,

    },
})