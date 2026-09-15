import { ItemsType } from '../models/CreateADatasourceNamedExtractedInvoiceDataA/items-type';
import { CreateADatasourceNamedExtractedInvoiceDataA } from '../static-data/create-adatasource-named-extracted-invoice-data-a';

class CreateADatasourceNamedExtractedInvoiceDataAService {
  public getItems(): ItemsType[] {
    return CreateADatasourceNamedExtractedInvoiceDataA['ItemsType'];
  }
}
export const createADatasourceNamedExtractedInvoiceDataAService: CreateADatasourceNamedExtractedInvoiceDataAService = new CreateADatasourceNamedExtractedInvoiceDataAService();
