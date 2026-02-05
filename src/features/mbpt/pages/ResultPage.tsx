import { useParams } from "react-router-dom";
import { useResult, useResultProfile } from "../hooks";
import { useApp } from "../../../app/hook";

import ResultHero from "../../../components/ResultHero";
import Chart from "../../../components/ResultChart";
import ResultCard from "../../../components/ResultCard";
import ResultSwot from "../../../components/ResultSwot";

export default function Result() {
  const { id } = useParams();
  const { audience, language } = useApp();
  const { data, isLoading, isError } = useResult(id!);
  const result = data?.data;
  const profileId = result?.profile;
  const {
    data: profileData,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useResultProfile(profileId, audience, language);

  if (isLoading || isLoadingProfile)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      </div>
    );

  if (isError || !result)
    return (
      <div className="text-center font-semibold m-8">Result not found</div>
    );

  if (isErrorProfile || !profileData?.data?.content)
    return (
      <div className="text-center font-semibold m-8">
        Result profile not found
      </div>
    );

  const profileContent = profileData.data.content as {
    insight?: string;
    details?: string[];
    goodFuels?: string[];
    badFuels?: string[];
    suggestions?: string[];
    strength?: string[];
    weakness?: string[];
    opportunity?: string[];
    threat?: string[];
  };

  const scores = result.scores;
  const createdAt =
    (result as { createdAt?: string; created_at?: string }).createdAt ??
    (result as { created_at?: string }).created_at;
  const date = new Date(createdAt || "2026-01-01 12:30:15");

  const profileLabel = profileData.data.label ?? "";

  return (
    <>
      {/* User Data */}
      <section className="max-w-6xl mx-auto mt-4 px-10 py-4">
        <table className="w-full text-md md:text-xl text-gray-600 dark:text-gray-400">
          <tr>
            <td className="w-18 font-semibold">Nama</td>
            <td className="font-semibold">: {result.name}</td>
            <td className="text-right font-semibold hidden md:block">
              {date.toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </td>
          </tr>
          <tr>
            <td className="font-semibold">Email</td>
            <td className="font-semibold">: {result.email}</td>
            <td className="text-right font-semibold hidden md:block">
              {date.toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
          </tr>
        </table>
      </section>

      {/* <!-- RESULT HEADER --> */}
      <ResultHero
        label={profileLabel}
        dominan={profileId}
        insight={profileContent.insight ?? ""}
      />

      {/* <!-- DETAILS --> */}
      <section className="text-justify max-w-6xl mx-auto px-8 mt-8 mb-16 md:mb-8">
        {(profileContent.details ?? []).map((detail) => (
          <span key={detail} className="text-md md:text-xl mb-8">
            {detail + " "}
          </span>
        ))}
      </section>
      <br />

      {/* <!-- MAIN CONTENT --> */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 mb-8 md:mb-2">
        {/* <!-- RADAR CHART --> */}
        <Chart scores={scores} />

        {/* <!-- DESCRIPTION --> */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          <ResultCard
            title={language == "id" ? "Motivasi yang Baik" : "Good Fuels"}
            details={profileContent.goodFuels ?? []}
          />
          <ResultCard
            title={
              language == "id" ? "Motivasi yang Kurang Bekerja" : "Bad Fuels"
            }
            details={profileContent.badFuels ?? []}
          />
          <ResultCard
            title={language == "id" ? "Saran Pengembangan" : "Suggestions"}
            details={profileContent.suggestions ?? []}
          />
        </div>
      </section>

      {/* <!-- SWOT --> */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 xl:grid-cols-4  gap-8">
          <ResultSwot
            title="Strengths"
            details={profileContent.strength ?? []}
            color="indigo-600"
          />
          <ResultSwot
            title="Weaknesses"
            details={profileContent.weakness ?? []}
            color="gradient-to-r from-indigo-600 to-purple-600"
          />
          <ResultSwot
            title="Opportunities"
            details={profileContent.opportunity ?? []}
            color="gradient-to-r from-purple-600 to-pink-600"
          />
          <ResultSwot
            title="Threats"
            details={profileContent.threat ?? []}
            color="gradient-to-r from-pink-600 to-pink-600"
          />
        </div>
      </section>
    </>
  );
}
