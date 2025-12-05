import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Converter',
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
        }}
      />
    </Tabs>
  );
}