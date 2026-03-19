import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import { requiredUser } from '../../hooks/requiredUser';

const OrdersPage = async () => {
   await requiredUser();
  return (
    <div>Orders</div>
  )
}

export default OrdersPage