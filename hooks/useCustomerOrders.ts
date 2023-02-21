import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ORDERS } from "../graphql/queries";

const useCustomerOrders = (userId: string) => {
  const { data, loading, error } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      ...value,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );

    setOrders(customerOrders)

    setOrders(orders);
  }, [data, userId]);

  return { loading, error, orders };
};

export default useCustomerOrders;