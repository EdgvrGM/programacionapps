import * as React from "react";
import * as RN from "react-native";
import { app, database } from "../cfg/firebase_config";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const auth = getAuth(app);

  const handleSignUp = async () => {
    if (username === "") {
      return RN.Alert.alert("Llenar todos los campos es obligatorio");
    } else if (email === "") {
      return RN.Alert.alert("Llenar todos los campos es obligatorio");
    } else if (password !== confirmPassword) {
      return RN.Alert.alert("Las contraseñas no coinciden");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        const user = usr.user;
        console.log("New user", user);
        RN.Alert.alert("Usuario registrado exitosamente");
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
        RN.Alert.alert("Ha ocurrido un error", err.message);
      });

    await addDoc(collection(database, "users"), {
      username: username,
      email: email,
      password: password,
    });
  };

  return (
    <RN.View style={styles.container}>
      <RN.View style={styles.Middle}>
        <RN.Text style={styles.LoginText}>Registro</RN.Text>
      </RN.View>
      <RN.View style={styles.text2}>
        <RN.Text>¿Ya tienes cuenta? </RN.Text>
        <RN.TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <RN.Text style={styles.signupText}> Inicia sesión </RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
      {/* Username Input Field */}
      <RN.View style={styles.buttonStyle}>
        <RN.View style={styles.emailInput}>
          <RN.TextInput
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Nombre de usuario"
            style={styles.inputContainer}
          />
        </RN.View>
      </RN.View>
      {/* Email Input Field */}
      <RN.View style={styles.buttonStyle}>
        <RN.View style={styles.emailInput}>
          <RN.TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
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
            value={password}
            placeholder="Contraseña"
            style={styles.inputContainer}
            secureTextEntry={true}
          />
        </RN.View>
      </RN.View>
      {/* Password Input Field */}
      <RN.View style={styles.buttonStyleX}>
        <RN.View style={styles.emailInput}>
          <RN.TextInput
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            placeholder="Confirma tu contraseña"
            style={styles.inputContainer}
            secureTextEntry={true}
          />
        </RN.View>
      </RN.View>
      {/* Button */}
      <RN.View style={styles.buttonStyle}>
        <RN.Button
          style={styles.buttonDesign}
          onPress={handleSignUp}
          title="¡Registrar ahora!"
        />
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
    marginTop: 15,
    marginRight: 5,
    alignItems: "center",
  },
  buttonStyle: {
    marginTop: 12,
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
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
