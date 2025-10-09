export default async function getPastOrder(order) {
  const response = await fetch(`/api/past-orders/${order}`);
  const data = await response.json();
  return data;
}
