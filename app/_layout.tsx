import React from 'react';
import HomePage from './HomePage';
import { Stack } from 'expo-router';


export default function RootLayout() {
    return (
        <Stack
            initialRouteName='HomePage'
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#334",
                },
                headerTitleStyle: {
                    fontWeight: "600",
                },
                headerTitleAlign: "center",
            }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Home - NW Miller",

                }}
            />
            <Stack.Screen
                name="HomePage"
                options={{
                    headerTitle: "Home - NW Miller",

                }}
            />
            <Stack.Screen
                name="ProjectsPage"
                options={{
                    headerTitle: "Projects Page",
                }}
            />
            <Stack.Screen
                name="SkillsPage"
                options={{
                    headerTitle: "Skills Page",
                }}
            />
            <Stack.Screen
                name="ContactPage"
                options={{
                    headerTitle: "Contact Page",
                }}
            />
            <Stack.Screen
                name="projects/project1"
                options={{
                    headerTitle: "Project1"
                }}
            />
            <Stack.Screen
                name="projects/project2"
                options={{
                    headerTitle: "Where's That Pokemon?"
                }}
            />
            <Stack.Screen
                name="projects/project3"
                options={{
                    headerTitle: "Recipe Gallery"
                }}
            />
        </Stack>
    );
};
