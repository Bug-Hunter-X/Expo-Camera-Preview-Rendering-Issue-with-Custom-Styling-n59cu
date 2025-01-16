// bugSolution.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera } from 'expo-camera';

const App = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    aspectRatio: 1
  },
});
export default App;