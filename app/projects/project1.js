import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Project1 = () => {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollViewHorizontal} horizontal>
                <Image
                    style={styles.profileImage}
                    source={require('./project1/Project1 Hozier.png')}
                    resizeMode='contain'
                />

                <Image
                    style={styles.profileImage}
                    source={require('./project1/Project1 Weeknd.png')}
                    resizeMode='contain'
                />

            </ScrollView>

            <ScrollView style={styles.scrollViewContainer}>
                <Text style={styles.text}>Project1 (yes, that's its actual name!) is an application created in Java 
                that reads data from .csv files provided by Kaggle about song streaming data. 
                Creation of the GUI and information storage were handled by me with requirements from our instructor,
                with additional metrics from other streaming sources thrown in by me for a little more pizzazz.</Text>

                <View style={styles.space} />

                <Text style={styles.text}>Scroll left and right on the images above to see a few examples of Project1 
                in action.</Text>

                <View style={styles.space} />

            </ScrollView>

            <Link href="/HomePage" style={styles.backLink}>Back to Home Page</Link>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#223',
    },
    profileImage: {
        width: 275,
        height: 275,
        marginHorizontal: 50,
        marginVertical: 25,
        
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    backLink: {
        justifyContent: "center",
        color: '#0ed',
        fontSize: 14,
        marginBottom: 20,
    },
    space: {
        height: 20,
    },
    scrollViewContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    scrollViewHorizontal: {
        backgroundColor: "#333",
        marginBottom: 10,
        paddingVertical: 10,
    }
});

export default Project1;
