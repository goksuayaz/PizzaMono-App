import { Text, FlatList, ActivityIndicator } from "react-native";
import OrderListItem from "@/components/OrderListItem";
import { useAdminOrderList } from "@/api/orders";

export default function OrdersScreen() {

    const { data: orders, isLoading, error } = useAdminOrderList({ archived: false });

    if (isLoading) {
        return <ActivityIndicator />
    }

    if (error) {
        return <Text> Failed to fetch </Text>
    }


    return (
        <FlatList
            data={orders}
            renderItem={({ item }) => <OrderListItem order={item} />}
            contentContainerStyle={{ gap: 10, padding: 10 }}
        />
    )
}