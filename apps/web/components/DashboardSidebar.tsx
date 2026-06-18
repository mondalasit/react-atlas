import HealthScoreCard
from "./HealthScoreCard";

import InsightsAccordion
from "./InsightsAccordion";

import CircularDependenciesAccordion
from "./CircularDependenciesAccordion";

interface Props {

  analysis: any;

}

export default function DashboardSidebar({
  analysis,
}: Props) {

  return (

    <div className="space-y-4">

      <HealthScoreCard
        score={
          analysis.insights
            .healthScore
            .score
        }
        status={
          analysis.insights
            .healthScore
            .status
        }
      />

      <InsightsAccordion
        insights={
          analysis.insights
        }
      />

      <CircularDependenciesAccordion
        cycles={
          analysis.circularDependencies
        }
      />

    </div>

  );

}