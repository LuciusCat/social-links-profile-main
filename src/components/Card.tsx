import "../index.css";

interface Props {
  src: string;
  alt: string;
  name: string;
  address: string;
  description: string;
}

export default function Card({ src, alt, name, address, description }: Props) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-name">{name}</h5>
        <p className="card-address">{address}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
