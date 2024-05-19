/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BootSplash from 'react-native-bootsplash';

import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from '@/navigation/RootNavigator';
import { COLORS } from '@/theme/colors';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.info('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export default App;
