import { ReactNode } from "react";
import "../css/Card.css";

interface Props {
  src: string;
  alt: string;
  name: string;
  address: string;
  description: string;
  children: ReactNode;
}

export default function Card({
  src,
  alt,
  name,
  address,
  description,
  children,
}: Props) {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h2 className="card-name">{name}</h2>
        <p className="card-address">{address}</p>
        <p className="card-description">{description}</p>
        {children}
      </div>
    </div>
  );
}
