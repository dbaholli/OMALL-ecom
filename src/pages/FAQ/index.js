import { lazy, Suspense } from "react";
import Loader from "../../components/shared/Loader/Loader";
const LazyLoaded = lazy(() => import("./FaqPage"));

const FaqPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyLoaded />
    </Suspense>
  );
};

export default FaqPage;
