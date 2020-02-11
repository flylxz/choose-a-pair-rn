// import React from 'react';
// import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

// export default function CutomButton() {
//   return (
//     // <View>
//     //   <TouchableOpacity style={styles.button} onPress={null}>
//     //     <Text style={styles.buttonText}>Button</Text>
//     //   </TouchableOpacity>
//     // </View>

//     <TouchableOpacity>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>Button</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     top: 100,
//     left: 10,
//     borderRadius: 8,
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     // backgroundColor: {color},
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const CutomButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.custom}>
        <Text style={styles.text}>Button</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CutomButton;

const styles = StyleSheet.create({
  custom: {
    position: 'absolute',
    top: 100,
    left: 10,
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    padding: 15,
    borderColor: 'black',
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
