import { useCallback, useEffect, useState } from 'react';
import { getItems } from '../services/create-adatasource-named-extracted-invoice-data-a';
import { ItemsType } from '../models/CreateADatasourceNamedExtractedInvoiceDataA/items-type';

export const useGetItems = () => {
  const [items, setItems] = useState<ItemsType[]>([]);

  const requestItems = useCallback(() => {
    let ignore = false;
    getItems()
      .then((data) => {
        if (!ignore) {
          setItems(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestItems();
  }, [requestItems]);

  return { requestCreateADatasourceNamedExtractedInvoiceDataAItems: requestItems, createADatasourceNamedExtractedInvoiceDataAItems: items, setCreateADatasourceNamedExtractedInvoiceDataAItems: setItems };
}
