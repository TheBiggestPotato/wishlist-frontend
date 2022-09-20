import "./GroupComponent.css";
import Group from "../Group/Group";

function GroupComponent(props) {
  const params = props.params;

  return (
    <ul className="group-data">
      {params.map((param, key) => {
        return (
          <li key={key}>
            <Group
              description={param.details}
              title={param.name}
              id={param.id}
              onClick={props.onClick}
              href={`/groups/${param.id}`}
            ></Group>
            <button
              className={props.className}
              id={param.id}
              onClick={props.onClick}
              type="button"
            >
              Delete Group
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default GroupComponent;
