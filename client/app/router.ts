import { Router } from "@vaadin/router";
import RootPageCustomer from "./customer/components/rootPage";
import NavbarComponent from "./navbar/navbar";

const components = {
  "navbar-component": NavbarComponent,
  "root-page-customer": RootPageCustomer,
};

for (const [name, component] of Object.entries(components)) {
  console.log(name);
  if (customElements.get(name)) continue;
  customElements.define(name, component);
}

export const router = new Router(document.querySelector("#outlet"));

router.setRoutes([
  {
    path: "/customer",
    component: "navbar-component",
    children: [
      {
        path: "/tables/:page",
        component: "root-page-customer",
        action: async (context, commands) => {
          sessionStorage.setItem(
            "page",
            (context.params.page as string) || "1"
          );
        },
      },
    ],
  },
]);
