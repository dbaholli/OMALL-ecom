import { lazy, Suspense } from "react";
import Loader from "../../components/shared/Loader/Loader";
const LazyLoaded = lazy(() => import("./CategoryPage"));

const CategoryPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyLoaded />
    </Suspense>
  );
};

export default CategoryPage;
