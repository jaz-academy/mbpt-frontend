import { useMutation, useQuery } from "@tanstack/react-query";
import * as api from "./api";

export const useCreateResult = () =>
  useMutation({ mutationFn: api.createResult });

export const useResult = (id: string) =>
  useQuery({
    queryKey: ["result", id],
    queryFn: () => api.getResultById(id),
    enabled: !!id,
  });

export const useQuestions = (
  segment?: "adult" | "kids",
  locale?: "id" | "en",
) =>
  useQuery({
    queryKey: ["questions", segment, locale],
    queryFn: () => api.getQuestions({ segment: segment!, locale: locale! }),
    enabled: Boolean(segment && locale),
  });

export const useResultProfile = (
  id?: string,
  segment?: "adult" | "kids",
  locale?: "id" | "en",
) =>
  useQuery({
    queryKey: ["result-profile", id, segment, locale],
    queryFn: () =>
      api.getResultProfile(id!, {
        segment: segment!,
        locale: locale!,
      }),
    enabled: Boolean(id && segment && locale),
  });
