import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn'
import CartContent from '../../components/CartContent';
import PageHero from '../../components/PageHero'



const CartPage = () => {
  const items = useSelector(s => s.cartReducer.items)
  return (
    <div>
      <PageHero title="Cart" />
      <CartContent />
    </div>
  );
};

export default CartPage;
