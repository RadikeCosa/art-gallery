export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  createdDate: string;
  story: string;
  artist: string;
  likes?: number;
  dimensions?: string;
  aspectRatio?: string;
}
