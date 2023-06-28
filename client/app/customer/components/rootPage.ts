import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators";
import { Task } from "@lit-labs/task";
import axiosInstance from "../../httpClient/axiosInstance";
import { TableFetchResponse } from "./tables/interfaces/fetchTablesI";
import TableComponentCustomer from "./subComps/table";

if (!customElements.get("table-component-customer")) {
  customElements.define("table-component-customer", TableComponentCustomer);
}

@customElement("root-page-customer")
export default class RootPageCustomer extends LitElement {
  @property({ type: String }) title = "Customer";
  @state() private PageID = sessionStorage.getItem("page") || "1";
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
  private _FetchTables = new Task(
    this,
    async ([page]: [string]) => {
      const res = await axiosInstance.get<TableFetchResponse>(
        `/tables/${page}`
      );
      return res.data;
    },
    () => [this.PageID]
  );
  render() {
    return html`
      <div class="container">
        <div class="row justify-content-center">
          ${this._FetchTables.render({
            pending: () => html`Loading...`,
            error: (err) => html`Error: ${err}`,
            complete: (data) => html`
              ${data.tablesWithBarcode.map((table) => {
                return html`<div class="col-12 col-md-6 col-lg-4 mb-4">
                  <table-component-customer
                    tableNumber=${table.table_number}
                    ?tableactive=${table.active}
                    barcode=${table.barcode}
                  ></table-component-customer>
                </div>`;
              })}
            `,
          })}
        </div>
      </div>
    `;
  }
}
