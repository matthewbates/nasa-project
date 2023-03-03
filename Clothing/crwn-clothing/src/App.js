import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";

export default function App() {
  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
