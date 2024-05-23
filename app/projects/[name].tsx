import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProjectShowcasePage = () => {
    const { name } = useLocalSearchParams();

    return (
        <View>
            <Text>{ name } Project Page</Text>
        </View>
    );
};

export default ProjectShowcasePage;