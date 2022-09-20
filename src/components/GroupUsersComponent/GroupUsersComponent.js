import "./GroupUsersComponent.css";

function GroupUsersComponent(props) {
  const params = props.params;

  return (
    <ul className="group-users-data">
      {params?.map((param, key) => {
        return (
          <li key={key}>
            <h2 className="users">{param}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default GroupUsersComponent;
