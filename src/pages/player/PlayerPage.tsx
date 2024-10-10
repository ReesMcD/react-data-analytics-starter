import PageWrapper from "../../components/page-wrapper/PageWrapper";
import PlayerCard from "../../components/player-card/PlayerCard";
import { usePlayerQuery } from "../../queries/usePlayerQuery/usePlayerQuery";
import { Route } from "../../routes/player/$playerId";
import { NFLPlayer } from "../../types/NFLPlayer";

function PlayerPage(): React.ReactNode {
  const { playerId } = Route.useParams();
  const { data: player } = usePlayerQuery(playerId);

  return (
    <PageWrapper>
      <div className="flex justify-start">
        <div className="w-1/2">
          <PlayerCard player={player as NFLPlayer} />
        </div>
      </div>
    </PageWrapper>
  );
}

export default PlayerPage;
