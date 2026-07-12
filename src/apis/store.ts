/**
 * Store models & APIs
 * @see https://petstore3.swagger.io/#/store
 */

export type OrderStatus = 'placed' | 'approved' | 'delivered'

export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: OrderStatus;
  complete?: boolean;
}

export const store = {
  getInventory() {
    return client.request<Record<string, number>>('/store/inventory', {
      method: 'GET',
    })
  },

  placeOrder(body: Order) {
    return client.request<Order>('/store/order', {
      method: 'POST',
      body,
    })
  },

  getOrderById(orderId: number) {
    return client.request<Order>(`/store/order/${orderId}`, {
      method: 'GET',
    })
  },

  deleteOrder(orderId: number) {
    return client.request(`/store/order/${orderId}`, {
      method: 'DELETE',
    })
  },
}
