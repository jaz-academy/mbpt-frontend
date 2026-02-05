import { api } from "../../services/api";
import type { CreateResultDto } from "./types";

export const createResult = (data: CreateResultDto) =>
  api.post("/results", data);

export const getResultById = (id: string) => api.get(`/results/${id}`);

export const getQuestions = (params: {
  segment: "adult" | "kids";
  locale: "id" | "en";
}) => api.get("/questions", { params });

export const getResultProfile = (
  id: string,
  params: { segment: "adult" | "kids"; locale: "id" | "en" },
) => api.get(`/result-profiles/${id}`, { params });

export const downloadResultPdf = (id: string) =>
  api.get(`/results/${id}/pdf`, { responseType: "blob" });

export const sendResult = (id: string) => api.post(`/results/${id}/send`);
