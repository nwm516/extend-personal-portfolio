import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const HomePage = () => {

    const [profileImage, setProfileImage] = useState(require('./backstage.jpg'));

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage({ uri: result.assets[0].uri});
                } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={profileImage}
                style={styles.profileImage}
            />
            <Pressable style={styles.button} onPress={pickImageAsync}>
                <Text style={styles.buttonText}>Change Profile Picture</Text>
            </Pressable>
            <Text style={styles.text}>NW Miller's Portfolio</Text>
            <Link href="/ProjectsPage" style={styles.link}>Projects</Link>
            <Link href="/SkillsPage" style={styles.link}>Skills</Link>
            <Pressable onPress={() => router.push("/ContactPage")}>
                <Text style={styles.link}>Contact Me</Text>
            </Pressable>
        </View>
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
        marginBottom: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "white",
    },
    link: {
        color: '#ea9',
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#0ed",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#223',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default HomePage;
