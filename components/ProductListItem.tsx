import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';
import { Tables } from '@/database.types';

export const defaultPizzaImage =
    'https://www.shutterstock.com/shutterstock/photos/1522610525/display_1500/stock-vector-italian-round-pizza-on-wooden-table-icon-over-white-background-vector-illustration-1522610525.jpg'

type ProductListItemProps = {
    product: Tables<'products'>;

}

const ProductListItem = ({ product }: ProductListItemProps) => {
    const segments = useSegments();
    console.log(segments)

    return (
        <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
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
