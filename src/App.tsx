import { useEffect, useState } from "react";
import "./App.css";
import { Repository } from "./models/repository";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import Header from "./components/Header";

export default function App() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100`,
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.items);
        setRepos(response.items || []);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      {repos.length > 0 ? (
        <div className="container">
          <Table repos={repos.slice(page, page + 20)} />
          <Pagination page={page} setPage={setPage} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
