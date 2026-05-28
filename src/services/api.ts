export interface Translatable {
  english: string;
  khmer: string;
}

export interface NewsItem {
  id: string;
  title: Translatable;
  category: Translatable;
  date: Translatable;
  excerpt: Translatable;
  imageUrl?: string;
}

export interface EventItem {
  id: string;
  title: Translatable;
  date: string;
  month: Translatable;
  time: string;
  location: Translatable;
}

export interface Faculty {
  id: string;
  name: Translatable;
  description: Translatable;
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
    title: { english: "University Announces New Research Grant for Sustainable Technologies", khmer: "សាកលវិទ្យាល័យប្រកាសផ្តល់មូលនិធិស្រាវជ្រាវថ្មីសម្រាប់បច្ចេកវិទ្យាចីរភាព" },
    category: { english: "Academic News", khmer: "ព័ត៌មានសិក្សាធិការ" },
    date: { english: "May 25, 2026", khmer: "២៥ ឧសភា ២០២៦" },
    excerpt: { english: "A new $5 million grant has been awarded to the Faculty of Engineering to further research in sustainable energy solutions.", khmer: "មូលនិធិថ្មីចំនួន ៥ លានដុល្លារត្រូវបានផ្តល់ជូនមហាវិទ្យាល័យវិស្វកម្មដើម្បីបន្តការស្រាវជ្រាវលើដំណោះស្រាយថាមពលប្រកបដោយចីរភាព។" },
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: { english: "Fall 2026 Admissions: Application Deadlines Approaching", khmer: "ការចុះឈ្មោះចូលរៀនឆ្នាំ ២០២៦៖ ជិតដល់ថ្ងៃផុតកំណត់ហើយ" },
    category: { english: "Admissions", khmer: "ការចុះឈ្មោះចូលរៀន" },
    date: { english: "May 20, 2026", khmer: "២០ ឧសភា ២០២៦" },
    excerpt: { english: "Prospective students are reminded that the deadline for Fall 2026 undergraduate applications is fast approaching.", khmer: "សូមរំលឹកដល់សិស្សានុសិស្សថា ថ្ងៃផុតកំណត់សម្រាប់ការដាក់ពាក្យចូលរៀនថ្នាក់បរិញ្ញាបត្រឆ្នាំ២០២៦ ជិតឈានចូលមកដល់ហើយ។" },
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: { english: "Global Excellence Scholarship Winners Announced", khmer: "ប្រកាសអ្នកទទួលអាហារូបករណ៍ឧត្តមភាពសកល" },
    category: { english: "Scholarships", khmer: "អាហារូបករណ៍" },
    date: { english: "May 18, 2026", khmer: "១៨ ឧសភា ២០២៦" },
    excerpt: { english: "We are proud to announce the 50 recipients of this year's Global Excellence Scholarships.", khmer: "យើងមានមោទនភាពប្រកាសអ្នកទទួលអាហារូបករណ៍ឧត្តមភាពសកលចំនួន ៥០ នាក់ប្រចាំឆ្នាំនេះ។" },
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const mockEvents: EventItem[] = [
  {
    id: "1",
    title: { english: "Open Campus Day", khmer: "ទិវាបើកទ្វារវិទ្យាស្ថាន" },
    date: "15",
    month: { english: "JUN", khmer: "មិថុនា" },
    time: "09:00 AM - 04:00 PM",
    location: { english: "Main Campus Grounds", khmer: "បរិវេណសាខាធំ" },
  },
  {
    id: "2",
    title: { english: "Annual Alumni Networking Gala", khmer: "កម្មវិធីជួបជុំអតីតនិស្សិតប្រចាំឆ្នាំ" },
    date: "22",
    month: { english: "JUN", khmer: "មិថុនា" },
    time: "06:30 PM - 09:30 PM",
    location: { english: "University Grand Hall", khmer: "សាលធំសាកលវិទ្យាល័យ" },
  },
  {
    id: "3",
    title: { english: "Guest Lecture: The Future of AI in Education", khmer: "បាឋកថា៖ អនាគតនៃបញ្ញាសិប្បនិម្មិតក្នុងវិស័យអប់រំ" },
    date: "05",
    month: { english: "JUL", khmer: "កក្កដា" },
    time: "02:00 PM - 03:30 PM",
    location: { english: "Science Building, Room 402", khmer: "អគារវិទ្យាសាស្ត្រ បន្ទប់ ៤០២" },
  }
];

const mockFaculties: Faculty[] = [
  { id: "1", name: { english: "Business Administration", khmer: "គ្រប់គ្រងពាណិជ្ជកម្ម" }, description: { english: "Degrees in Int. Business, Management, FinTech, Accounting, and Digital Marketing.", khmer: "បរិញ្ញាបត្រពាណិជ្ជកម្មអន្តរជាតិ គ្រប់គ្រង ហិរញ្ញវត្ថុ គណនេយ្យ និងទីផ្សារឌីជីថល។" }, iconName: "Briefcase" },
  { id: "2", name: { english: "Law", khmer: "នីតិសាស្ត្រ" }, description: { english: "Providing comprehensive education in Public Law, Private Law, and Int. Relations.", khmer: "ផ្តល់ការអប់រំទូលំទូលាយលើច្បាប់សាធារណៈ ច្បាប់ឯកជន និងទំនាក់ទំនងអន្តរជាតិ។" }, iconName: "Scale" },
  { id: "3", name: { english: "Arts, Humanities & Foreign Languages", khmer: "សិល្បៈ មនុស្សសាស្ត្រ និងភាសាបរទេស" }, description: { english: "Programs in English for Communication, Translation, and Khmer Literature.", khmer: "កម្មវិធីភាសាអង់គ្លេសសម្រាប់ការទំនាក់ទំនង ការបកប្រែ និងអក្សរសាស្ត្រខ្មែរ។" }, iconName: "BookOpen" },
  { id: "4", name: { english: "Agriculture", khmer: "កសិកម្ម" }, description: { english: "Fostering sustainable practices in Agronomy, Food Processing, and Rural Development.", khmer: "ជំរុញការអនុវត្តប្រកបដោយចីរភាពផ្នែកកសិកម្ម កែច្នៃអាហារ និងអភិវឌ្ឍន៍ជនបទ។" }, iconName: "GraduationCap" },
  { id: "5", name: { english: "Science and Technology", khmer: "វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា" }, description: { english: "At the forefront of Data Science, AI, and Cyber-network Security.", khmer: "ឈានមុខគេផ្នែកវិទ្យាសាស្ត្រទិន្នន័យ បញ្ញាសិប្បនិម្មិត និងសន្តិសុខបណ្តាញ។" }, iconName: "Monitor" },
  { id: "6", name: { english: "Engineering", khmer: "វិស្វកម្ម" }, description: { english: "Rigorous disciplines in Civil, Electrical, and Electronic Engineering.", khmer: "ជំនាញវិស្វកម្មសំណង់ស៊ីវិល អគ្គិសនី និងអេឡិចត្រូនិកកម្រិតខ្ពស់។" }, iconName: "Cog" },
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
