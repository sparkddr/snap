import todoIcon from "../assets/images/icon-todo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";

const featureList = [
  {
    icon: todoIcon,
    title: "Todo List",
    description:
      "Keep track of everything your team needs to accomplish. Assign tasks, set priorities, and never miss a deadline.",
  },
  {
    icon: calendar,
    title: "Calendar",
    description:
      "Schedule meetings, set milestones, and manage your team's time with a shared calendar everyone can access.",
  },
  {
    icon: reminders,
    title: "Reminders",
    description:
      "Stay on top of important events with smart reminders. Get notified at the right time, every time.",
  },
  {
    icon: planning,
    title: "Planning",
    description:
      "Map out your projects from start to finish. Visualize timelines, dependencies, and deliverables at a glance.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
    <div className="bg-AlmostBlack p-3 rounded-xl">
      <img src={icon} alt={title} className="h-6 w-6 brightness-0 invert" />
    </div>
    <h3 className="text-AlmostBlack font-semibold text-xl">{title}</h3>
    <p className="text-MediumGray">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="max-w-5xl mx-auto px-5 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-AlmostBlack lg:text-4xl">
          Everything your team needs
        </h2>
        <p className="mt-4 text-MediumGray max-w-xl mx-auto">
          Snap brings together the tools you rely on every day into one seamless
          workspace. Less switching, more doing.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureList.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
