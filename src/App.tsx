import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./components/Home";
import ExperienceCard from "./components/ExperienceCard";
import ToolCard from "./components/ToolCard";
import EducationSection from "./components/EducationSection";
import ResumeSection from "./components/ResumeSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import AchievementsSection from "./components/AchievementsSection";

import { EXPERIENCES, EDUCATION, RESUME_LINK, PERSONAL_PROJECTS, OTHER_PROJECTS, TOOL_SECTIONS, AWARDS } from "./data/content";

function App() {
  return (
    <>
      <Helmet>
        <title>Ramees | Backend Developer</title>
        <meta
          name="description"
          content="Portfolio of Ramees - Backend Developer specializing in Node.js, TimescaleDB, JanusGraph, and cloud-native systems."
        />
      </Helmet>

      <Header />

      <main>
        <Section id="home">
          <Home />
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-6">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>
        </Section>

        <Section id="tools" title="Tools & Tech">
          <div className="space-y-6 sm:space-y-8">
            {TOOL_SECTIONS.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{group.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {group.items.map((tool: any, i: number) => (
                    <ToolCard key={`${gi}-${i}`} name={tool.name} iconUrl={tool.iconUrl} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="personal-projects" title="Personal Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PERSONAL_PROJECTS.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>

        <Section id="other-projects" title="Other Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {OTHER_PROJECTS.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements & Awards">
          <AchievementsSection items={AWARDS} />
        </Section>

        <Section id="education" title="Education">
          <EducationSection items={EDUCATION} />
        </Section>

        <Section id="resume" title="Resume">
          <ResumeSection resumeLink={RESUME_LINK} />
        </Section>

        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App;
