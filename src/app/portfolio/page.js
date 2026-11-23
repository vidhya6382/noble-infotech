import PageHeader from "@/components/PageHeader";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/CTASection";
import { getProjects } from "@/lib/api";
import { projectCategories } from "@/data/projects";
import { stats } from "@/data/site";

export const metadata = {
  title: "Portfolio",
  description: "Projects by Noble Infotech across software, websites, Meta Ads, reels, SEO and branding.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>

      <section className="section-sm">
        <div className="container">
          <StatsCounter stats={stats} />
        </div>
      </section>

      <CTASection title="Have a Project in Mind?" />
    </>
  );
}
