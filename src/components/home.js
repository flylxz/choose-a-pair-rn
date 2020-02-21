import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Header} from './header';
import {UserList} from './user-list';
import {Loader} from './loader';
import {FilterForm} from './filterForm';
import {FilterButton} from './filterButton';

import GoRestService from '../services/go-rest-service';

export function Home() {
  goRestService = new GoRestService();

  const currentYear = new Date(Date.now()).getFullYear();

  const getYearFromDob = dob => {
    return +dob.substr(0, 4);
  };

  //-------- states

  const [userList, setUserList] = useState([]); // || [];

  const [filterVisible, setFilterVisible] = useState(false);

  const [ageRange, setAgeRange] = useState([]);

  const [filter, setFilter] = useState({
    name: '',
    gender: '',
    ageMin: 0,
    ageMax: 199,
  });

  //------ didMount

  useEffect(() => {
    updateList();
  }, []);

  const updateList = () => {
    goRestService.getResource().then(userList => {
      calcMinMaxAge(userList.result);
      setUserList(userList.result);
    });
  };

  const calcMinMaxAge = userList => {
    let ageMin = 199;
    let ageMax = 0;

    for (let value of userList) {
      const calcAge = currentYear - getYearFromDob(value.dob);
      if (calcAge < ageMin) {
        ageMin = calcAge;
      }
      if (calcAge > ageMax) {
        ageMax = calcAge;
      }
    }

    setFilter({
      name: filter.name,
      gender: filter.gender,
      ageMin,
      ageMax,
    });

    setAgeRange([ageMin, ageMax]);
  };

  //-------- sorting methods

  const sortByFirstName = (a, b) => {
    if (a.first_name > b.first_name) {
      return 1;
    }
    if (a.first_name < b.first_name) {
      return -1;
    }
    return 0;
  };

  //-------- delete user from list on choose

  const onDelete = id => {
    const tempList = [...userList].filter(user => user.id !== id);
    calcMinMaxAge(tempList);
    // return setUserList(userList.filter(user => user.id !== id));
    return setUserList(tempList);
  };

  //---------- filters

  const onFilterVisible = () => {
    setFilterVisible(() => setFilterVisible(!filterVisible));
  };

  const onSearchUser = (userList, searchName) => {
    if (!searchName || searchName.length < 3) {
      return userList;
    }
    return userList.filter(user => {
      return (
        user.first_name.toLowerCase().indexOf(searchName.toLowerCase()) > -1 ||
        user.last_name.toLowerCase().indexOf(searchName.toLowerCase()) > -1
      );
    });
  };

  const onSearchGender = (userList, gender) => {
    if (gender) {
      return userList.filter(user => user.gender === gender);
    }
    return userList;
  };

  const onSearchAgeMin = (userList, ageMin) => {
    return userList.filter(
      user => currentYear - getYearFromDob(user.dob) >= ageMin,
    );
  };

  const onSearchAgeMax = (userList, ageMax) => {
    return userList.filter(
      user => currentYear - getYearFromDob(user.dob) <= ageMax,
    );
  };

  //-------- server waiting emulation

  const onFilterName = searchName => {
    setTimeout(
      () =>
        setFilter({
          name: searchName,
          gender: filter.gender,
          ageMin: filter.ageMin,
          ageMax: filter.ageMax,
        }),
      400,
    );
  };

  const onFilterGender = filterGender => {
    setTimeout(
      () =>
        setFilter({
          gender: filterGender,
          name: filter.name,
          ageMin: filter.ageMin,
          ageMax: filter.ageMax,
        }),
      400,
    );
  };

  const onFilterAgeMin = ageMin => {
    setTimeout(
      () =>
        setFilter({
          ageMax: filter.ageMax,
          ageMin: ageMin,
          name: filter.name,
          gender: filter.gender,
        }),
      400,
    );
  };

  const onFilterAgeMax = ageMax => {
    setTimeout(
      () =>
        setFilter({
          ageMax: ageMax,
          ageMin: filter.ageMin,
          name: filter.name,
          gender: filter.gender,
        }),
      400,
    );
  };

  const onFilterReset = () => {
    setTimeout(() =>
      setFilter({
        name: '',
        gender: '',
        ageMin: ageRange[0],
        ageMax: ageRange[1],
      }),
    );
  };

  //--------- render() loading...

  if (userList.length === 0) {
    return (
      <View style={styles.container}>
        <Header active={'...'} />
        <Loader />
      </View>
    );
  }

  //--------- render() content

  const activeCount = userList.filter(user => user.status === 'active').length; // || '...';

  userList.sort(sortByFirstName);
  const filteredByGender = onSearchGender(userList, filter.gender);
  const filteredByName = onSearchUser(filteredByGender, filter.name);
  const filteredByAgeMin = onSearchAgeMin(filteredByName, filter.ageMin);
  const filteredByAgeMax = onSearchAgeMax(filteredByAgeMin, filter.ageMax);
  const visibleUsers = filteredByAgeMax;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header active={activeCount} />
        <UserList userList={visibleUsers} onDelete={onDelete} />
        <FilterForm
          visible={filterVisible}
          onFilterName={onFilterName}
          onFilterGender={onFilterGender}
          onFilterAgeMin={onFilterAgeMin}
          onFilterAgeMax={onFilterAgeMax}
          onFilterReset={onFilterReset}
          ageRange={ageRange}
        />
        <FilterButton onFilterVisible={onFilterVisible} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    height: '100%',
  },
});
