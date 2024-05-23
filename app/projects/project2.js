import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Project2 = () => {
    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollViewHorizontal} horizontal>
                <Image
                    style={styles.profileImage}
                    source={require('./project2/FarfetchdResults.png')}
                    resizeMode="contain"
                />

                <Image
                    style={styles.profileImage}
                    source={require('./project2/Mewtwo Results.png')}
                    resizeMode='contain'
                />

                <Image
                    style={styles.profileImage}
                    source={require('./project2/Heracross Results.png')}
                    resizeMode='contain'
                />

            </ScrollView>

            <ScrollView style={styles.scrollViewContainer}>
                <Text style={styles.text}>Integrating a third-party API revolving around the Pokemon universe,
                    this application found the location of your Pokemon in question!</Text>

                <View style={styles.space} />

                <Text style={styles.text}>Scroll left and right on the images above to see varying search results
                    from the application in action.</Text>

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
        width: 350,
        height: 350,
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

export default Project2;
