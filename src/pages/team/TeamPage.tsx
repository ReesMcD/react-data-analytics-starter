import React from "react";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { useTeamQuery } from "../../queries/useTeamQuery/useTeamQuery";
import { Route } from "../../routes/team/$teamId.lazy";

function TeamPage(): React.ReactNode {
  const { teamId } = Route.useParams();
  const { data: team } = useTeamQuery(teamId);

  return (
    <PageWrapper>
      <div
        className="flex justify-between items-center"
        data-testid="player-page"
      >
        <h1>Team: {team?.name}</h1>
      </div>
    </PageWrapper>
  );
}

export default TeamPage;
