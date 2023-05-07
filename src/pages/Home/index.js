import { lazy, Suspense } from "react";
import Loader from "../../components/shared/Loader/Loader";
const LazyLoaded = lazy(() => import("./Home"));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LazyLoaded />
    </Suspense>
  );
};

export default Home;
