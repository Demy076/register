import { Router } from "@vaadin/router";
import RootPageCustomer from "./app/customer/components/rootPage";
import NavbarComponent from "./app/navbar/navbar";

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
    component: "root-page-customer",
    children: [
      {
        path: "/tables/:page",
        component: "div",
        action: async (context, commands) => {
          sessionStorage.setItem(
            "page",
            (context.params.page as string) || "1"
          );
        },
        children: [
          {
            path: "",
            component: "navbar-component",
          },
          {
            path: "",
            component: "root-page-customer",
          },
        ],
      },
    ],
  },
]);
