import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { Product } from '@/types';
import { Link } from 'expo-router';

export const defaultPizzaImage =
    'https://cdn.dpeurasia.com/dms/images/product/default.png'

type ProductListItemProps = {
    product: Product;

}

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image}
                    resizeMode='contain' />
                <Text style={{ fontSize: 18, fontWeight: '700', marginVertical: 10 }}> {product.name} </Text>
                <Text style={styles.price}>${product.price} </Text>
            </Pressable>
        </Link>
    )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        flex: 1,
        maxWidth: "50%"


    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold'

    },
    image: {
        width: "100%",
        aspectRatio: 1,

    }

});
