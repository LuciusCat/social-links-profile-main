import "./index.css";
import Card from "./components/Card";
import { user1 } from "./data/users";

function App() {
  return (
    <>
      <h1>
        <Card
          src={user1.src}
          alt={user1.alt}
          name={user1.name}
          address={user1.address}
          description={user1.description}
        />
      </h1>
    </>
  );
}

export default App;
