import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';

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
        <View style={styles.buttonBlock}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOk]}
            title="yes"
            color="lightgreen"
            onPress={() => {
              setConfirmModal(true);
              onDelete(chooseModal[1]);
            }}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={() => {
              setChooseModal([false, null]);
            }}>
            <Text>No</Text>
          </TouchableOpacity>
        </View>
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
          <View style={styles.buttonBlock}>
            <TouchableOpacity
              style={[styles.button, styles.buttonOk]}
              onPress={() => {
                setChooseModal([false, null]);
                setConfirmModal(false);
              }}>
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
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
  buttonBlock: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    height: 40,
    width: '40%',
    elevation: 5,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOk: {
    backgroundColor: '#1aff1a',
  },
  buttonNo: {
    backgroundColor: '#ff1a1a',
  },
});
