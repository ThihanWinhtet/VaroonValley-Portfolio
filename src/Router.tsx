import { createBrowserRouter } from "react-router-dom";
import WhatWeUse from "./Pages/WhatWeUse";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";

let router = createBrowserRouter([
    { path : '', element : <Layout/>, children : [
        { path : '/' , element : <HomePage/>},
        { path : '/home' , element : <HomePage/>},
        { path : '/solutions', element : <WhatWeUse/>},
        { path : '/about-us', element : <AboutUs/>},
    ]}
]);

export default router;