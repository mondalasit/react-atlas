import HealthScoreCard
from "./HealthScoreCard";

import InsightsAccordion
from "./InsightsAccordion";

import CircularDependenciesAccordion
from "./CircularDependenciesAccordion";

import RouteDiscoveryAccordion
  from "./RouteDiscoveryAccordion";

interface Props {

  analysis: any;

}

export default function DashboardSidebar({
  analysis,
}: Props) {

  return (

    <div className="space-y-4">
      <RouteDiscoveryAccordion
  routes={analysis.routes}
/>

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