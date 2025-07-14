export interface Service {
  title: string
  description: string
  category: 'web' | 'mobile' | 'design' | 'consulting'
  detailedDescription: string
  icon: string
  features: string[]
  technologies: string[]
  methodologies: string[]
  price: string
  cta: string
}

export const services: Service[] = [
  {
    title: 'Développement Web',
    description: 'Applications web performantes et évolutives',
    category: 'web',
    detailedDescription: `Notre expertise en développement web couvre toutes les étapes de votre projet, de la conception initiale au déploiement. Nous utilisons les dernières technologies pour créer des applications web rapides, sécurisées et évolutives qui répondent précisément à vos besoins.`,
    icon: '/icons/web-dev.svg',
    features: [
      'Sites Web Responsifs',
      'Applications Web Progressives (PWA)',
      'Interfaces Utilisateur Modernes',
      'Optimisation SEO',
      'Intégration API',
      'Performance et Sécurité'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL'],
    methodologies: ['Agile', 'DevOps', 'CI/CD'],
    price: 'À partir de 5000 $',
    cta: 'Commencer un projet'
  },
  {
    title: 'Applications Mobiles',
    description: 'Solutions mobiles natives et multiplateformes',
    category: 'mobile',
    detailedDescription: `Nous développons des applications mobiles natives et multiplateformes qui offrent une expérience utilisateur exceptionnelle. Notre approche combine performance, design intuitif et fonctionnalités innovantes pour créer des applications qui se démarquent sur l'App Store et Google Play.`,
    icon: '/icons/mobile-dev.svg',
    features: [
      'Applications iOS & Android',
      'Solutions Cross-Platform',
      'Design UX/UI Mobile',
      'Intégration Services Cloud',
      'Analytics et Monitoring',
      'Support Continu'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    methodologies: ['Mobile First', 'Agile', 'CI/CD'],
    price: 'À partir de 8000 $',
    cta: 'Développer votre app'
  },
  {
    title: 'Design UX/UI',
    description: 'Expériences utilisateur intuitives et esthétiques',
    category: 'design',
    detailedDescription: `Notre approche du design UX/UI combine créativité et méthodologie. Nous créons des interfaces utilisateur qui non seulement sont belles, mais qui améliorent également l'engagement et la satisfaction des utilisateurs grâce à une expérience fluide et intuitive.`,
    icon: '/icons/ux-design.svg',
    features: [
      'Recherche Utilisateur',
      'Wireframing & Prototypage',
      'Design System',
      'Tests Utilisateurs',
      'Design Responsive',
      'Design d&apos;Interaction'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    methodologies: ['Design Thinking', 'Atomic Design', 'User-Centered Design'],
    price: 'À partir de 3000 $',
    cta: 'Explorer le design'
  },
  {
    title: 'Consultation',
    description: 'Expertise technique et conseil stratégique',
    category: 'consulting',
    detailedDescription: `Nos services de consultation vous aident à naviguer dans la transformation numérique de votre entreprise. Nous fournissons des conseils stratégiques, des audits techniques et des recommandations personnalisées pour optimiser vos processus et technologies.`,
    icon: '/icons/consulting.svg',
    features: [
      'Audit Technique',
      'Architecture Solution',
      'Optimisation Performance',
      'Sécurité & Conformité',
      'Formation Équipe',
      'Support Technique'
    ],
    technologies: ['Architecture Cloud', 'DevOps', 'Sécurité', 'Performance', 'Accessibilité'],
    methodologies: ['ITIL', 'Lean', 'Six Sigma'],
    price: 'À partir de 150 $/h',
    cta: 'Réserver une consultation'
  }
]

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Directrice Marketing",
    company: "TechPro Solutions",
    image: "/testimonials/marie.jpg",
    quote: "L'équipe de développement web a transformé notre vision en une plateforme exceptionnelle qui a dépassé nos attentes. Leur expertise technique et leur approche professionnelle ont fait toute la différence.",
    service: "Développement Web"
  },
  {
    id: 2,
    name: "Lucas Martin",
    role: "CEO",
    company: "InnoApp",
    image: "/testimonials/lucas.jpg",
    quote: "Notre application mobile a connu un succès immédiat grâce à leur approche centrée sur l'utilisateur et leur excellence technique. Un partenaire de confiance pour l'innovation mobile.",
    service: "Applications Mobiles"
  },
  {
    id: 3,
    name: "Sophie Tremblay",
    role: "Product Owner",
    company: "DesignFlow",
    image: "/testimonials/sophie.jpg",
    quote: "Le processus de design UX/UI était remarquablement structuré et créatif. L'équipe a su capturer l'essence de notre marque tout en créant une interface utilisateur exceptionnelle.",
    service: "Design UX/UI"
  },
  {
    id: 4,
    name: "Pierre Lefebvre",
    role: "CTO",
    company: "DataSphere",
    image: "/testimonials/pierre.jpg",
    quote: "Leur expertise en consultation nous a permis de moderniser notre infrastructure technologique de manière efficace et durable. Un impact mesurable sur notre productivité.",
    service: "Consultation"
  }
]

export interface ServiceCategory {
  id: 'all' | 'web' | 'mobile' | 'design' | 'consulting'
  name: string
  description: string
}

export const categories: ServiceCategory[] = [
  {
    id: 'all',
    name: 'Tous les services',
    description: 'Découvrez l&apos;ensemble de nos services numériques'
  },
  {
    id: 'web',
    name: 'Web',
    description: 'Applications et sites web modernes'
  },
  {
    id: 'mobile',
    name: 'Mobile',
    description: 'Applications iOS et Android'
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Design UX/UI et expérience utilisateur'
  },
  {
    id: 'consulting',
    name: 'Consultation',
    description: 'Expertise technique et stratégique'
  }
]

export interface ServiceComparison {
  feature: string
  'Développement Web': string
  'Applications Mobiles': string
  'Design UX/UI': string
  'Consultation': string
}

export const serviceComparisons: ServiceComparison[] = [
  {
    feature: 'Délai de livraison',
    'Développement Web': '6-12 semaines',
    'Applications Mobiles': '12-16 semaines',
    'Design UX/UI': '4-8 semaines',
    'Consultation': 'En continu'
  },
  {
    feature: 'Support technique',
    'Développement Web': '12 mois',
    'Applications Mobiles': '12 mois',
    'Design UX/UI': '3 mois',
    'Consultation': 'Durée du contrat'
  },
  {
    feature: 'Mises à jour',
    'Développement Web': 'Trimestrielles',
    'Applications Mobiles': 'Mensuelles',
    'Design UX/UI': 'Sur demande',
    'Consultation': 'N/A'
  },
  {
    feature: 'Niveau de personnalisation',
    'Développement Web': 'Complet',
    'Applications Mobiles': 'Complet',
    'Design UX/UI': 'Complet',
    'Consultation': 'Sur mesure'
  },
  {
    feature: 'Analytics inclus',
    'Développement Web': 'Oui',
    'Applications Mobiles': 'Oui',
    'Design UX/UI': 'Limité',
    'Consultation': 'Personnalisé'
  }
]
