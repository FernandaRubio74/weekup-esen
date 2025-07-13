const associations = [
  {
    id: 1,
    name: "Techo",
    acronym: "TECHO",
    category: "Social",
    description: "An organization present in Latin America and the Caribbean that seeks to overcome the poverty situation experienced by thousands of people in precarious settlements, through joint action of its inhabitants and young volunteers.",
    logo: "volunteer",
    email: "techo@esen.edu.sv",
    phone: "+503 2234-5600",
    socialMedia: {
      facebook: "@Techo.ESEN",
      instagram: "@techo_esen",
      twitter: "@Techo_ESEN"
    },
    objectives: [
      "Promote community development",
      "Denounce the situation of the most excluded communities",
      "Work actively to resolve poverty issues",
      "Engage society in recognizing poverty as a priority problem"
    ],
    activities: [
      "Community construction projects",
      "Volunteer training programs",
      "Awareness campaigns about poverty",
      "Community development initiatives"
    ],
    requirements: [
      "Be an active ESEN student",
      "Commitment to social work",
      "Participate in volunteer activities"
    ],
    tags: ["Social", "Community", "Volunteering"]
  },
  {
    id: 3,
    name: "AIESEC",
    acronym: "AIESEC",
    category: "Leadership",
    description: "Born in Holland in 1948, it is the largest youth organization for youth in the world. The AIESEC branch at ESEN provides experiences to university students through short and long-term exchanges around the world, including social or administrative internships.",
    logo: "business",
    email: "aiesec@esen.edu.sv",
    phone: "+503 2234-5602",
    socialMedia: {
      facebook: "@AIESEC.ESEN",
      instagram: "@aiesec_esen",
      twitter: "@AIESEC_ESEN"
    },
    objectives: [
      "Provide international exchange experiences",
      "Develop leadership skills",
      "Promote cultural understanding",
      "Organize national events"
    ],
    activities: [
      "International exchange programs",
      "Leadership training workshops",
      "Cultural exchange events",
      "National committee organizing"
    ],
    requirements: [
      "Be an active ESEN student",
      "Interest in international experiences",
      "Leadership potential",
      "Commitment to organizational activities"
    ],
    tags: ["International", "Leadership", "Exchange", "Culture"]
  },
  {
    id: 4,
    name: "ESENARTE",
    acronym: "ESENARTE",
    category: "Cultural",
    description: "An artistic-based student association that operates in five branches: theater, visual arts, singing, dance, and literature. It seeks to raise awareness about the value of voice through the development and promotion of creativity.",
    logo: "cultural",
    email: "esenarte@esen.edu.sv",
    phone: "+503 2234-5603",
    socialMedia: {
      facebook: "@ESENARTE.ESEN",
      instagram: "@esenarte_esen",
      twitter: "@ESENARTE_ESEN"
    },
    objectives: [
      "Develop and promote creativity",
      "Generate spaces for artistic and cultural expression",
      "Collaborate with other student associations",
      "Create artistic opportunities"
    ],
    activities: [
      "Theater productions",
      "Visual arts exhibitions",
      "Musical performances",
      "Dance presentations",
      "Literary events"
    ],
    requirements: [
      "Be an active ESEN student",
      "Interest in artistic expression",
      "Creative mindset",
      "Willingness to collaborate"
    ],
    tags: ["Arts", "Theater", "Music", "Dance", "Literature"]
  },
  {
    id: 5,
    name: "RAICES",
    acronym: "RAICES",
    category: "Social",
    description: "The Roots association seeks to raise awareness about environmental needs to ensure that its members and students become agents of change and apply all their knowledge for sustainable development in Salvadoran society.",
    logo: "sports",
    email: "raices@esen.edu.sv",
    phone: "+503 2234-5604",
    socialMedia: {
      facebook: "@Raices.ESEN",
      instagram: "@raices_esen",
      twitter: "@Raices_ESEN"
    },
    objectives: [
      "Raise environmental awareness",
      "Develop environmental agents of change",
      "Promote sustainable development",
      "Apply knowledge for environmental protection"
    ],
    activities: [
      "Environmental awareness campaigns",
      "Sustainability workshops",
      "Tree planting initiatives",
      "Recycling programs"
    ],
    requirements: [
      "Be an active ESEN student",
      "Environmental consciousness",
      "Commitment to sustainability",
      "Interest in environmental action"
    ],
    tags: ["Environment", "Sustainability", "Awareness", "Green"]
  },
  {
    id: 6,
    name: "HOPE",
    acronym: "HOPE",
    category: "Social",
    description: "An organization of university students committed to the fight against childhood cancer in El Salvador. They have decided to accept the challenge of positively impacting the lives of young patients and their families during their battle against cancer.",
    logo: "hope",
    email: "hope@esen.edu.sv",
    phone: "+503 2234-5605",
    socialMedia: {
      facebook: "@HOPE.ESEN",
      instagram: "@hope_esen",
      twitter: "@HOPE_ESEN"
    },
    objectives: [
      "Reduce treatment abandonment rates through educational material",
      "Bring messages of hope, struggle, love and solidarity",
      "Provide emotional support to children and families",
      "Raise awareness about childhood cancer reality"
    ],
    activities: [
      "Educational material creation",
      "Hospital visits",
      "Support group sessions",
      "Awareness campaigns about childhood cancer"
    ],
    requirements: [
      "Be an active ESEN student",
      "Sensitivity to work with children",
      "Commitment to health causes",
      "Emotional maturity"
    ],
    tags: ["Health", "Children", "Social", "Hope"]
  },
  {
    id: 7,
    name: "PASITOS",
    acronym: "PASITOS",
    category: "Social",
    description: "An association that represents the future for many children from El Matazano canton. It helps students from the school in that canton achieve academic success in mathematics and language areas; but most importantly, it supports them to dare to fulfill their dreams and believe they can achieve them.",
    logo: "debate",
    email: "pasitos@esen.edu.sv",
    phone: "+503 2234-5606",
    socialMedia: {
      facebook: "@Pasitos.ESEN",
      instagram: "@pasitos_esen",
      twitter: "@Pasitos_ESEN"
    },
    objectives: [
      "Help students achieve academic success",
      "Support children in mathematics and language",
      "Encourage children to pursue their dreams",
      "Provide educational support to rural communities"
    ],
    activities: [
      "Mathematics tutoring",
      "Language support classes",
      "Motivational workshops",
      "Educational material donations"
    ],
    requirements: [
      "Be an active ESEN student",
      "Good academic performance",
      "Patience for working with children",
      "Commitment to education"
    ],
    tags: ["Education", "Children", "Mathematics", "Language"]
  },
  {
    id: 8,
    name: "Rotaract Santa Tecla ESEN",
    acronym: "ROTARACT",
    category: "Social",
    description: "Rotaract is an organization with clubs around the world. The school branch is called Rotaract Santa Tecla ESEN. This initiative was born from a group of student friends at ESEN with the purpose of helping society with different projects.",
    logo: "volunteer",
    email: "rotaract@esen.edu.sv",
    phone: "+503 2234-5607",
    socialMedia: {
      facebook: "@Rotaract.SantaTecla.ESEN",
      instagram: "@rotaract_esen",
      twitter: "@Rotaract_ESEN"
    },
    objectives: [
      "Help society through various projects",
      "Develop leadership skills",
      "Promote community service",
      "Build lasting friendships"
    ],
    activities: [
      "Community service projects",
      "Fundraising events",
      "Leadership development workshops",
      "Inter-club meetings"
    ],
    requirements: [
      "Be an active ESEN student",
      "Commitment to service",
      "Leadership potential",
      "Teamwork skills"
    ],
    tags: ["Service", "Community", "Leadership", "Friendship"]
  },
  {
    id: 9,
    name: "Entrepreneurial Students Society",
    acronym: "SAE",
    category: "Business",
    description: "An organization where students meet with the objective of promoting, developing and supporting entrepreneurship within and outside ESEN through professional and personal development of members. It conducts activities that allow putting into practice skills, knowledge and teamwork.",
    logo: "cultural",
    email: "sae@esen.edu.sv",
    phone: "+503 2234-5608",
    socialMedia: {
      facebook: "@SAE.ESEN",
      instagram: "@sae_esen",
      twitter: "@SAE_ESEN"
    },
    objectives: [
      "Promote and develop entrepreneurship",
      "Support professional and personal development",
      "Practice skills and knowledge",
      "Create innovative project ideas"
    ],
    activities: [
      "Entrepreneurship workshops",
      "Business plan competitions",
      "Networking events",
      "Innovation projects"
    ],
    requirements: [
      "Be an active ESEN student",
      "Interest in entrepreneurship",
      "Creative thinking",
      "Business mindset"
    ],
    tags: ["Entrepreneurship", "Innovation", "Business", "Development"]
  },
  {
    id: 10,
    name: "ESEN Scholars and Alumni Association",
    acronym: "CRECE",
    category: "Social",
    description: "The ESEN Scholars and Alumni Association, CRECE, was born to provide more opportunities to ESEN students who need support to develop their studies comprehensively. This through collaboration in different programs and development of projects that benefit the student community.",
    logo: "volunteer",
    email: "crece@esen.edu.sv",
    phone: "+503 2234-5609",
    socialMedia: {
      facebook: "@CRECE.ESEN",
      instagram: "@crece_esen",
      twitter: "@CRECE_ESEN"
    },
    objectives: [
      "Provide opportunities to students needing support",
      "Develop projects benefiting the student community",
      "Create mentorship programs",
      "Support comprehensive student development"
    ],
    activities: [
      "Mentorship programs",
      "Scholarship support initiatives",
      "Academic support workshops",
      "Community development projects"
    ],
    requirements: [
      "Be an ESEN student or alumnus",
      "Commitment to helping others",
      "Academic excellence",
      "Leadership potential"
    ],
    tags: ["Scholarship", "Mentorship", "Academic", "Support"]
  },
  {
    id: 11,
    name: "ESEN Music Association",
    acronym: "ESENMUSIC",
    category: "Cultural",
    description: "The ESEN music association aims to develop the musical art of students with artistic vocation. ESENMUSIC has a musical group integrated by students who play different instruments or sing. The association supports charity events of different associations and also performs outside the school.",
    logo: "cultural",
    email: "esenmusic@esen.edu.sv",
    phone: "+503 2234-5610",
    socialMedia: {
      facebook: "@ESENMUSIC.ESEN",
      instagram: "@esenmusic_esen",
      twitter: "@ESENMUSIC_ESEN"
    },
    objectives: [
      "Develop musical art of students",
      "Support charity events",
      "Promote musical talent",
      "Perform in various venues"
    ],
    activities: [
      "Musical performances",
      "Charity concert support",
      "Music workshops",
      "External performances"
    ],
    requirements: [
      "Be an active ESEN student",
      "Musical talent or interest",
      "Commitment to practice",
      "Availability for performances"
    ],
    tags: ["Music", "Arts", "Performance", "Charity"]
  },
  {
    id: 12,
    name: "ESEN Alumni Association",
    acronym: "ALUMNI",
    category: "Alumni",
    description: "ALUMNI ESEN is the association of ESEN alumni, whose purpose is to keep them informed of job opportunities, postgraduate and doctoral programs, among others. It also offers the possibility of obtaining discounts at different establishments of affiliated companies.",
    logo: "hope",
    email: "alumni@esen.edu.sv",
    phone: "+503 2234-5611",
    socialMedia: {
      facebook: "@Alumni.ESEN",
      instagram: "@alumni_esen",
      twitter: "@Alumni_ESEN"
    },
    objectives: [
      "Keep alumni informed of opportunities",
      "Provide networking opportunities",
      "Offer benefits and discounts",
      "Support career development"
    ],
    activities: [
      "Job opportunity notifications",
      "Networking events",
      "Career development workshops",
      "Alumni reunions"
    ],
    requirements: [
      "Be an ESEN graduate",
      "Maintain updated contact information",
      "Professional conduct",
      "Commitment to ESEN values"
    ],
    tags: ["Alumni", "Networking", "Career", "Benefits"]
  },
  {
    id: 13,
    name: "TALK ESEN",
    acronym: "TALK",
    category: "Cultural",
    description: "TALK ESEN is an association born in 2019 with the objective of promoting language learning and practice. It seeks to provide tools and opportunities to children and youth to develop skills with languages they already know. Currently, its projects have focused on English.",
    logo: "sports",
    email: "talk@esen.edu.sv",
    phone: "+503 2234-5612",
    socialMedia: {
      facebook: "@TALK.ESEN",
      instagram: "@talk_esen",
      twitter: "@TALK_ESEN"
    },
    objectives: [
      "Promote language learning and practice",
      "Provide language development tools",
      "Expand academic and work opportunities",
      "Focus on English language skills"
    ],
    activities: [
      "English conversation clubs",
      "Language workshops",
      "Tutoring sessions",
      "Language exchange programs"
    ],
    requirements: [
      "Be an active ESEN student",
      "Interest in languages",
      "Communication skills",
      "Commitment to teaching/learning"
    ],
    tags: ["Languages", "English", "Education", "Communication"]
  },
  {
    id: 14,
    name: "Student Political Opinion Club",
    acronym: "COPE",
    category: "Politics",
    description: "The Student Political Opinion Club (COPE) is an initiative for formation, dialogue and reflection on reality, both national and international. It is an association that promotes student participation and offers a space for opinion about critical events of social and political conjuncture.",
    logo: "volunteer",
    email: "cope@esen.edu.sv",
    phone: "+503 2234-5613",
    socialMedia: {
      facebook: "@COPE.ESEN",
      instagram: "@cope_esen",
      twitter: "@COPE_ESEN"
    },
    objectives: [
      "Promote critical thinking in the student community",
      "Contribute to social development of the country",
      "Foster dialogue and reflection",
      "Provide space for political opinion"
    ],
    activities: [
      "Political analysis forums",
      "Current events discussions",
      "Guest speaker events",
      "Debate competitions"
    ],
    requirements: [
      "Be an active ESEN student",
      "Interest in politics and current events",
      "Critical thinking skills",
      "Respect for different opinions"
    ],
    tags: ["Politics", "Critical Thinking", "Debate", "Analysis"]
  },
  {
    id: 15,
    name: "Model United Nations ESEN",
    acronym: "MUN",
    category: "Academic",
    description: "MUN ESEN was born with the purpose of recreating the United Nations Model in Salvadoran territory, to enhance a culture of dialogue and debate in its student community and among different national and international educational institutions.",
    logo: "debate",
    email: "mun@esen.edu.sv",
    phone: "+503 2234-5614",
    socialMedia: {
      facebook: "@MUN.ESEN",
      instagram: "@mun_esen",
      twitter: "@MUN_ESEN"
    },
    objectives: [
      "Recreate the United Nations Model",
      "Enhance culture of dialogue and debate",
      "Connect with national and international institutions",
      "Organize high-profile events"
    ],
    activities: [
      "Model UN simulations",
      "International diplomacy workshops",
      "Debate competitions",
      "Networking with other institutions"
    ],
    requirements: [
      "Be an active ESEN student",
      "Interest in international relations",
      "Public speaking skills",
      "Commitment to event organization"
    ],
    tags: ["International", "Diplomacy", "Debate", "UN Model"]
  },
  {
    id: 16,
    name: "Student Council",
    acronym: "COUNCIL",
    category: "Academic",
    description: "The Student Council is not just any association. It is in charge of ensuring the correct development and improvement of the school in all its aspects, with the desire to be an active part of the student community. It is made up of year and course representatives, elected by secret ballot by the same student community.",
    logo: "volunteer",
    email: "consejo.est.esen@gmail.com",
    phone: "+503 2234-5615",
    socialMedia: {
      facebook: "@ConsejoEstudiantil.ESEN",
      instagram: "@consejo_esen",
      twitter: "@Consejo_ESEN"
    },
    objectives: [
      "Ensure correct development and improvement of the school",
      "Be active part of the student community",
      "Coordinate academic activities",
      "Promote leadership, ethics and excellence culture"
    ],
    activities: [
      "Student representation",
      "Academic activity coordination",
      "Communication between students and faculty",
      "Electoral process supervision"
    ],
    requirements: [
      "Be an active ESEN student",
      "Elected by student community",
      "Leadership skills",
      "Representative responsibilities"
    ],
    tags: ["Academic", "Leadership", "Representation", "Democracy"]
  }
];

export default associations;