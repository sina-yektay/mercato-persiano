import { useEffect, useState } from "react";
import i18n from "../../i18n";

export function useTranslation() {
  const [tReady, setTReady] = useState(false);

  useEffect(() => {
    const onLanguageChanged = () => setTReady(true);

    i18n.on("languageChanged", onLanguageChanged);

    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, []);

  return {
    t: i18n.t,
    tReady,
  };
}
