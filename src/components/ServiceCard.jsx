import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import Reveal from "./Reveal";


export default function ServiceCard({ service, index = 0 }) {
  return (
    <Reveal delay={(index % 4) * 0.08} className="card service-card">
      <div className="icon-box">
        <Icon name={service.icon} size={26} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link href={`/services#${service.id}`} className="card-link">
        Learn more <ArrowUpRight size={16} />
      </Link>
    </Reveal>
  );
}
