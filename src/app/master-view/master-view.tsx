import { IgrAvatar, IgrBadge, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrIconButton, IgrLinearProgress, IgrNavbar } from 'igniteui-react';
import { IgrColumn, IgrGrid } from 'igniteui-react-grids';
import { useGetItems } from '../hooks/create-adatasource-named-extracted-invoice-data-a-hooks';
import 'igniteui-react-grids/grids/combined.js';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const { createADatasourceNamedExtractedInvoiceDataAItems } = useGetItems();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("main-navigation-bar")}>
          <div style={{ display: 'contents' }} slot="start">
            <IgrIconButton variant="flat" className={classes("icon-button-8o-9-8wk")}>
              <span className={classes("material-icons icon")}>
                <span>receipt_long</span>
              </span>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")}>
            <h6 className={classes("h6")}>
              <span>Invoice Data Extraction System</span>
            </h6>
            <IgrButton variant="flat" type="button" className={classes("button-rsqqr button-rsqqr_1")}>
              <span className={classes("material-icons icon")}>
                <span>dashboard</span>
              </span>
              <span>Dashboard</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("button-rsqqr button-rsqqr_2")}>
              <span className={classes("material-icons icon")}>
                <span>history</span>
              </span>
              <span>Batch History</span>
            </IgrButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("icon-button-8o-9-8wk")}>
              <span className={classes("material-icons icon")}>
                <span>help_outline</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("icon-button-8o-9-8wk")}>
              <span className={classes("material-icons icon")}>
                <span>settings</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrAvatar initials="DS" shape="circle" className={classes("avatar-t-9-1p-6q")}></IgrAvatar>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout workspace-layout")}>
          <div className={classes("column-layout upload-column")}>
            <IgrCard elevated={true} className={classes("upload-card")}>
              <IgrCardHeader>
                <h3 slot="title">
                  <span>Upload Invoice</span>
                </h3>
                <h5 slot="subtitle">
                  <span>Select or drag &amp; drop invoice files</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent>
                <div className={classes("column-layout dropzone-container")}>
                  <span className={classes("material-icons cloud-upload-icon")}>
                    <span>cloud_upload</span>
                  </span>
                  <p className={classes("typography__body-1 dropzone-main-text")}>
                    <span>Drag your invoice file here</span>
                  </p>
                  <p className={classes("typography__caption dropzone-sub-text")}>
                    <span>Supports PDF, PNG, JPG up to 10MB</span>
                  </p>
                  <IgrButton type="button" className={classes("upload-action-button")}>
                    <span className={classes("material-icons")}>
                      <span>file_upload</span>
                    </span>
                    <span>Upload Invoice</span>
                  </IgrButton>
                </div>
              </IgrCardContent>
              <IgrCardActions>
                <div slot="end"></div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("upload-card")}>
              <IgrCardHeader>
                <h3 slot="title">
                  <span>Uploaded Invoice Preview</span>
                </h3>
                <h5 slot="subtitle">
                  <span>SANSKAR STYLE - Invoice #3601</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent>
                <div className={classes("column-layout preview-container")}>
                  <img src="/src/assets/a-clean-scanned-retail-wholesa-f68357e9582b.png" alt="" className={classes("invoice-preview-image")} />
                  <div className={classes("row-layout confidence-info")}>
                    <p className={classes("typography__body-2 content")}>
                      <span>Extraction Confidence</span>
                    </p>
                    <p className={classes("typography__body-1 confidence-value")}>
                      <span>100% Accurate</span>
                    </p>
                  </div>
                  <IgrLinearProgress variant="success" value={100} labelAlign="top" className={classes("confidence-linear-bar")}></IgrLinearProgress>
                </div>
              </IgrCardContent>
              <IgrCardActions>
                <div slot="end"></div>
              </IgrCardActions>
            </IgrCard>
          </div>
          <div className={classes("column-layout spreadsheet-column")}>
            <IgrCard elevated={true} className={classes("upload-card")}>
              <IgrCardHeader>
                <h3 slot="title">
                  <span>Extracted Records</span>
                </h3>
                <h5 slot="subtitle">
                  <span>Structured spreadsheet format</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent>
                <div className={classes("column-layout preview-container")}>
                  <div className={classes("row-layout grid-header-actions")}>
                    <div className={classes("row-layout status-badge-container")}>
                      <IgrBadge variant="success" className={classes("status-badge")}>
                        <span>Extraction Complete</span>
                      </IgrBadge>
                      <p className={classes("typography__caption status-count-text")}>
                        <span>5 items extracted successfully</span>
                      </p>
                    </div>
                    <div className={classes("row-layout status-badge-container")}>
                      <IgrButton variant="outlined" type="button" className={classes("button-rsqqr")}>
                        <span className={classes("material-icons")}>
                          <span>file_download</span>
                        </span>
                        <span>Export to Excel</span>
                      </IgrButton>
                      <IgrButton type="button" className={classes("button-rsqqr")}>
                        <span className={classes("material-icons")}>
                          <span>save</span>
                        </span>
                        <span>Save to System</span>
                      </IgrButton>
                    </div>
                  </div>
                  <IgrGrid data={createADatasourceNamedExtractedInvoiceDataAItems} primaryKey="invoiceNo" allowFiltering={true} filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar extracted-invoice-grid")}>
                    <IgrColumn field="invoiceNo" header="Invoice No" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="date" header="Date" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="party" header="Party" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="itemCode" header="Item/Code" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="pcs" header="PCS" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="rate" header="Rate" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="amount" header="Amount" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="gstPercent" header="GST %" sortable={true} selectable={false}></IgrColumn>
                    <IgrColumn field="final" header="Final" sortable={true} selectable={false}></IgrColumn>
                  </IgrGrid>
                  <div className={classes("row-layout totals-container")}>
                    <div className={classes("column-layout total-pcs-column")}>
                      <p className={classes("typography__caption status-count-text")}>
                        <span>Total PCS</span>
                      </p>
                      <h6 className={classes("content")}>
                        <span>64</span>
                      </h6>
                    </div>
                    <div className={classes("column-layout total-pcs-column")}>
                      <p className={classes("typography__caption status-count-text")}>
                        <span>Taxable Amount</span>
                      </p>
                      <h6 className={classes("content")}>
                        <span>₹68,480.00</span>
                      </h6>
                    </div>
                    <div className={classes("column-layout total-pcs-column")}>
                      <p className={classes("typography__caption status-count-text")}>
                        <span>Total GST (5%)</span>
                      </p>
                      <h6 className={classes("content")}>
                        <span>₹3,424.00</span>
                      </h6>
                    </div>
                    <div className={classes("column-layout final-total-column")}>
                      <p className={classes("typography__overline content_1")}>
                        <span>Final Grand Total</span>
                      </p>
                      <h5 className={classes("content_1")}>
                        <span>₹71,904.00</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </IgrCardContent>
              <IgrCardActions>
                <div slot="end"></div>
              </IgrCardActions>
            </IgrCard>
          </div>
        </div>
      </div>
    </>
  );
}
