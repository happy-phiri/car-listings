import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars, { loader as carsLoader } from "./pages/cars/Cars";
import AccountLayout from "./components/AccountLayout";
import CarDetails, {
  loader as currentCarLoader,
} from "./pages/cars/CarDetails";
import CarDescription from "./pages/cars/CarDescription";
import CarOverview from "./pages/cars/CarOverview";
import CarImages from "./pages/cars/CarImages";
import Contact from "./pages/cars/Contact";
import Dashboard from "./pages/account/Dashboard";
import UserCars from "./pages/account/UserCars";
import UserListing from "./pages/account/UserListing";
import UserReviews from "./pages/account/UserReviews";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cars" element={<Cars />} loader={carsLoader} />
      <Route
        path="cars/:id"
        element={<CarDetails />}
        loader={currentCarLoader}
        errorElement={<NotFound />}>
        <Route index element={<CarOverview />} />
        <Route path="description" element={<CarDescription />} />
        <Route path="images" element={<CarImages />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="account" element={<AccountLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cars" element={<UserCars />} />
        <Route path="listing" element={<UserListing />} />
        <Route path="reviews" element={<UserReviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
