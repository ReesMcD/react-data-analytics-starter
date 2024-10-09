import PageWrapper from "../../components/page-wrapper/PageWrapper";
import { usePlayerQuery } from "../../queries/usePlayerQuery/usePlayerQuery";
import { Route } from "../../routes/player.$playerId";

function PlayerPage(): React.ReactNode {
  const { playerId } = Route.useParams();
  const { data: player } = usePlayerQuery(playerId);

  return (
    <PageWrapper>
      <div
        className="flex justify-between items-center"
        data-testid="player-page"
      >
        <h1>Player: {player?.name}</h1>
      </div>
    </PageWrapper>
  );
}

export default PlayerPage;
