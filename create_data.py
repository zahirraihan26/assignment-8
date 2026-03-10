import json

data = [
  {
    "image": "https://i.ibb.co/nqD74xv8/alexander-shatov-qsu-ER9x-YOY-unsplash-1.jpg",
    "title": "WhatsApp Messenger",
    "companyName": "WhatsApp LLC",
    "id": 1,
    "description": "A fast, simple, and secure messaging app connecting over 2 billion users worldwide.",
    "size": 180,
    "reviews": 120000000,
    "ratingAvg": 4.5,
    "downloads": 5000000000,
    "ratings": [
      {"name": "1 star", "count": 3000000},
      {"name": "2 star", "count": 5000000},
      {"name": "3 star", "count": 15000000},
      {"name": "4 star", "count": 25000000},
      {"name": "5 star", "count": 75000000}
    ],
    "category": "Text Generation"
  },
  {
    "image": "https://via.placeholder.com/150?text=Spotify",
    "title": "Spotify",
    "companyName": "Spotify AB",
    "id": 2,
    "description": "Stream millions of songs, podcasts, and playlists from your favorite artists.",
    "size": 110,
    "reviews": 100000000,
    "ratingAvg": 4.4,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 2500000},
      {"name": "2 star", "count": 4000000},
      {"name": "3 star", "count": 12000000},
      {"name": "4 star", "count": 22000000},
      {"name": "5 star", "count": 61000000}
    ],
    "category": "Image/Vision"
  },
  {
    "image": "https://via.placeholder.com/150?text=Instagram",
    "title": "Instagram",
    "companyName": "Instagram Inc.",
    "id": 3,
    "description": "Share your photos, stories, and moments with friends and the world.",
    "size": 200,
    "reviews": 150000000,
    "ratingAvg": 4.3,
    "downloads": 5000000000,
    "ratings": [
      {"name": "1 star", "count": 4000000},
      {"name": "2 star", "count": 6000000},
      {"name": "3 star", "count": 18000000},
      {"name": "4 star", "count": 30000000},
      {"name": "5 star", "count": 92000000}
    ],
    "category": "Audio"
  },
  {
    "image": "https://img.freepik.com/premium-vector/vector-facebook-social-media-icon-illustration_534308-21672.jpg?w=360",
    "title": "Facebook",
    "companyName": "Meta Platforms Inc.",
    "id": 4,
    "description": "Connect, share, and discover communities with billions of users globally.",
    "size": 250,
    "reviews": 180000000,
    "ratingAvg": 4.1,
    "downloads": 5000000000,
    "ratings": [
      {"name": "1 star", "count": 8000000},
      {"name": "2 star", "count": 10000000},
      {"name": "3 star", "count": 22000000},
      {"name": "4 star", "count": 32000000},
      {"name": "5 star", "count": 108000000}
    ],
    "category": "Code"
  },
  {
    "image": "https://via.placeholder.com/150?text=YouTube",
    "title": "YouTube",
    "companyName": "Google LLC",
    "id": 5,
    "description": "Watch, upload, and share videos from around the world.",
    "size": 160,
    "reviews": 200000000,
    "ratingAvg": 4.6,
    "downloads": 10000000000,
    "ratings": [
      {"name": "1 star", "count": 2000000},
      {"name": "2 star", "count": 4000000},
      {"name": "3 star", "count": 10000000},
      {"name": "4 star", "count": 25000000},
      {"name": "5 star", "count": 159000000}
    ],
    "category": "Text Generation"
  },
  {
    "image": "https://via.placeholder.com/150?text=Telegram",
    "title": "Telegram",
    "companyName": "Telegram FZ-LLC",
    "id": 6,
    "description": "A fast and secure messaging app with cloud storage and privacy focus.",
    "size": 120,
    "reviews": 35000000,
    "ratingAvg": 4.7,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 800000},
      {"name": "2 star", "count": 1000000},
      {"name": "3 star", "count": 4000000},
      {"name": "4 star", "count": 8000000},
      {"name": "5 star", "count": 21000000}
    ],
    "category": "Image/Vision"
  },
  {
    "image": "https://via.placeholder.com/150?text=Candy+Crush",
    "title": "Candy Crush Saga",
    "companyName": "King",
    "id": 7,
    "description": "Match candies in this sweet puzzle adventure loved by millions of players.",
    "size": 150,
    "reviews": 90000000,
    "ratingAvg": 4.5,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 1500000},
      {"name": "2 star", "count": 2500000},
      {"name": "3 star", "count": 8000000},
      {"name": "4 star", "count": 16000000},
      {"name": "5 star", "count": 62000000}
    ],
    "category": "Audio"
  },
  {
    "image": "https://via.placeholder.com/150?text=Clash+Of+Clans",
    "title": "Clash of Clans",
    "companyName": "Supercell",
    "id": 8,
    "description": "Build your village, raise a clan, and compete in epic clan wars.",
    "size": 210,
    "reviews": 70000000,
    "ratingAvg": 4.6,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 1000000},
      {"name": "2 star", "count": 2000000},
      {"name": "3 star", "count": 6000000},
      {"name": "4 star", "count": 12000000},
      {"name": "5 star", "count": 48000000}
    ],
    "category": "Code"
  },
  {
    "image": "https://via.placeholder.com/150?text=PUBG",
    "title": "PUBG Mobile",
    "companyName": "Tencent Games",
    "id": 9,
    "description": "A battle royale shooter with intense 100-player matches and realistic graphics.",
    "size": 750,
    "reviews": 95000000,
    "ratingAvg": 4.3,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 4000000},
      {"name": "2 star", "count": 6000000},
      {"name": "3 star", "count": 15000000},
      {"name": "4 star", "count": 25000000},
      {"name": "5 star", "count": 45000000}
    ],
    "category": "Text Generation"
  },
  {
    "image": "https://static.beebom.com/wp-content/uploads/2018/03/subway-surfers.jpg?w=750&quality=75",
    "title": "Subway Surfers",
    "companyName": "SYBO Games",
    "id": 10,
    "description": "Run, dodge, and surf your way through exciting subway tracks and obstacles.",
    "size": 140,
    "reviews": 80000000,
    "ratingAvg": 4.4,
    "downloads": 2000000000,
    "ratings": [
      {"name": "1 star", "count": 2000000},
      {"name": "2 star", "count": 4000000},
      {"name": "3 star", "count": 10000000},
      {"name": "4 star", "count": 16000000},
      {"name": "5 star", "count": 48000000}
    ],
    "category": "Image/Vision"
  },
  {
    "image": "https://static.vecteezy.com/system/resources/previews/017/396/810/non_2x/snapseed-by-google-free-png.png",
    "title": "Snapseed",
    "companyName": "Google LLC",
    "id": 11,
    "description": "Professional photo editing tool with advanced filters and adjustments.",
    "size": 90,
    "reviews": 25000000,
    "ratingAvg": 4.7,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 400000},
      {"name": "2 star", "count": 700000},
      {"name": "3 star", "count": 1500000},
      {"name": "4 star", "count": 5000000},
      {"name": "5 star", "count": 18000000}
    ],
    "category": "Audio"
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoQ9kGLLNtnpDryPgTzwfuIcmSD3qoAu47Q&s",
    "title": "Evernote",
    "companyName": "Evernote Corporation",
    "id": 12,
    "description": "Capture ideas, notes, and to-do lists all in one organized place.",
    "size": 130,
    "reviews": 12000000,
    "ratingAvg": 4.2,
    "downloads": 50000000,
    "ratings": [
      {"name": "1 star", "count": 400000},
      {"name": "2 star", "count": 800000},
      {"name": "3 star", "count": 2000000},
      {"name": "4 star", "count": 4000000},
      {"name": "5 star", "count": 6400000}
    ],
    "category": "Code"
  },
  {
    "image": "https://via.placeholder.com/150?text=Google+Drive",
    "title": "Google Drive",
    "companyName": "Google LLC",
    "id": 13,
    "description": "Secure cloud storage and file sharing from Google for all your documents.",
    "size": 95,
    "reviews": 80000000,
    "ratingAvg": 4.6,
    "downloads": 5000000000,
    "ratings": [
      {"name": "1 star", "count": 2000000},
      {"name": "2 star", "count": 3000000},
      {"name": "3 star", "count": 8000000},
      {"name": "4 star", "count": 16000000},
      {"name": "5 star", "count": 51000000}
    ],
    "category": "Text Generation"
  },
  {
    "image": "https://via.placeholder.com/150?text=Google+Keep",
    "title": "Google Keep",
    "companyName": "Google LLC",
    "id": 14,
    "description": "Take quick notes, make lists, and set reminders — all synced across devices.",
    "size": 70,
    "reviews": 35000000,
    "ratingAvg": 4.5,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 700000},
      {"name": "2 star", "count": 1000000},
      {"name": "3 star", "count": 2000000},
      {"name": "4 star", "count": 7000000},
      {"name": "5 star", "count": 24000000}
    ],
    "category": "Image/Vision"
  },
  {
    "image": "https://via.placeholder.com/150?text=Todoist",
    "title": "Todoist",
    "companyName": "Doist",
    "id": 15,
    "description": "Organize your tasks and projects with one of the best productivity apps.",
    "size": 60,
    "reviews": 10000000,
    "ratingAvg": 4.6,
    "downloads": 50000000,
    "ratings": [
      {"name": "1 star", "count": 300000},
      {"name": "2 star", "count": 400000},
      {"name": "3 star", "count": 1200000},
      {"name": "4 star", "count": 2500000},
      {"name": "5 star", "count": 5600000}
    ],
    "category": "Audio"
  },
  {
    "image": "https://via.placeholder.com/150?text=Office",
    "title": "Microsoft Office",
    "companyName": "Microsoft Corporation",
    "id": 16,
    "description": "All-in-one productivity suite including Word, Excel, and PowerPoint.",
    "size": 300,
    "reviews": 70000000,
    "ratingAvg": 4.5,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 3000000},
      {"name": "2 star", "count": 4000000},
      {"name": "3 star", "count": 9000000},
      {"name": "4 star", "count": 16000000},
      {"name": "5 star", "count": 38000000}
    ],
    "category": "Code"
  },
  {
    "image": "https://via.placeholder.com/150?text=Notion",
    "title": "Notion",
    "companyName": "Notion Labs",
    "id": 17,
    "description": "A connected workspace for notes, tasks, and wikis — all in one app.",
    "size": 120,
    "reviews": 18000000,
    "ratingAvg": 4.8,
    "downloads": 50000000,
    "ratings": [
      {"name": "1 star", "count": 100000},
      {"name": "2 star", "count": 200000},
      {"name": "3 star", "count": 600000},
      {"name": "4 star", "count": 3000000},
      {"name": "5 star", "count": 14000000}
    ],
    "category": "Text Generation"
  },
  {
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg",
    "title": "X (Twitter)",
    "companyName": "X Corp.",
    "id": 18,
    "description": "Stay informed and express your thoughts in real-time with global users.",
    "size": 170,
    "reviews": 130000000,
    "ratingAvg": 4.2,
    "downloads": 2000000000,
    "ratings": [
      {"name": "1 star", "count": 5000000},
      {"name": "2 star", "count": 7000000},
      {"name": "3 star", "count": 12000000},
      {"name": "4 star", "count": 25000000},
      {"name": "5 star", "count": 81000000}
    ],
    "category": "Image/Vision"
  },
  {
    "image": "https://via.placeholder.com/150?text=TikTok",
    "title": "TikTok",
    "companyName": "ByteDance",
    "id": 19,
    "description": "Create and discover short-form videos with music, trends, and creativity.",
    "size": 220,
    "reviews": 180000000,
    "ratingAvg": 4.4,
    "downloads": 5000000000,
    "ratings": [
      {"name": "1 star", "count": 4000000},
      {"name": "2 star", "count": 6000000},
      {"name": "3 star", "count": 15000000},
      {"name": "4 star", "count": 26000000},
      {"name": "5 star", "count": 129000000}
    ],
    "category": "Audio"
  },
  {
    "image": "https://via.placeholder.com/150?text=Zoom",
    "title": "Zoom",
    "companyName": "Zoom Video Communications",
    "id": 20,
    "description": "Video conferencing, chat, and collaboration platform for remote work.",
    "size": 100,
    "reviews": 65000000,
    "ratingAvg": 4.3,
    "downloads": 1000000000,
    "ratings": [
      {"name": "1 star", "count": 2000000},
      {"name": "2 star", "count": 3000000},
      {"name": "3 star", "count": 7000000},
      {"name": "4 star", "count": 14000000},
      {"name": "5 star", "count": 39000000}
    ],
    "category": "Code"
  }
]

with open(r"c:\projects\assignament-1-to 9\assignment-8-react\public\Data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("Created Data.json successfully with placeholder URLs.")
