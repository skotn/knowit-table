import "./Pagination.css";

export default function Pagination(props: {
  page: number;
  setPage: (page: number) => void;
}) {
  const incrementPage = () => {
    if (props.page + 20 < 100) {
      props.setPage(props.page + 20);
    }
  };

  const decrementPage = () => {
    if (props.page - 20 >= 0) {
      props.setPage(props.page - 20);
    }
  };
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={decrementPage}
        disabled={props.page - 20 < 0}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={incrementPage}
        disabled={props.page + 20 > 99}
      >
        Next
      </button>
    </div>
  );
}
