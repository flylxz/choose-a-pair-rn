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
    bottom: 20,
    right: 20,
    backgroundColor: '#ff0',
    height: 50,
    width: 60,
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
