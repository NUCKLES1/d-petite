
import { requiredUser } from '../../hooks/requiredUser';

const OrdersPage = async () => {
   await requiredUser();
  return (
    <div>Orders</div>
  )
}

export default OrdersPage