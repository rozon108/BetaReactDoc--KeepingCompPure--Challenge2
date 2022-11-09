import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

export default function Profile({ person }) {
  console.log(person.imageId);
  return (
    <Panel key={person.imageId}>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl({ person })}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
