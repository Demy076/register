import { LitElement, TemplateResult, html } from "lit";
import { customElement, property, state } from "lit/decorators";
import validator from "validator";
import Swal from "sweetalert2";
import { toastTimer } from "../../../misc/toast";
import axiosInstance from "../../../httpClient/axiosInstance";
import { Router } from "@vaadin/router";
interface InputTakeTable {
  name: string;
  email: string;
}

@customElement("table-component-customer")
export default class TableComponentCustomer extends LitElement {
  @property({ type: Number }) tableNumber = 0;
  @property({ type: Boolean }) tableActive = true;
  @property({ type: String }) barcode = "";
  @property({ type: Date }) lastUpdated = new Date();
  @state() private _barcodeImage = "";

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  private async _TakeTable(): Promise<void> {
    const { value: formValues } = await Swal.fire<InputTakeTable>({
      title: `Table ${this.tableNumber}`,
      html: `
            <input id="swal-input1" class="swal2-input" placeholder="Name">
            <input id="swal-input2" class="swal2-input" placeholder="Email">
            `,
      focusConfirm: false,
      preConfirm: () => {
        const name = (
          document.getElementById("swal-input1") as HTMLInputElement
        ).value;
        const email = (
          document.getElementById("swal-input2") as HTMLInputElement
        ).value;
        if (!name || !email) {
          Swal.showValidationMessage(`Please enter name and email`);
          return;
        }
        if (!validator.isEmail(email)) {
          Swal.showValidationMessage(`Please enter valid email`);
          return;
        }

        return { name, email };
      },
    });
    if (formValues) {
      try {
        const takeTableRequest = await axiosInstance.post<{
          tableNumber: number;
          customer: {
            name: string;
            email: string;
          };
          identifier: string;
        }>(`/tables/${this.tableNumber}/take`, {
          name: formValues.name,
          email: formValues.email,
        });
        sessionStorage.setItem(
          "customer",
          JSON.stringify(takeTableRequest.data.customer)
        );
        Router.go(`/customer/${this.tableNumber}/overview`);
        return;
      } catch (e) {
        toastTimer(
          "error",
          "Error",
          2000,
          "Something went wrong creating table"
        );
        return;
      }
    }
    toastTimer("error", "Error", 2000, "Please try again later");
  }

  protected render(): TemplateResult<1> {
    return html`
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center">
            <img
              src="${this.barcode}"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="card-title">Table ${this.tableNumber}</span>
                  <span
                    class="badge ${this.tableActive
                      ? "bg-success"
                      : "bg-danger"}"
                  >
                    ${this.tableActive ? "Available" : "Unavailable"}
                  </span>
                </div>
              </h5>
              <p class="card-text">
                This is table number ${this.tableNumber} u can either scan or
                click button to start ordering
              </p>
              <button class="btn btn-primary" @click=${this._TakeTable}>
                Take table
              </button>
              <p class="card-text">
                <!-- Now create an actual small class with formatted date -->
                <small class="text-muted"
                  >${this.lastUpdated.toDateString()} |
                  ${this.lastUpdated.toLocaleTimeString()}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
