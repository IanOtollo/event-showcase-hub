import galleryConference from "@/assets/gallery-conference.jpg";
import galleryGala from "@/assets/gallery-gala.jpg";
import galleryLaunch from "@/assets/gallery-launch.jpg";
import galleryTeambuilding from "@/assets/gallery-teambuilding.jpg";
import galleryAwards from "@/assets/gallery-awards.jpg";
import gallerySeminar from "@/assets/gallery-seminar.jpg";
import galleryLivestream from "@/assets/gallery-livestream.jpg";
import galleryNetworking from "@/assets/gallery-networking.jpg";

export type EventCategory = "All" | "Conference" | "Gala" | "Product Launch" | "Team Building" | "Awards" | "Seminar" | "Livestream" | "Networking";
export type MediaType = "Photo" | "Video";

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: EventCategory;
  location: string;
  eventType: string;
  date: string;
  mediaType: MediaType;
  client?: string;
}

export const categories: EventCategory[] = [
  "All", "Conference", "Gala", "Product Launch", "Team Building", "Awards", "Seminar", "Livestream", "Networking"
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "TechVision Annual Summit 2024",
    image: galleryConference,
    category: "Conference",
    location: "Lagos, Nigeria",
    eventType: "Corporate Conference",
    date: "2024-11-15",
    mediaType: "Photo",
    client: "TechVision Inc.",
  },
  {
    id: "2",
    title: "Sterling Bank Gala Night",
    image: galleryGala,
    category: "Gala",
    location: "Abuja, Nigeria",
    eventType: "Corporate Gala",
    date: "2024-10-22",
    mediaType: "Photo",
    client: "Sterling Bank",
  },
  {
    id: "3",
    title: "Nova Product Launch",
    image: galleryLaunch,
    category: "Product Launch",
    location: "Lagos, Nigeria",
    eventType: "Product Launch",
    date: "2024-09-05",
    mediaType: "Video",
    client: "Nova Technologies",
  },
  {
    id: "4",
    title: "Zenith Group Team Retreat",
    image: galleryTeambuilding,
    category: "Team Building",
    location: "Cape Town, South Africa",
    eventType: "Team Building",
    date: "2024-08-18",
    mediaType: "Photo",
    client: "Zenith Group",
  },
  {
    id: "5",
    title: "Africa Business Awards 2024",
    image: galleryAwards,
    category: "Awards",
    location: "Nairobi, Kenya",
    eventType: "Awards Ceremony",
    date: "2024-07-30",
    mediaType: "Video",
    client: "Africa Business Council",
  },
  {
    id: "6",
    title: "Leadership Masterclass Series",
    image: gallerySeminar,
    category: "Seminar",
    location: "Lagos, Nigeria",
    eventType: "Corporate Training",
    date: "2024-06-12",
    mediaType: "Photo",
    client: "Growth Partners",
  },
  {
    id: "7",
    title: "Global Connect Live Broadcast",
    image: galleryLivestream,
    category: "Livestream",
    location: "Accra, Ghana",
    eventType: "Live Broadcast",
    date: "2024-05-20",
    mediaType: "Video",
    client: "Global Connect Media",
  },
  {
    id: "8",
    title: "Founders & Investors Mixer",
    image: galleryNetworking,
    category: "Networking",
    location: "Lagos, Nigeria",
    eventType: "Networking Event",
    date: "2024-04-08",
    mediaType: "Photo",
    client: "Venture Hub Africa",
  },
];
