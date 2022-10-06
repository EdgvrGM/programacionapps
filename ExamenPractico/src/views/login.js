import * as React from "react";
import * as RN from "react-native";
import { app } from "../cfg/firebase_config";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

  const navigation = useNavigation();
  

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();


  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User has logged in");
        const user = res.user;
        console.log(user);
        RN.Alert.alert("Iniciaste sesion correctamente");
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        RN.Alert.alert("Ha ocurrido un error", err.message);
      });
  };

  return (
    
    <RN.View style={styles.container}>
      <RN.View style={styles.Middle}>
        <RN.Text style={styles.LoginText}>Inicio de sesion</RN.Text>
      </RN.View>
      <RN.View style={styles.text2}>
        <RN.Text>¿No estás registrado?</RN.Text>
        <RN.TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <RN.Text style={styles.signupText}> ¡Registrate! </RN.Text>
        </RN.TouchableOpacity>
      </RN.View>

      {/* Email Input Field */}
      <RN.View style={styles.buttonStyle}>
        <RN.View style={styles.emailInput}>
          <RN.TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Correo electronico"
            style={styles.inputContainer}
          />
        </RN.View>
      </RN.View>
      {/* Password Input Field */}
      <RN.View style={styles.buttonStyleX}>
        <RN.View style={styles.emailInput}>
          <RN.TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Contraseña"
            style={styles.inputContainer}
            secureTextEntry={true}
          />
        </RN.View>
      </RN.View>
      {/* Button */}
      <RN.View style={styles.buttonStyle}>
          <RN.Button style={styles.buttonDesign} onPress={handleLogin} title="Ingresar" />
        </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
    alignItems: "center",
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  
});
