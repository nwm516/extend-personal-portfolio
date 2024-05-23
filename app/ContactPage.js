import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ContactPage() {
    return (
        <View style={styles.container}>
             <Image
                source={require('./backstage.jpg')}
                style={styles.profileImage}
                resizeMode='cover'
            />

            <Link href="mailto: nwmiller.516@gmail.com" style={styles.link}>E-mail</Link>
            <Link href="https://www.linkedin.com/in/nw-miller/" style={styles.link}>LinkedIn</Link>
            <Link href="https://github.com/nwm516" style={styles.link}>GitHub</Link>

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