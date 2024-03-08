import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { executeCommand } from './serialController.js';
export default function Button({ icon, mapping }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => executeCommand(mapping)}>
                <FontAwesome
                    name={icon}
                    size={50}
                    color="#25292e"
                    style={styles.buttonIcon}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '25%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        padding: 3,
        transform: [{ rotate: '90deg' }]
    },
    button: {
        borderRadius: 25,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4dabf7',
        flexDirection: 'row',
    },
    buttonIcon: {
        padding: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});