import { api } from "../../services/api";
import type { Intro } from "./types";

export const getIntro = ({
  segmen,
  locale,
}: Pick<Intro, "segmen" | "locale">) =>
  api.get("/introduction", {
    params: {
      segment: segmen,
      locale,
      _ts: Date.now(),
    },
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });
