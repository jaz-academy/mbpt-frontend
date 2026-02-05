import { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";

type MbptScores = {
  vision: number;
  meaning: number;
  fear: number;
  validation: number;
};

type ChartProps = {
  scores?: MbptScores;
};

export default function MbptRadarChart({ scores }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!scores || !canvasRef.current) return;

    const chart = new ChartJS(canvasRef.current, {
      type: "radar",
      data: {
        labels: ["Vision", "Meaning", "Fear", "Validation"],
        datasets: [
          {
            label: "Motivasi",
            data: [
              scores.vision,
              scores.meaning,
              scores.fear,
              scores.validation,
            ],
          },
        ],
      },
      options: {
        scales: { r: { min: 0, max: 100 } },
        plugins: { legend: { display: false } },
      },
    });

    return () => chart.destroy();
  }, [scores]);

  return (
    <div className="w-full h-full bg-white/80 dark:bg-gray-800/70 rounded-3xl p-4 md:p-8 shadow flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 hidden lg:block">
        Motivations
      </h2>
      <div className="w-full h-full flex items-center justify-center">
        <canvas ref={canvasRef} className="max-w-full max-h-full" />
      </div>
    </div>
  );
}
