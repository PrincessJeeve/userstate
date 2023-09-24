import React, { useState } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';

const Option1 = ({ goBack }) => {
  const [currentImage, setCurrentImage] = useState(
    'https://img.icons8.com/?size=160&id=110429&format=png'
  );
  const [imageSwitched, setImageSwitched] = useState(false);

  const handleImageSwitch = () => {
    const newImage = imageSwitched
      ? 'https://img.icons8.com/?size=160&id=110429&format=png'
      : 'https://img.icons8.com/?size=160&id=65436&format=png';
    setCurrentImage(newImage);
    setImageSwitched(!imageSwitched);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="FLASHLIGHT" disabled />
        <View style={styles.buttonSpace} /> {/* Add space between buttons */}
        <Button title="COUNTER" disabled />
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: currentImage }} style={styles.image} />
      </View>

      <View style={styles.buttonRow}>
        <Button title="ON" onPress={handleImageSwitch} />
      </View>
      <Button title="BACK" onPress={goBack} />
    </View>
  );
};

const Option2 = ({ goBack }) => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };

  const handleSubtract = () => {
    setValue(value - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="FLASHLIGHT" disabled />
        <View style={styles.buttonSpace} /> {/* Add space between buttons */}
        <Button title="COUNTER" disabled />
      </View>

      <Text style={styles.text}>Value: {value}</Text>

      <View style={styles.buttonRow}>
        <Button title="+ 1" onPress={handleAdd} />
        <View style={styles.buttonSpace} />
        <Button title="- 1" onPress={handleSubtract} />
      </View>

      <Button title="BACK" onPress={goBack} />
    </View>
  );
};

const App = () => {
  const [option1Selected, setOption1Selected] = useState(false);
  const [option2Selected, setOption2Selected] = useState(false);

  const goBack = () => {
    setOption1Selected(false);
    setOption2Selected(false);
  };

  return (
    <View style={styles.container}>
      {!option1Selected && !option2Selected && (
        <View style={styles.buttonsContainer}>
          <View style={styles.button} > 
          <Button
            title="FLASHLIGHT"
            onPress={() => setOption1Selected(true)} />
          </View>
          <View style={styles.button} > 
          <Button
            title="COUNTER"
            onPress={() => setOption2Selected(true)}
            style={styles.buttonSpace} // Add this style
          />
        </View>
        </View>
      )}
  
      {option1Selected && <Option1 goBack={goBack} />}
      {option2Selected && <Option2 goBack={goBack} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonSpace: {
    width: 20,
  },
  button: {
    marginLeft: 20,
  },
});

export default App;
