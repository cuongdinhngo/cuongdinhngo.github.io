export interface Project {
  title: string
  description: string
  image: string
  /** When true the screenshot is contained (portrait/mobile shot) rather than cover-cropped. */
  contain?: boolean
  tech: string[]
  demo: string
  source: string
}

export const projects: Project[] = [
  {
    title: 'Book Management App',
    description:
      'To manage small libraries, this app allows users to add, edit, and delete books. It features a user-friendly interface built with VueJs and Nuxt, utilizing Supabase for backend services. Realtime notifications are implemented to keep the UI updated with the latest changes. The app is styled with Tailwind CSS for a modern look.',
    image: '/images/book-app.png',
    tech: ['Vue.js', 'Nuxt', 'Nuxt UI', 'Supabase', 'Tailwind CSS'],
    demo: 'https://cuongdinhngo.github.io/books-app/',
    source: 'https://github.com/cuongdinhngo/books-app',
  },
  {
    title: 'Ecom Fashion',
    description:
      'It provides a comprehensive solution for managing an online fashion store, including product listings, user profiles, and order management. The application is built with VueJs and Nuxt, utilizing Vuetify for UI components and Tauri for Mobile application capabilities.',
    image: '/images/ecom-fashion.png',
    contain: true,
    tech: ['Vue.js', 'Nuxt', 'Vuetify', 'Tauri'],
    demo: 'https://cuongdinhngo.github.io/ecom-fashion/profile/',
    source: 'https://github.com/cuongdinhngo/ecom-fashion',
  },
  {
    title: 'Berry Admin Dashboard',
    description:
      'Berry Admin Dashboard is a modern admin dashboard template built with VueJs and Nuxt. It features a clean and responsive design, making it suitable for various applications.',
    image: '/images/berry-dashboard.png',
    tech: ['Nuxt 3', 'Vuetify', 'VueJs', 'Mobile First'],
    demo: 'https://cuongdinhngo.github.io/berry-dashboard/ecom/products',
    source: 'https://github.com/cuongdinhngo/berry-dashboard',
  },
  {
    title: 'Advanced Dashboard Suite',
    description:
      'A versatile admin dashboard template designed for VueJs applications. Components included: Email/mailbox interface; Team calendar system; User profile management; Chat; Scrum board; Various charts and analytics',
    image: '/images/vex-dashboard.png',
    tech: ['Nuxt 3', 'Vuetify', 'VueJs', 'Mobile First'],
    demo: 'https://cuongdinhngo.github.io/vex-visurel/',
    source: 'https://github.com/cuongdinhngo/vex-visurel',
  },
]
