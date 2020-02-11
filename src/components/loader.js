import React from 'react';
import {ProgressBarAndroid, StyleSheet, View} from 'react-native';

export function Loader() {
  return (
    <View style={styles.container}>
      <ProgressBarAndroid styleAttr="Horizontal" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 50,
  },
});
