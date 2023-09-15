import { useRouter } from "next/router";
import { useLayoutEffect } from "react";


const Home = () => {
  const router = useRouter()
  useLayoutEffect(() => {
    router.push("/mercato");
  }, []);
  return null;
};
export default Home;
