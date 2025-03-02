const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    Description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1500,
    Location: "Malibu",
    Country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    Description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1200,
    Location: "New York City",
    Country: "United States",
  },
  {
    title: "Mountain Retreat",
    Description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1000,
    Location: "Aspen",
    Country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    Description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 2500,
    Location: "Florence",
    Country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    Description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 800,
    Location: "Portland",
    Country: "United States",
  },
  {
    title: "Beachfront Paradise",
    Description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 2000,
    Location: "Cancun",
    Country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    Description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 900,
    Location: "Lake Tahoe",
    Country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    Description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 3500,
    Location: "Los Angeles",
    Country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    Description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 3000,
    Location: "Verbier",
    Country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    Description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 4000,
    Location: "Serengeti National Park",
    Country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    Description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1800,
    Location: "Amsterdam",
    Country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    Description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 10000,
    Location: "Fiji",
    Country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    Description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1200,
    Location: "Cotswolds",
    Country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    Description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 2200,
    Location: "Boston",
    Country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    Description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1800,
    Location: "Bali",
    Country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    Description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1500,
    Location: "Banff",
    Country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    Description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    Image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1600,
    Location: "Miami",
    Country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    Description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 3000,
    Location: "Phuket",
    Country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    Description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 4000,
    Location: "Scottish Highlands",
    Country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    Description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 5000,
    Location: "Dubai",
    Country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    Description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1100,
    Location: "Montana",
    Country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    Description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 2500,
    Location: "Mykonos",
    Country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    Description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 750,
    Location: "Costa Rica",
    Country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    Description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1600,
    Location: "Charleston",
    Country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    Description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    Price: 2000,
    Location: "Tokyo",
    Country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    Description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1200,
    Location: "New Hampshire",
    Country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    Description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 6000,
    Location: "Maldives",
    Country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    Description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 4000,
    Location: "Aspen",
    Country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    Description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    Image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    Price: 1800,
    Location: "Costa Rica",
    Country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };