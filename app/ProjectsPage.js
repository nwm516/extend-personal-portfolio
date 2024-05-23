import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const ProjectsPage = () => {
    return (
        <View style={styles.container}>

            <Image
                source={require('./backstage.jpg')}
                style={styles.profileImage}
                resizeMode='cover'
            />
            <Link href={{ pathname: "projects/[name]", params: { name: 'project1' } }} style={styles.link}>Project 1: "Project1"</Link>
            <Link href={{ pathname: "projects/[name]", params: { name: 'project2' } }} style={styles.link}>Project 2: "Where's That Pokemon?"</Link>
            <Link href={{ pathname: "projects/[name]", params: { name: 'project3' } }} style={styles.link}>Project 3: "Recipe Gallery"</Link>

            <View style={styles.space} />

            <Link href="/HomePage" style={styles.backLink}>Back to Home Page</Link>
        </View >
    );
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
    },
    space: {
        height: 20,
    },
});

export default ProjectsPage;