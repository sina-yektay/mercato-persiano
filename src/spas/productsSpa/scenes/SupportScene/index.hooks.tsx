import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store/slices";

export const useSupportScene = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.changeRoute({ index: false }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch]);
  return { t, session };
};
