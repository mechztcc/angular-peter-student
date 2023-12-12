export interface ITeam {
  id: number;
  name: string;
  members: [{ id: number; name: string; score: number }];
}
