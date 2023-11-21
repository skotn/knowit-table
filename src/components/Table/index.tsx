import "./Table.css";
import { Repository } from "../../models/repository";
import { format } from "date-fns";

export default function Table(props: { repos: Repository[] }) {
  //can be moved to seperate util file
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "yyyy-MM-dd");
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th className="hide-on-small-screen">Creator</th>
          <th>Created</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map((repo) => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td className="hide-on-small-screen">{repo.owner.login}</td>
            <td>{formatDate(repo.created_at)}</td>
            <td>{repo.stargazers_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
