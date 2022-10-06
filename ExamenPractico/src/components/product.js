import * as React from "react";
import * as RN from "react-native";
import { database } from "../cfg/firebase_config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

export default function Product({ id, emoji, name, price, isSold }) {
  const onDelete = () => {
    const docRef = doc(database, "products", id);
    deleteDoc(docRef);
  };

  const onEdit = () => {
    const docRef = doc(database, "products", id);
    updateDoc(docRef, {
      isSold: true,
    });
  };

  return (
    <RN.View>
      <RN.View style={styles.productContainer}>
        <RN.View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
        </RN.View>
        <RN.View style={styles.align}>
          <RN.Text style={styles.emoji}>{emoji}</RN.Text>
          <RN.Text style={styles.name}>{name}</RN.Text>
          <RN.Text style={styles.price}>${price}</RN.Text>
        </RN.View>
        {isSold ? (
          <RN.TouchableOpacity
            style={[styles.button, { backgroundColor: "gray" }]}
          >
            <RN.Text style={styles.buttonText}>Agotado</RN.Text>
          </RN.TouchableOpacity>
        ) : (
          <RN.TouchableOpacity onPress={onEdit} style={styles.button}>
            <RN.Text style={styles.buttonText}>Comprar</RN.Text>
          </RN.TouchableOpacity>
        )}
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
  },
  emoji: {
    fontSize: 100,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0FA5E9",
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  align: {
    alignItems: "center",
  },
});
