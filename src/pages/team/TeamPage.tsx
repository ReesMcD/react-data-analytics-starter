import React from "react";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { Route } from "../../routes/team.$teamId";

function TeamPage(): React.ReactNode {
  const { teamId } = Route.useParams();

  return (
    <PageWrapper>
      <div
        className="flex justify-between items-center"
        data-testid="player-page"
      >
        <h1>Team: {teamId}</h1>
      </div>
    </PageWrapper>
  );
}

export default TeamPage;
