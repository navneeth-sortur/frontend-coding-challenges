const routesData = [
  {
    path: "/",
    label: "Home",
    component: "Home"
  },
  {
    path: "/products",
    label: "Products",
    component: "Products",
    children: [
      {
        path: "electronics",
        label: "Electronics",
        component: "Electronics",
        children: [
          {
            path: "phones",
            label: "Mobile Phones",
            component: "MobilePhones"
          },
          {
            path: "laptops",
            label: "Laptops",
            component: "Laptops"
          }
        ]
      }
    ]
  }
];

export default routesData;
