export interface Repository {
  id: number;
  name: string;
  language: string;
  owner: {
    login: string;
  };
  created_at: string;
  stargazers_count: number;
}
