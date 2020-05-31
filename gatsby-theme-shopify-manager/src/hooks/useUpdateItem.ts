import {useContext} from 'react';
import {Context} from '../Context';
import {AttributeInput} from '../types';
import {useGetLineItem} from './useGetLineItem';

export function useUpdateItem() {
  const {client, cart, setCart} = useContext(Context);
  const getLineItem = useGetLineItem();

  async function updateItem(
    variantId: string | number,
    customAttributes: AttributeInput[],
  ) {
    if (variantId == null) {
      throw new Error('Must provide a variant id');
    }

    const lineItem = getLineItem(variantId);
    if (lineItem == null) {
      throw new Error(`Item with variantId ${variantId} not in cart`);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const newCart = await client.checkout.updateLineItems(cart.id, [
      {id: lineItem.id, customAttributes},
    ]);
    setCart(newCart);
  }

  return updateItem;
}
