export interface EducationItem {
  year: string
  title: string
  subtitle: string
  description?: string
}

export const education: EducationItem[] = [
  {
    year: '2023 — 2026',
    title: 'Certified Developer – Associate',
    subtitle: 'AWS Training and Certification',
  },
  {
    year: '2022 — 2025',
    title: 'Certified Solutions Architect – Associate',
    subtitle: 'AWS Training and Certification',
  },
  {
    year: '2016 — 2019',
    title: 'Master of Computing Science',
    subtitle: 'Duy Tan University, Vietnam',
    description: 'Advanced studies in software engineering, data science, and computer algorithms.',
  },
  {
    year: '2010 — 2011',
    title: 'Bachelor of Information Technology',
    subtitle: 'Charles Sturt University, Australia',
    description:
      'Comprehensive foundation in computer science, programming, database management, and software development methodologies. Strong emphasis on practical application and industry standards.',
  },
  {
    year: 'May 2011',
    title: "Dean's Award",
    subtitle: 'Charles Sturt University, Australia',
    description: 'Awarded for exceptional academic achievements during the Bachelor of Information Technology program.',
  },
]
