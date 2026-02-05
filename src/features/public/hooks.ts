import { useQuery } from "@tanstack/react-query";
import * as api from "./api";

export const useIntro = ({
  segment,
  locale,
}: {
  segment?: string;
  locale?: string;
}) =>
  useQuery({
    queryKey: ["segment", segment, "locale", locale],
    queryFn: () => api.getIntro({ segmen: segment!, locale: locale! }),
    enabled: Boolean(segment && locale),
  });
