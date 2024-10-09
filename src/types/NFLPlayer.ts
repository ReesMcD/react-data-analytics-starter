export interface NFLPlayer {
  id: string;
  name: string;
  team_id: string;
  number: number;
  position: string;
  college: string;
  stats: Record<string, number>;
  skills: Record<string, number>;
}
