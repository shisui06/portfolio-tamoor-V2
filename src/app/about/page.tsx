// Page "À propos" (route "/about")
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { LogoCarousel } from "@/components/logo-carousel";

export default function About() {
  const aboutText = "Je suis un développeur web débutant, passionné par la création d'applications web interactives. J'aime apprendre de nouvelles technologies et m'adapter rapidement à différents environnements de travail. J'ai déjà participé à des projets en équipe, ce qui m'a permis de découvrir les méthodes agiles comme Scrum et Kanban pour organiser le travail et livrer des fonctionnalités de manière continue. Je suis motivé par l'idée de relever de nouveaux défis et de travailler avec des équipes dynamiques pour créer des solutions web utiles. Mon objectif est de continuer à apprendre et de contribuer activement aux projets auxquels je participe.";

  const timelineData = [
    {
      title: "ADT",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Représentant du service clientèle 2016 - 2024
          </p>
          <p className="mb-4">
            - Diagnostiquer les problèmes avec le système d&apos;alarme ainsi que les produits d&apos;automatisation
          </p>
          <p className="mb-4">
            - Résoudre le problème le plus rapidement possible et offrir une expérience client extraordinaire
          </p>
          <p className="mb-4">
            - Travailler efficacement et en étroite collaboration avec plusieurs services et faire preuve de leadership
          </p>
          <p>
            - Prendre rendez-vous pour les techniciens sur la route
          </p>
        </div>
      ),
    },
    {
      title: "Garderie Educative Joliette",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Adjointe Administrative 2012-2015
          </p>
          <p className="mb-4">
            - Accueillir les nouveaux parents de manière professionnelle et atteindre le taux d&apos;occupation
          </p>
          <p className="mb-4">
            - Préparer des documents administratifs de qualité et effectuer des dépôts bancaires
          </p>
          <p className="mb-4">
            - Entretenir le bâtiment et s&apos;assurer que les locaux sont sécuritaires et propres prêts à être inspectés
          </p>
          <p>
            - Assurer le bon fonctionnement de la garderie et mettre en œuvre un plan d&apos;action réussi selon les normes du ministre de la Famille
          </p>
        </div>
      ),
    },
    {
      title: "Bestbuy",
      content: (
        <div className="text-base">
          <p className="font-bold mb-4">
            Représentant du service clientèle 2010-2011
          </p>
          <p className="mb-4">
            - Vendre des appareils électroniques et cellulaires
          </p>
          <p className="mb-4">
            - Aidez les gens à choisir les forfaits adaptés à leurs téléphones portables
          </p>
          <p className="mb-4">
            - Proposer les avantages apportés par l&apos;entreprise et répondre aux objectifs de vente
          </p>
        </div>
      ),
    },
  ];

  const logos = [
    {
      name: "HTML",
      id: 1,
      img: "/images/stackicon/html.svg",
    },
    {
      name: "CSS",
      id: 2,
      img: "/images/stackicon/css.png",
    },
    {
      name: "JavaScript",
      id: 3,
      img: "/images/stackicon/js.png",
    },
    {
      name: "React",
      id: 4,
      img: "/images/stackicon/react.png",
    },
    {
      name: "Next.js",
      id: 5,
      img: "/images/stackicon/next.js.svg",
    },
    {
      name: "Tailwind CSS",
      id: 6,
      img: "/images/stackicon/tailwind.png",
    },
    {
      name: "MongoDB",
      id: 7,
      img: "/images/stackicon/mongodb.svg",
    },
    {
      name: "MySQL",
      id: 8,
      img: "/images/stackicon/mysql.svg",
    },
    {
      name: "Figma",
      id: 9,
      img: "/images/stackicon/figma.svg",
    },
    {
      name: "Linux",
      id: 10,
      img: "/images/stackicon/linux.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">À propos de moi</h1>
        <TextGenerateEffect
          words={aboutText}
          className="text-lg text-white mb-12"
          duration={0.5} // Adjust speed as needed
        />
        <h2 className="text-5xl font-bold text-white mb-8">Mon Parcours</h2>
        <Timeline data={timelineData} />
        <LogoCarousel logos={logos} />
      </div>
    </div>
  );
}



