import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShopiCardProvider } from "../../Context";
import { useContext } from "react";
import { ShopiCardContext } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import { CardDetail } from "../../components/CardDetail/CardDetail";
import { Navbar } from "../../components/Navbar";
import "../../App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/card-detail" },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  const context = useContext(ShopiCardContext);
  console.log(context, "aqui context");

  return (
    <ShopiCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShopiCardProvider>
  );
}

export default App;
