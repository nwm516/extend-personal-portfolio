import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Project3 = () => {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollViewHorizontal} horizontal>
                <Image
                    style={styles.profileImage}
                    source={require('./project3/Recipe Gallery output.jpg')}
                    resizeMode="contain"
                />

            </ScrollView>

            <ScrollView style={styles.scrollViewContainer}>
                
                <Text style={styles.text}>A simple project integrating JavaScript and CSS, the Recipe Gallery represents
                an appealing way of presenting recipes as cards. This style is not unlike a lot of cooking and recipe websites
                found all over the web.</Text>

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
        width: 1000,
        height: 400,
        borderRadius: 4,
        marginHorizontal: 30,
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
    }
});

export default Project3;
