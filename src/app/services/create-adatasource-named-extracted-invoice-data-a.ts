import { ItemsType } from '../models/CreateADatasourceNamedExtractedInvoiceDataA/items-type';

export async function getItems(): Promise<ItemsType[]> {
  const response = await fetch('../../static-data/create-adatasource-named-extracted-invoice-data-a-items-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
