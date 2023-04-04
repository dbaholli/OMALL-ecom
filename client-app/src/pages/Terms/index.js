import { lazy, Suspense } from "react";
import Loader from "../../components/shared/Loader/Loader";
const LazyLoaded = lazy(() => import("./TermsPage"));

const TermsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyLoaded />
    </Suspense>
  );
};

export default TermsPage;
