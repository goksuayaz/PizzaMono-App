import { ActivityIndicator, FlatList, Text } from 'react-native';
import ProductListItem from '@components/ProductListItem';
import { useProductList } from '@/api/products';


export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text> Failed to fetch products</Text>
  }


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data, error } = await supabase.from('products').select('*');
  //     console.log(error);
  //     console.log(data);
  //   };
  //   fetchProducts();
  // }, [])


  return (
    <FlatList
      data={products} renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />

  )

}
