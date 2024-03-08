import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './genericButton';

export default function App() {
  const buttons = [
    { id: 1, icon: 'arrow-up', mapping: 'A' },
    { id: 2, icon: 'arrow-down', mapping: 'B' },
    { id: 3, icon: 'arrow-left', mapping: 'C' },
    { id: 4, icon: 'arrow-right', mapping: 'D' },
    { id: 5, icon: 'play', mapping: 'E' },
    { id: 6, icon: 'star', mapping: 'F' },
    { id: 7, icon: 'stop', mapping: 'bluetooth' },
    { id: 8, icon: 'refresh', mapping: 'H' },
    { id: 9, icon: 'sliders', mapping: 'settings' },
    { id: 10, icon: 'bluetooth-b', mapping: 'bluetooth' },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.buttonLabel, { color: '#fff' }]}>Sumo Controller</Text>
      <View style={styles.gridContainer}>
        {buttons.map((button) => (
          <Button key={button.id} icon={button.icon} mapping={button.mapping} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
});
