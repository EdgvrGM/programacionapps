import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, Button, SafeAreaView, Alert } from "react-native";

const Separator = () => (
  <View style={page.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={page.container}>
    <View>
      <Image
          style={page.tinyLogo}
          source={{
            uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/UDC-Logo-650x366.png',
          }}
        />
      <Text style={flattenStyle}>Actividad 2</Text>
      <Text>Estilo:</Text>
      <Text style={page.code}>
        {JSON.stringify(flattenStyle, null, 2)}
      </Text>
    </View>

    <Separator />

    <View style={page.fixToText}>
    <Button
        title="Izquierda"
        onPress={() => Alert.alert('Izq')}
      />
      <Button
        title="Derecha"
        onPress={() => Alert.alert('Der')}
      />
    </View>

    <View style={page.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={modalCSS.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalCSS.centeredView}>
          <View style={modalCSS.modalView}>
            <Text style={modalCSS.modalText}>Mostrando la modal!</Text>
            <Pressable
              style={[modalCSS.button, modalCSS.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalCSS.textStyle}>Cerrar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalCSS.button, modalCSS.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalCSS.textStyle}>Mostrar Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const modalCSS = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "#FF0000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#E7C0FA"
  },
  tinyLogo: {
    width: 170,
    height: 120,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const typography = StyleSheet.create({
  header: {
    color: "#D628C0",
    fontSize: 35,
    marginBottom: 36
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);


export default App;