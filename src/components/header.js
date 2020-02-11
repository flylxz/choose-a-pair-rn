import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function Header({active}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Choose-a-pair</Text>
      <View style={styles.headerCount}>
        <Text style={styles.headerCountText}>{active} users</Text>
        <Text style={styles.headerCountText}>in active search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 50,
    backgroundColor: '#595959',
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a2ff00',
    letterSpacing: 1,
  },
  headerCount: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  headerCountText: {
    fontSize: 14,
    color: '#a2ff00',
    fontStyle: 'italic',
  },
});
