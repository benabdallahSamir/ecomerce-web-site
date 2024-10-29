import { useRef, useState } from "react";
import Orders from "./Orders";
import ProductManagement from "./ProductManagement";
import Sales from "./Sales";
import CustomerList from "./CustomerList";
import EditAccount from "./EditAccount";

export default function AdminDashboard() {
  const ORDERS = "ORDERS";
  const PRODUCTS = "PRODUCTS";
  const SALES = "SALES";
  const EDIT = "EDIT";
  const CUSTUMERS = "USERS";

  const [pageName, setPageName] = useState(CUSTUMERS);
  const [activeBorder, setActiveBorder] = useState("0");
  function changepages(dataPage) {
    setPageName(dataPage);
    switch (dataPage) {
      case CUSTUMERS:
        setActiveBorder("0");
        break;
      case ORDERS:
        setActiveBorder("100%");
        break;
      case PRODUCTS:
        setActiveBorder("200%");
        break;
      case SALES:
        setActiveBorder("300%");
        break;
      case EDIT:
        setActiveBorder("400%");
        break;
    }
  }
  return (
    <div className="w-full h-full">
      <nav className="bg-gray-700 w-full h-[10%] flex items-center justify-center">
        <ul className="h-full flex relative">
          <li
            className={`absolute bottom-0 left-0 w-1/5 h-[2px] rounded-lg bg-green-600 duration-300 translate-x-[${activeBorder}]`}
          ></li>
          <li
            className="h-full w-28 flex items-center justify-center cursor-pointer duration-300 hover:font-semibold"
            onClick={() => changepages(CUSTUMERS)}
          >
            User List
          </li>
          <li
            className="h-full w-28 flex items-center justify-center cursor-pointer duration-300 hover:font-semibold"
            onClick={() => changepages(ORDERS)}
          >
            Orders
          </li>
          <li
            className="h-full w-28 flex items-center justify-center cursor-pointer duration-300 hover:font-semibold"
            onClick={() => changepages(PRODUCTS)}
          >
            Our Products
          </li>
          <li
            className="h-full w-28 flex items-center justify-center cursor-pointer duration-300 hover:font-semibold"
            onClick={() => changepages(SALES)}
          >
            Sales
          </li>
          <li
            className="h-full w-28 flex items-center justify-center cursor-pointer duration-300 hover:font-semibold"
            onClick={() => changepages(EDIT)}
          >
            Edit
          </li>
        </ul>
      </nav>
      {pageName === ORDERS && <Orders />}
      {pageName === CUSTUMERS && <CustomerList />}
      {pageName === SALES && <Sales />}
      {pageName === PRODUCTS && <ProductManagement />}
      {pageName === EDIT && <EditAccount />}
    </div>
  );
}
