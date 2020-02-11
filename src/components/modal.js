import React from 'react';
import {StyleSheet, View, Text, Modal, Button} from 'react-native';

export function ChooseModal({
  chooseModal,
  setChooseModal,
  setConfirmModal,
  onDelete,
}) {
  return (
    <View>
      <Modal visible={chooseModal[0]} animationType="fade" style={styles.modal}>
        <Text style={styles.modalText}>
          Are you sure you want to invite user with id = {chooseModal[1]}?
        </Text>
        <Button
          style={styles.modalButton}
          title="yes"
          color="lightgreen"
          onPress={() => {
            setConfirmModal(true);
            onDelete(chooseModal[1]);
          }}
        />
        <View style={styles.dummy}></View>
        <Button
          style={styles.modalButton}
          title="no"
          color="coral"
          onPress={() => {
            setChooseModal([false, null]);
          }}
        />
        <View style={styles.dummy}></View>
      </Modal>
    </View>
  );
}

export function ConfirmModal({setChooseModal, confirmModal, setConfirmModal}) {
  return (
    <View>
      <Modal visible={confirmModal} animationType="fade">
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Invitation sent</Text>
          <Button
            style={styles.modalButton}
            title="ok"
            color="lightgreen"
            onPress={() => {
              setChooseModal([false, null]);
              setConfirmModal(false);
            }}
          />
          <View style={styles.dummy}></View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalText: {
    flex: 1,
    fontSize: 24,
    backgroundColor: '#374149',
    color: '#c1c1c1',
    padding: 70,
  },
  modalButton: {},
  dummy: {
    height: 30,
    backgroundColor: '#374149',
  },
});
