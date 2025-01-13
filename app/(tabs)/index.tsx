import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '@/constants/Colors';
import products from '@/assets/data/products';

const product = products[0];


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={{ fontSize: 18, fontWeight: '700', marginVertical: 10 }}> {product.name} </Text>
      <Text style={styles.price}>${product.price} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20


  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'

  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16
  }

});
