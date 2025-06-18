// Mock data for development and testing
export const mockEvents = [
  {
    id: 1,
    attributes: {
      title: "Sunday Family Mass",
      description: "Join us for our weekly family-friendly Mass with special music and children's participation.",
      date: "2025-06-22",
      time: "10:00 AM",
      location: "Main Church",
      image: {
        data: {
          attributes: {
            url: "/images/mock-mass.jpg"
          }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Parish Picnic",
      description: "Annual parish picnic with food, games, and fellowship for the whole family. Bring a dish to share!",
      date: "2025-06-28",
      time: "12:00 PM",
      location: "Parish Grounds",
      image: {
        data: {
          attributes: {
            url: "/images/mock-picnic.jpg"
          }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Youth Group Meeting",
      description: "Weekly meeting for high school students. We'll discuss faith, friendship, and plan upcoming service projects.",
      date: "2025-06-25",
      time: "7:00 PM",
      location: "Youth Center",
      image: {
        data: {
          attributes: {
            url: "/images/mock-youth.jpg"
          }
        }
      }
    }
  }
];

export const mockNews = [
  {
    id: 1,
    attributes: {
      title: "New Pastor Welcome",
      content: "We are delighted to welcome Father Martinez as our new pastor. He brings 15 years of pastoral experience and a heart for community service. Join us for a special welcome reception after Sunday Mass.",
      publishedAt: "2025-06-15T10:00:00.000Z",
      featuredImage: {
        data: {
          attributes: {
            url: "/images/mock-pastor.jpg"
          }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Summer Vacation Bible School Registration Open",
      content: "Registration is now open for our Summer Vacation Bible School! Children ages 5-12 are invited to join us for a week of fun, learning, and growing in faith. This year's theme is 'Jesus Loves Me'.",
      publishedAt: "2025-06-12T14:30:00.000Z",
      featuredImage: {
        data: {
          attributes: {
            url: "/images/mock-vbs.jpg"
          }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Food Drive Success",
      content: "Thanks to your generous donations, our recent food drive collected over 500 items for the local food bank. Your kindness makes a real difference in our community.",
      publishedAt: "2025-06-10T09:15:00.000Z",
      featuredImage: {
        data: {
          attributes: {
            url: "/images/mock-food-drive.jpg"
          }
        }
      }
    }
  }
];

export const mockGalleryImages = [
  {
    id: 1,
    attributes: {
      title: "Easter Sunday Celebration",
      description: "Beautiful Easter Sunday Mass with full congregation",
      image: {
        data: {
          attributes: {
            url: "/images/mock-easter.jpg"
          }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Christmas Pageant",
      description: "Children's Christmas pageant performed during Christmas Eve Mass",
      image: {
        data: {
          attributes: {
            url: "/images/mock-christmas.jpg"
          }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "First Communion",
      description: "Young parishioners receiving their First Holy Communion",
      image: {
        data: {
          attributes: {
            url: "/images/mock-communion.jpg"
          }
        }
      }
    }
  },
  {
    id: 4,
    attributes: {
      title: "Parish Festival",
      description: "Annual parish festival with food, games, and community fellowship",
      image: {
        data: {
          attributes: {
            url: "/images/mock-festival.jpg"
          }
        }
      }
    }
  },
  {
    id: 5,
    attributes: {
      title: "Confirmation Ceremony",
      description: "Bishop's visit for Confirmation ceremony",
      image: {
        data: {
          attributes: {
            url: "/images/mock-confirmation.jpg"
          }
        }
      }
    }
  },
  {
    id: 6,
    attributes: {
      title: "Community Service",
      description: "Parish volunteers serving at local soup kitchen",
      image: {
        data: {
          attributes: {
            url: "/images/mock-service.jpg"
          }
        }
      }
    }
  }
];

export const mockLivestream = {
  id: 1,
  attributes: {
    title: "Sunday Mass Live Stream",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Demo video
    isLive: false,
    description: "Join us for live streaming of our Sunday Mass every week at 10:00 AM. Experience the celebration of the Eucharist from wherever you are."
  }
};

// Helper function to simulate API delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const mockApiService = {
  async getEvents() {
    await delay(800); // Simulate API delay
    return { data: mockEvents };
  },

  async getNews() {
    await delay(600);
    return { data: mockNews };
  },

  async getGalleryImages() {
    await delay(700);
    return { data: mockGalleryImages };
  },

  async getLivestream() {
    await delay(500);
    return { data: mockLivestream };
  }
};
