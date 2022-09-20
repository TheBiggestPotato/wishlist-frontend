import "./ListsComponent.css";
import List from "../ListItem/ListItem";

function ListsComponent(props) {
  const params = props.params;

  return (
    <ul className="public-data">
      {params.map((param, key) => {
        return (
          <li key={key}>
            <List
              description={param.details}
              title={param.name}
              href={`/lists/${param.id}`}
            ></List>
            <button
              className="delete-btn"
              id={param.id}
              onClick={props.onClick}
              type="button"
            >
              Delete List
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListsComponent;
