export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  time: string;
  location: string;
}

export interface Faculty {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
}

const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "University Announces New Research Grant for Sustainable Technologies",
    category: "Academic News",
    date: "May 25, 2026",
    excerpt: "A new $5 million grant has been awarded to the Faculty of Engineering to further research in sustainable energy solutions.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Fall 2026 Admissions: Application Deadlines Approaching",
    category: "Admissions",
    date: "May 20, 2026",
    excerpt: "Prospective students are reminded that the deadline for Fall 2026 undergraduate applications is fast approaching.",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Global Excellence Scholarship Winners Announced",
    category: "Scholarships",
    date: "May 18, 2026",
    excerpt: "We are proud to announce the 50 recipients of this year's Global Excellence Scholarships.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "Open Campus Day",
    date: "15",
    month: "JUN",
    time: "09:00 AM - 04:00 PM",
    location: "Main Campus Grounds",
  },
  {
    id: "2",
    title: "Annual Alumni Networking Gala",
    date: "22",
    month: "JUN",
    time: "06:30 PM - 09:30 PM",
    location: "University Grand Hall",
  },
  {
    id: "3",
    title: "Guest Lecture: The Future of AI in Education",
    date: "05",
    month: "JUL",
    time: "02:00 PM - 03:30 PM",
    location: "Science Building, Room 402",
  }
];

const mockFaculties: Faculty[] = [
  { id: "1", name: "Business Administration", description: "Degrees in Int. Business, Management, FinTech, Accounting, and Digital Marketing.", iconName: "Briefcase" },
  { id: "2", name: "Law", description: "Providing comprehensive education in Public Law, Private Law, and Int. Relations.", iconName: "Scale" },
  { id: "3", name: "Arts & Humanities", description: "Programs in English for Communication, Translation, and Khmer Literature.", iconName: "BookOpen" },
  { id: "4", name: "Agriculture", description: "Fostering sustainable practices in Agronomy, Food Processing, and Rural Development.", iconName: "GraduationCap" },
  { id: "5", name: "Science and Technology", description: "At the forefront of Data Science, AI, and Cyber-network Security.", iconName: "Monitor" },
  { id: "6", name: "Engineering", description: "Rigorous disciplines in Civil, Electrical, and Electronic Engineering.", iconName: "Cog" },
];

const mockStats: Statistic[] = [
  { id: "1", label: "Nationwide Campuses", value: "6" },
  { id: "2", label: "Academic Colleges", value: "7" },
  { id: "3", label: "Degree Programs", value: "40+" },
  { id: "4", label: "International Partners", value: "25+" },
];

export async function fetchNews(): Promise<NewsItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 800);
  });
}

export async function fetchEvents(): Promise<EventItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockEvents), 600);
  });
}

export async function fetchFaculties(): Promise<Faculty[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockFaculties), 500);
  });
}

export async function fetchStatistics(): Promise<Statistic[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockStats), 400);
  });
}
