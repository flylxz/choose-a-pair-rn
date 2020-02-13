import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function UserListItem({user}) {
  const {id, first_name, last_name, dob, gender, status} = user;

  const currentYear = new Date(Date.now()).getFullYear();

  const getYearFromDob = dob => {
    return +dob.substr(0, 4);
  };
  const age = currentYear - getYearFromDob(dob);

  const statusCheck = status => {
    return status === 'active'
      ? styles.listItemTextActive
      : styles.listItemTextInactive;
  };

  return (
    <View>
      <View style={styles.listItem}>
        <Text style={statusCheck(status)}>
          #{id} - {first_name} {last_name} - {''}
          {age} year old - {gender}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 3},

    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  listItemTextActive: {
    fontSize: 18,
    color: '#000',
  },
  listItemTextInactive: {
    fontSize: 18,
    color: '#777',
  },
  separationText: {
    color: '#555',
  },
});
