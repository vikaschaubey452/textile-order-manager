import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcLinearProgressComponent, IgcNavbarComponent } from 'igniteui-webcomponents';
import { IgcGridComponent } from 'igniteui-webcomponents-grids';
import baseStyles from '/src/app/base-view-styles.css?inline';
import gridThemeLightMaterial from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline'
import { ItemsType } from '../models/CreateADatasourceNamedExtractedInvoiceDataA/items-type';
import { createADatasourceNamedExtractedInvoiceDataAService } from '../services/create-adatasource-named-extracted-invoice-data-a-service';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcButtonComponent, IgcAvatarComponent, IgcCardComponent, IgcLinearProgressComponent, IgcBadgeComponent, IgcGridComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
    }
    .main-navigation-bar {
      color: var(--ig-primary-50-contrast);
      background-color: var(--ig-primary-900);
      height: max-content;
      min-width: min-content;
    }
    .icon-button-8o-9-8wk {
      --ig-size: var(--ig-size-medium);
    }
    .button-rsqqr {
      --ig-size: var(--ig-size-small);
      height: max-content;
      flex-shrink: 0;
    }
    .upload-action-button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .icon-button-8o-9-8wk::part(base) {
      color: var(--ig-primary-50-contrast);
    }
    .button-rsqqr_1::part(base) {
      color: var(--ig-primary-50-contrast);
    }
    .button-rsqqr_2::part(base) {
      color: var(--ig-primary-50-contrast);
    }
    .icon {
      color: var(--ig-primary-50-contrast);
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .avatar-t-9-1p-6q {
      --ig-size: var(--ig-size-small);
    }
    .cloud-upload-icon {
      --size: 48px;
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--ig-primary-500);
    }
    .dropzone-main-text {
      text-align: center;
      height: max-content;
      min-width: min-content;
    }
    .dropzone-sub-text {
      text-align: center;
      color: var(--ig-gray-500);
      height: max-content;
      min-width: min-content;
    }
    .invoice-preview-image {
      object-fit: contain;
      border-radius: 4px;
      height: 320px;
      min-height: 320px;
      max-height: 320px;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .confidence-value {
      color: var(--ig-success-500);
      height: max-content;
      min-width: min-content;
    }
    .status-count-text {
      color: var(--ig-gray-500);
      height: max-content;
      min-width: min-content;
    }
    .content_1 {
      color: var(--ig-success-800);
      height: max-content;
      min-width: min-content;
    }
    .avatar-t-9-1p-6q::part(base) {
      color: var(--ig-secondary-50-contrast);
      background-color: var(--ig-secondary-500);
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .workspace-layout {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .upload-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 380px;
    }
    .upload-card {
      height: max-content;
      min-width: 320px;
      max-width: 576px;
    }
    .dropzone-container {
      border-color: var(--ig-gray-300);
      border-width: 2px;
      border-style: dashed;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px 0;
      position: relative;
      padding: 32px 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .preview-container {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .confidence-info {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 0 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .spreadsheet-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 2;
      flex-basis: 600px;
    }
    .grid-header-actions {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 12px;
      position: relative;
      padding-bottom: 12px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .status-badge-container {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .totals-container {
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 12px 24px;
      position: relative;
      padding-top: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .total-pcs-column {
      justify-content: flex-start;
      align-items: flex-end;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .final-total-column {
      background-color: var(--ig-success-50);
      border-radius: 4px;
      justify-content: flex-start;
      align-items: flex-end;
      align-content: flex-start;
      position: relative;
      padding: 8px 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .confidence-linear-bar {
      width: 100%;
      height: max-content;
      min-width: 75px;
      min-height: null;
      max-width: 100%;
    }
    .status-badge {
      width: max-content;
      height: max-content;
    }
    .extracted-invoice-grid {
      --ig-size: var(--ig-size-medium);
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.createADatasourceNamedExtractedInvoiceDataAItems = createADatasourceNamedExtractedInvoiceDataAService.getItems();
  }

  @state()
  private createADatasourceNamedExtractedInvoiceDataAItems: ItemsType[] = [];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <style>${gridThemeLightMaterial}</style>
      <igc-navbar class="main-navigation-bar">
        <igc-icon-button variant="flat" slot="start" class="icon-button-8o-9-8wk">
          <span class="material-icons icon">
            receipt_long
          </span>
        </igc-icon-button>
        <div class="row-layout group">
          <h6 class="h6">
            Invoice Data Extraction System
          </h6>
          <igc-button variant="flat" type="button" class="button-rsqqr button-rsqqr_1">
            <span class="material-icons icon">
              dashboard
            </span>
            <span>Dashboard</span>
          </igc-button>
          <igc-button variant="flat" type="button" class="button-rsqqr button-rsqqr_2">
            <span class="material-icons icon">
              history
            </span>
            <span>Batch History</span>
          </igc-button>
        </div>
        <igc-icon-button variant="flat" slot="end" class="icon-button-8o-9-8wk">
          <span class="material-icons icon">
            help_outline
          </span>
        </igc-icon-button>
        <igc-icon-button variant="flat" slot="end" class="icon-button-8o-9-8wk">
          <span class="material-icons icon">
            settings
          </span>
        </igc-icon-button>
        <igc-avatar initials="DS" slot="end" shape="circle" class="avatar-t-9-1p-6q"></igc-avatar>
      </igc-navbar>
      <div class="row-layout workspace-layout">
        <div class="column-layout upload-column">
          <igc-card ?elevated=${true} class="upload-card">
            <igc-card-header>
              <h3 slot="title">
                Upload Invoice
              </h3>
              <h5 slot="subtitle">
                Select or drag &amp; drop invoice files
              </h5>
            </igc-card-header>
            <igc-card-content>
              <div class="column-layout dropzone-container">
                <span class="material-icons cloud-upload-icon">
                  cloud_upload
                </span>
                <p class="typography__body-1 dropzone-main-text">
                  Drag your invoice file here
                </p>
                <p class="typography__caption dropzone-sub-text">
                  Supports PDF, PNG, JPG up to 10MB
                </p>
                <igc-button type="button" class="upload-action-button">
                  <span class="material-icons">
                    file_upload
                  </span>
                  <span>Upload Invoice</span>
                </igc-button>
              </div>
            </igc-card-content>
            <igc-card-actions>
          </igc-card-actions>
          </igc-card>
          <igc-card class="upload-card">
            <igc-card-header>
              <h3 slot="title">
                Uploaded Invoice Preview
              </h3>
              <h5 slot="subtitle">
                SANSKAR STYLE - Invoice #3601
              </h5>
            </igc-card-header>
            <igc-card-content>
              <div class="column-layout preview-container">
                <img src="/src/assets/a-clean-scanned-retail-wholesa-f68357e9582b.png" alt="" class="invoice-preview-image" />
                <div class="row-layout confidence-info">
                  <p class="typography__body-2 content">
                    Extraction Confidence
                  </p>
                  <p class="typography__body-1 confidence-value">
                    100% Accurate
                  </p>
                </div>
                <igc-linear-progress variant="success" value=${100} label-align="top" class="confidence-linear-bar"></igc-linear-progress>
              </div>
            </igc-card-content>
            <igc-card-actions>
          </igc-card-actions>
          </igc-card>
        </div>
        <div class="column-layout spreadsheet-column">
          <igc-card ?elevated=${true} class="upload-card">
            <igc-card-header>
              <h3 slot="title">
                Extracted Records
              </h3>
              <h5 slot="subtitle">
                Structured spreadsheet format
              </h5>
            </igc-card-header>
            <igc-card-content>
              <div class="column-layout preview-container">
                <div class="row-layout grid-header-actions">
                  <div class="row-layout status-badge-container">
                    <igc-badge variant="success" class="status-badge">
                      Extraction Complete
                    </igc-badge>
                    <p class="typography__caption status-count-text">
                      5 items extracted successfully
                    </p>
                  </div>
                  <div class="row-layout status-badge-container">
                    <igc-button variant="outlined" type="button" class="button-rsqqr">
                      <span class="material-icons">
                        file_download
                      </span>
                      <span>Export to Excel</span>
                    </igc-button>
                    <igc-button type="button" class="button-rsqqr">
                      <span class="material-icons">
                        save
                      </span>
                      <span>Save to System</span>
                    </igc-button>
                  </div>
                </div>
                <igc-grid .data=${this.createADatasourceNamedExtractedInvoiceDataAItems} primary-key="invoiceNo" ?allow-filtering=${true} filter-mode="excelStyleFilter" class="ig-typography ig-scrollbar extracted-invoice-grid">
                  <igc-column field="invoiceNo" header="Invoice No" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="date" header="Date" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="party" header="Party" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="itemCode" header="Item/Code" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="pcs" header="PCS" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="rate" header="Rate" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="amount" header="Amount" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="gstPercent" header="GST %" ?sortable=${true} selectable="false"></igc-column>
                  <igc-column field="final" header="Final" ?sortable=${true} selectable="false"></igc-column>
                </igc-grid>
                <div class="row-layout totals-container">
                  <div class="column-layout total-pcs-column">
                    <p class="typography__caption status-count-text">
                      Total PCS
                    </p>
                    <h6 class="content">
                      64
                    </h6>
                  </div>
                  <div class="column-layout total-pcs-column">
                    <p class="typography__caption status-count-text">
                      Taxable Amount
                    </p>
                    <h6 class="content">
                      ₹68,480.00
                    </h6>
                  </div>
                  <div class="column-layout total-pcs-column">
                    <p class="typography__caption status-count-text">
                      Total GST (5%)
                    </p>
                    <h6 class="content">
                      ₹3,424.00
                    </h6>
                  </div>
                  <div class="column-layout final-total-column">
                    <p class="typography__overline content_1">
                      Final Grand Total
                    </p>
                    <h5 class="content_1">
                      ₹71,904.00
                    </h5>
                  </div>
                </div>
              </div>
            </igc-card-content>
            <igc-card-actions>
          </igc-card-actions>
          </igc-card>
        </div>
      </div>
    `;
  }
}
