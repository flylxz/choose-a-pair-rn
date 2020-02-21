import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

export function FilterButton({onFilterVisible}) {
  return (
    <TouchableOpacity style={styles.floatButton} onPress={onFilterVisible}>
      <View>
        <Text>Filter</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ff08',
    height: 50,
    width: 70,
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
