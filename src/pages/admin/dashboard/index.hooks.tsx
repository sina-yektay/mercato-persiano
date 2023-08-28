import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export const useDashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useLayoutEffect(() => {
    if (!session?.user.isAdmin) {
      router.push("/");
    }
  }, []);
  return {};
};
