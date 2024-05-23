import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SkillsPage() {
    return (
        <View style={styles.container}>

            <Image
                source={require('./backstage.jpg')}
                style={styles.profileImage}
                resizeMode='cover'
            />

            <Text style={styles.skillsText}>
                Skills
            </Text>

            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.space} />

                <Text style={styles.topicText}>
                    Languages:
                </Text>

                <Text style={styles.text}>
                    Java, JavaScript, SQL, HTML, CSS
                </Text>

                <View style={styles.space} />

                <Text style={styles.topicText}>
                    Frameworks & Environments:
                </Text>

                <Text style={styles.text}>
                    React, Expo, Node.js
                </Text>

                <View style={styles.space} />

                <Text style={styles.topicText}>
                    Tools:
                </Text>

                <Text style={styles.text}>
                    IntelliJ, Visual Studio Code, GitHub, ProjectLibre, MySQL Workbench
                </Text>

                <View style={styles.space} />

                <Text style={styles.topicText}>
                    Operating Systems:
                </Text>

                <Text style={styles.text}>
                    Windows, Ubuntu Linux
                </Text>

                <View style={styles.space} />

                <Text style={styles.topicText}>
                    Educational Focus Areas:
                </Text>

                <Text style={styles.text}>
                    Java Development, Data Structures and Algorithms, Web Applications with HTML, CSS, JavaScript,
                    Relational Databases with MySQL, Project Management in Agile with ProjectLibre, Computer Science Fundamentals
                </Text>

                <View style={styles.space} />

            </ScrollView>

            <View style={styles.space} />

            <Link href="/HomePage" style={styles.backLink}>Back to Home Page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#223',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 60,
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    skillsText: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    topicText: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: "underline",
        color: '#ea9',
        marginBottom: 20,
    },
    link: {
        color: '#ea9',
        fontSize: 18,
        marginBottom: 10,
    },
    backLink: {
        color: '#0ed',
        fontSize: 14,
        marginBottom: 20,
    },
    space: {
        height: 20,
    },
    scrollViewContainer: {
        paddingHorizontal: 20,
    },
});