import { Suspense } from "react";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import MainView from "./pages/main";
import Loading from "./components/loading";
import ViewDetails from "./pages/viewDetails";
function App() {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <Layout>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/ebook-product/:id" element={<ViewDetails />} />
          <Route path="*" element={<div>"This page not founded!"</div>} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
