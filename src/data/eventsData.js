const events = [
  {
    id: 1,
    title: "Chess Tournament 2025",
    date: "2025-07-15",
    time: "09:00",
    endTime: "17:00",
    location: "ESEN",
    category: "Sports",
    description: "Annual chess tournament open to all students and faculty. Compete for the university championship title and win exciting prizes. Registration is required by July 10th.",
    organizer: "Student Council",
    contact: {
      name: "Maria Rodriguez",
      email: "maria.rodriguez@esen.edu.sv",
      phone: "+503 1234-5678"
    },
    capacity: 64,
    registered: 42,
    requirements: ["Student ID", "Registration form", "Chess set (optional)"],
    image: "event1",
    price: "Free",
    tags: ["Tournament", "Chess", "Competition", "Students"]
  },
  {
    id: 2,
    title: "Lost Items Inventory Workshop",
    date: "2025-07-20",
    time: "14:00",
    endTime: "16:00",
    location: "Student Services Office",
    category: "Administrative",
    description: "Workshop on how to properly report and claim lost items on campus. Learn about the new digital system and procedures for handling lost and found items.",
    organizer: "Student Services",
    contact: {
      name: "Carlos Mendez",
      email: "carlos.mendez@esen.edu.sv",
      phone: "+503 1234-5679"
    },
    capacity: 30,
    registered: 18,
    requirements: ["Student ID"],
    image: "event2",
    price: "Free",
    tags: ["Workshop", "Administrative", "Lost Items", "Procedures"]
  },
  {
    id: 3,
    title: "Beach Conference 2025: Marine Biology",
    date: "2025-07-25",
    time: "10:00",
    endTime: "18:00",
    location: "Coastal Research Center",
    category: "Academic",
    description: "International conference on marine biology and coastal ecosystem conservation. Features keynote speakers, research presentations, and networking opportunities with marine biologists from around the world.",
    organizer: "Biology Department",
    contact: {
      name: "Dr. Ana Flores",
      email: "ana.flores@esen.edu.sv",
      phone: "+503 1234-5680"
    },
    capacity: 150,
    registered: 89,
    requirements: ["Registration fee", "Academic credentials", "Lunch pre-order"],
    image: "event3",
    price: "$25",
    tags: ["Conference", "Marine Biology", "Research", "International"]
  },
  {
    id: 4,
    title: "San Diego Beach Volleyball Tournament",
    date: "2025-08-01",
    time: "16:00",
    endTime: "20:00",
    location: "San Diego Beach Volleyball Court",
    category: "Sports",
    description: "Inter-university beach volleyball tournament. Teams of 4 players compete in a fun and competitive environment. Prizes for top 3 teams and refreshments provided.",
    organizer: "Athletics Department",
    contact: {
      name: "Roberto Silva",
      email: "roberto.silva@esen.edu.sv",
      phone: "+503 1234-5681"
    },
    capacity: 80,
    registered: 56,
    requirements: ["Team registration", "Sports insurance", "Beach volleyball experience"],
    image: "event4",
    price: "$10 per team",
    tags: ["Volleyball", "Beach", "Tournament", "Team Sport"]
  },
  {
    id: 5,
    title: "Tech Innovation Summit",
    date: "2025-08-05",
    time: "09:00",
    endTime: "17:00",
    location: "Innovation Hub - Building C",
    category: "Technology",
    description: "Annual technology summit featuring the latest innovations in AI, blockchain, and software development. Includes workshops, startup pitches, and networking sessions.",
    organizer: "Computer Science Department",
    contact: {
      name: "Dr. Luis Martinez",
      email: "luis.martinez@esen.edu.sv",
      phone: "+503 1234-5682"
    },
    capacity: 200,
    registered: 145,
    requirements: ["Laptop", "Registration", "Technical background preferred"],
    image: "banner-end",
    price: "Free",
    tags: ["Technology", "Innovation", "AI", "Blockchain", "Startups"]
  },
  {
    id: 6,
    title: "Cultural Arts Festival",
    date: "2025-08-10",
    time: "18:00",
    endTime: "22:00",
    location: "University Amphitheater",
    category: "Cultural",
    description: "Celebrate diversity through music, dance, and art performances by students from different cultural backgrounds. Food stalls representing various cuisines will be available.",
    organizer: "Cultural Affairs Office",
    contact: {
      name: "Sofia Ramirez",
      email: "sofia.ramirez@esen.edu.sv",
      phone: "+503 1234-5683"
    },
    capacity: 500,
    registered: 234,
    requirements: ["None"],
    image: "event4",
    price: "$10",
    tags: ["Culture", "Arts", "Music", "Dance", "Food", "Diversity"]
  }
];

export default events;