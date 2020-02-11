import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {UserListItem} from './user-list-item';
import {ChooseModal, ConfirmModal} from './modal';

export function UserList({userList, onDelete}) {
  const [chooseModal, setChooseModal] = useState([false, null]);

  const [confirmModal, setConfirmModal] = useState(false);

  const handleClick = id => {
    setChooseModal([true, id]);
  };

  return (
    <View style={styles.userList}>
      <ChooseModal
        chooseModal={chooseModal}
        setChooseModal={setChooseModal}
        setConfirmModal={setConfirmModal}
        onDelete={onDelete}
      />
      <ConfirmModal
        setChooseModal={setChooseModal}
        confirmModal={confirmModal}
        setConfirmModal={setConfirmModal}
      />

      <FlatList
        data={userList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              handleClick(item.id);
            }}>
            <UserListItem user={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userList: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  listHeader: {
    backgroundColor: '#111',
    width: '120%',
  },
});
