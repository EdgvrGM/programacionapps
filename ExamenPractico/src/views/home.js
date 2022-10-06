import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../cfg/firebase_config";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Product from "../components/product";

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = React.useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RN.Button
          title="Agregar"
          onPress={() => navigation.navigate("Add")}
        ></RN.Button>
      ),
    });
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <RN.Button
          title="Salir"
          onPress={() => navigation.navigate("Login")}
        ></RN.Button>
      ),
    });
  });


  React.useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef, orderBy("createAt", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createAt: doc.data().createAt,
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <RN.SafeAreaView style={styles.container}>
      <RN.ScrollView style={styles.scrollView}>
      <RN.Text style={styles.title}>Productos</RN.Text>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      </RN.ScrollView>
    </RN.SafeAreaView>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 16,
  },
  scrollView: {
    backgroundColor: '#F5F3F9',
    marginHorizontal: 10,
  },
});
