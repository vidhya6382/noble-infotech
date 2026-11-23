"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "./SmartImage";

/**
 * Reusable project card.
 * Props: project = { title, category, description, result, image, tags, link }
 * `link` can point to a case-study page or external URL once the backend provides one.
 */
export default function ProjectCard({ project }) {
  const isExternal = project.link?.startsWith("http");

  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-media">
        <SmartImage src={project.image} alt={`${project.title} project`} />
        <div className="project-overlay">
          <span className="project-category">{project.category}</span>
          {project.isSample && <span className="sample-badge on-image">Sample</span>}
        </div>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.tags?.length > 0 && (
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
        <a
          href={project.link || "#"}
          className="btn btn-outline btn-sm"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          aria-label={`View project: ${project.title}`}
        >
          View Project <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
