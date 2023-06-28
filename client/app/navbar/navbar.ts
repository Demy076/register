import { LitElement, TemplateResult, html } from "lit";
import { customElement, property, state } from "lit/decorators";

@customElement("navbar-component")
export default class NavbarComponent extends LitElement {
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
  protected render(): TemplateResult<1> {
    return html`
        <header style="margin-bottom: 30px;">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarDark"
                aria-controls="navbarDark"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    `;
  }
}
