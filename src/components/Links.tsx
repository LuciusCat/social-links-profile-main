import "../css/Links.css";
interface Props {
  href: string;
  text: string;
}

export default function Links({ href, text }: Props) {
  return (
    <a className="btn-links" href={href} role="button">
      {text}
    </a>
  );
}
