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
  content?: Translatable;
  imageUrl?: string;
}

export interface EventItem {
  id: string;
  title: Translatable;
  slug: string;
  startDate: string;
  endDate: string;
  location: Translatable;
  isVirtual: boolean;
  virtualLink?: string;
  description?: Translatable;
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
    content: { 
      english: "<p>The Asian Institute of Cambodia is proud to announce a new <strong>$5 million grant</strong> awarded to the Faculty of Engineering.</p><h3>Key Objectives:</h3><ul><li>Develop sustainable energy solutions</li><li>Enhance smart grid technologies</li><li>Promote green building practices</li></ul>", 
      khmer: "<p>វិទ្យាស្ថានអាស៊ីកម្ពុជាមានមោទនភាពក្នុងការប្រកាសពីមូលនិធិថ្មីចំនួន <strong>៥ លានដុល្លារ</strong> ដែលត្រូវបានផ្តល់ជូនមហាវិទ្យាល័យវិស្វកម្ម។</p><h3>គោលបំណងសំខាន់ៗ៖</h3><ul><li>អភិវឌ្ឍដំណោះស្រាយថាមពលប្រកបដោយចីរភាព</li><li>ពង្រឹងបច្ចេកវិទ្យាបណ្តាញអគ្គិសនីឆ្លាតវៃ</li><li>លើកកម្ពស់ការអនុវត្តអគារបៃតង</li></ul>" 
    },
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: { english: "Fall 2026 Admissions: Application Deadlines Approaching", khmer: "ការចុះឈ្មោះចូលរៀនឆ្នាំ ២០២៦៖ ជិតដល់ថ្ងៃផុតកំណត់ហើយ" },
    category: { english: "Admissions", khmer: "ការចុះឈ្មោះចូលរៀន" },
    date: { english: "May 20, 2026", khmer: "២០ ឧសភា ២០២៦" },
    excerpt: { english: "Prospective students are reminded that the deadline for Fall 2026 undergraduate applications is fast approaching.", khmer: "សូមរំលឹកដល់សិស្សានុសិស្សថា ថ្ងៃផុតកំណត់សម្រាប់ការដាក់ពាក្យចូលរៀនថ្នាក់បរិញ្ញាបត្រឆ្នាំ២០២៦ ជិតឈានចូលមកដល់ហើយ។" },
    content: {
      english: "<p>Prospective students are reminded that the deadline for Fall 2026 undergraduate applications is fast approaching.</p><p>Please ensure all documents are submitted via the <a href='/apply' class='text-primary underline'>online portal</a>.</p>",
      khmer: "<p>សូមរំលឹកដល់សិស្សានុសិស្សថា ថ្ងៃផុតកំណត់សម្រាប់ការដាក់ពាក្យចូលរៀនថ្នាក់បរិញ្ញាបត្រឆ្នាំ២០២៦ ជិតឈានចូលមកដល់ហើយ។</p><p>សូមប្រាកដថាឯកសារទាំងអស់ត្រូវបានបញ្ជូនតាមរយៈ <a href='/apply' class='text-primary underline'>ប្រព័ន្ធអនឡាញ</a>។</p>"
    },
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: { english: "Global Excellence Scholarship Winners Announced", khmer: "ប្រកាសអ្នកទទួលអាហារូបករណ៍ឧត្តមភាពសកល" },
    category: { english: "Scholarships", khmer: "អាហារូបករណ៍" },
    date: { english: "May 18, 2026", khmer: "១៨ ឧសភា ២០២៦" },
    excerpt: { english: "We are proud to announce the 50 recipients of this year's Global Excellence Scholarships.", khmer: "យើងមានមោទនភាពប្រកាសអ្នកទទួលអាហារូបករណ៍ឧត្តមភាពសកលចំនួន ៥០ នាក់ប្រចាំឆ្នាំនេះ។" },
    content: {
      english: "<p>We are proud to announce the 50 recipients of this year's Global Excellence Scholarships.</p><p>Congratulations to all the winners! You can view the full list <a href='/scholarships' class='text-primary underline'>here</a>.</p>",
      khmer: "<p>យើងមានមោទនភាពប្រកាសអ្នកទទួលអាហារូបករណ៍ឧត្តមភាពសកលចំនួន ៥០ នាក់ប្រចាំឆ្នាំនេះ។</p><p>សូមអបអរសាទរដល់អ្នកឈ្នះទាំងអស់! អ្នកអាចមើលបញ្ជីឈ្មោះពេញលេញ <a href='/scholarships' class='text-primary underline'>នៅទីនេះ</a>។</p>"
    },
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

const mockEvents: EventItem[] = [
  {
    id: "1",
    title: { english: "Open Campus Day", khmer: "ទិវាបើកទ្វារវិទ្យាស្ថាន" },
    slug: "open-campus-day",
    startDate: "2026-06-15T09:00",
    endDate: "2026-06-15T16:00",
    location: { english: "Main Campus Grounds", khmer: "បរិវេណសាខាធំ" },
    isVirtual: false,
    description: {
      english: "Join us for this exciting event to gain new experiences and knowledge sharing from our guest speakers. This event is open to all students and the general public.<br/><br/><h3><strong>Event Agenda</strong></h3><ul><li>Registration and Welcome</li><li>Opening Remarks</li><li>Knowledge Sharing Session</li><li>Q&A Session</li></ul>",
      khmer: "សូមអញ្ជើញចូលរួមកម្មវិធីនេះដើម្បីទទួលបានបទពិសោធន៍ថ្មីៗ និងការចែករំលែកចំណេះដឹងពីវាគ្មិនកិត្តិយស។ កម្មវិធីនេះបើកទូលាយសម្រាប់សិស្ស និស្សិត និងសាធារណជនទូទៅ។<br/><br/><h3><strong>របៀបវារៈកម្មវិធី</strong></h3><ul><li>ការចុះឈ្មោះ និងការស្វាគមន៍</li><li>សុន្ទរកថាបើកកម្មវិធី</li><li>វគ្គចែករំលែកបទពិសោធន៍</li><li>សំណួរ និងចម្លើយ</li></ul>"
    }
  },
  {
    id: "2",
    title: { english: "Annual Alumni Networking Gala", khmer: "កម្មវិធីជួបជុំអតីតនិស្សិតប្រចាំឆ្នាំ" },
    slug: "annual-alumni-networking-gala",
    startDate: "2026-06-22T18:30",
    endDate: "2026-06-22T21:30",
    location: { english: "University Grand Hall", khmer: "សាលធំសាកលវិទ្យាល័យ" },
    isVirtual: false,
    description: {
      english: "An evening of celebration and connection. Reconnect with fellow alumni, expand your professional network, and support our future graduates.",
      khmer: "រាត្រីនៃការអបអរសាទរ និងការតភ្ជាប់ទំនាក់ទំនង។ ជួបជុំជាមួយអតីតនិស្សិតរួមជំនាន់ ពង្រីកបណ្តាញទំនាក់ទំនងអាជីពរបស់អ្នក និងគាំទ្រដល់និស្សិតជំនាន់ក្រោយ។"
    }
  },
  {
    id: "3",
    title: { english: "Guest Lecture: The Future of AI in Education", khmer: "បាឋកថា៖ អនាគតនៃបញ្ញាសិប្បនិម្មិតក្នុងវិស័យអប់រំ" },
    slug: "guest-lecture-future-of-ai-in-education",
    startDate: "2026-07-05T14:00",
    endDate: "2026-07-05T15:30",
    location: { english: "Science Building, Room 402", khmer: "អគារវិទ្យាសាស្ត្រ បន្ទប់ ៤០២" },
    isVirtual: false,
    description: {
      english: "Discover how Artificial Intelligence is transforming classroom dynamics, tutoring systems, and personalized learning path development.",
      khmer: "ស្វែងយល់ពីរបៀបដែលបញ្ញាសិប្បនិម្មិត (AI) កំពុងផ្លាស់ប្តូរថ្នាក់រៀន ប្រព័ន្ធបង្រៀន និងការអភិវឌ្ឍវិធីសាស្ត្រសិក្សាផ្ទាល់ខ្លួន។"
    }
  },
  {
    id: "4",
    title: { english: "Virtual Open House & Info Session", khmer: "កម្មវិធីបើកទ្វារវិទ្យាស្ថាននិម្មិត និងវគ្គព័ត៌មាន" },
    slug: "virtual-open-house-info-session",
    startDate: "2026-07-10T10:00",
    endDate: "2026-07-12T12:00",
    location: { english: "Online via Zoom", khmer: "អនឡាញតាម Zoom" },
    isVirtual: true,
    virtualLink: "https://zoom.us/j/9876543210",
    description: {
      english: "Join our virtual info session from the comfort of your home to learn about application requirements and scholarships.",
      khmer: "សូមចូលរួមវគ្គព័ត៌មាននិម្មិតរបស់យើងពីគេហដ្ឋានរបស់អ្នក ដើម្បីស្វែងយល់អំពីតម្រូវការចុះឈ្មោះ និងអាហារូបករណ៍។"
    }
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
  { id: "1", label: "Nationwide Campuses", value: "5" },
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
