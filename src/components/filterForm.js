import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export function FilterForm(props) {
  const {
    visible,
    onFilterName,
    onFilterGender,
    onFilterAgeMin,
    onFilterAgeMax,
    onFilterReset,
    ageRange,
  } = props;

  const isShow = visible ? styles.filterForm : styles.hide;

  const [selectedChip, setSelectedChip] = useState('both');

  const handleReset = () => {
    onFilterReset();
    setSelectedChip('both');
  };

  return (
    <View style={isShow}>
      <View style={styles.searchName}>
        <Text>Search User</Text>
        <TextInput
          placeholder="Search user ..."
          placeholderTextColor="#71b300"
          style={styles.nameInput}
          defaultValue=""
          onChangeText={onFilterName}
        />
      </View>
      <View style={styles.searchAge}>
        <View style={styles.ageColumn}>
          <Text style={styles.ageTitle}>Age from</Text>
          <TextInput
            placeholder={ageRange[0].toString()}
            placeholderTextColor="#71b300"
            style={styles.ageInput}
            keyboardType="numeric"
            onChangeText={onFilterAgeMin}
          />
        </View>
        <View style={styles.ageColumn}>
          <Text style={styles.ageTitle}>Age to</Text>
          <TextInput
            placeholder={ageRange[1].toString()}
            placeholderTextColor="#71b300"
            style={styles.ageInput}
            keyboardType="numeric"
            onChangeText={onFilterAgeMax}
          />
        </View>
      </View>
      <Text style={styles.ageTitle}>Gender</Text>
      <View style={styles.searchGender}>
        <TouchableOpacity
          style={selectedChip === 'both' ? styles.active : styles.chip}
          onPress={() => {
            onFilterGender('');
            setSelectedChip('both');
          }}>
          <Text style={styles.chipTitle}>Both</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedChip === 'male' ? styles.active : styles.chip}
          onPress={() => {
            onFilterGender('male');
            setSelectedChip('male');
          }}>
          <Text style={styles.chipTitle}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectedChip === 'female' ? styles.active : styles.chip}
          onPress={() => {
            onFilterGender('female');
            setSelectedChip('female');
          }}>
          <Text style={styles.chipTitle}>Female</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  hide: {
    position: 'absolute',
    bottom: -200,
  },
  filterForm: {
    position: 'absolute',
    top: 80,
    height: 250,
    width: '80%',
    marginHorizontal: 50,
    backgroundColor: '#595959cc',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  searchName: {
    width: '100%',
    alignItems: 'center',
  },
  nameInput: {
    backgroundColor: '#595959',
    height: 40,
    width: 250,
    borderRadius: 20,
    textAlign: 'center',
    color: '#91e600',
  },
  searchAge: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ageColumn: {},
  ageTitle: {
    textAlign: 'center',
  },
  ageInput: {
    height: 40,
    width: 60,
    backgroundColor: '#595959',
    borderRadius: 20,
    textAlign: 'center',
    color: '#91e600',
  },
  searchGender: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  chip: {
    backgroundColor: '#595959',
    height: 40,
    width: '20%',
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#737373',
    height: 40,
    width: '20%',
    elevation: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#a2ff0088',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipTitle: {
    color: '#a2ff00',
  },
  button: {
    backgroundColor: '#ff1a1a',
    height: 40,
    width: '50%',
    elevation: 5,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
