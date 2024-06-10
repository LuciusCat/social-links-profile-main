import "./index.css";
import Card from "./components/Card";
import { user1 } from "./data/users";
import Links from "./components/Links";
import { socialLinks } from "./data/socialLinks";

function App() {
  return (
    <>
      <Card
        src={user1.src}
        alt={user1.alt}
        name={user1.name}
        address={user1.address}
        description={user1.description}
      >
        <Links href={socialLinks.github} text="GitHub" />

        <Links href={socialLinks.frontMentor} text="Frontend Mentor" />

        <Links href={socialLinks.linkedin} text="Linkedin" />

        <Links href={socialLinks.twitter} text="Twitter" />

        <Links href={socialLinks.instagram} text="Instagram" />
      </Card>
    </>
  );
}

export default App;
