import { lazy, Suspense } from "react";
import Loader from "../../components/shared/Loader/Loader";
const LazyLoaded = lazy(() => import("./ProductPage"));

const ProductPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyLoaded />
    </Suspense>
  );
};

export default ProductPage;
