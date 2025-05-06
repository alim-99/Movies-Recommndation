export interface NavItem {
  label: string
  href: string
}

export interface ItemData {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  vote_average: number;
  media_type?: string;
  overview?: string;
}

export interface peopleItemData {
  id: number;
  name: string;
  profile_path: string;
  known_for: Array<{
    id: number;
    title?: string;
  }>;
}

export interface MovieResponse {
  page: number;
  results: ItemData[];
  total_pages: number;
  total_results: number;
}

export const movieItems: NavItem[] = [
  { label: "Popular", href: "/movies/popular" },
  { label: "Now Playing", href: "/movies/now-playing" },
  { label: "Upcoming", href: "/movies/upcoming" },
  { label: "Top Rated", href: "/movies/top-rated" },
]

export const tvItems: NavItem[] = [
  { label: "Popular Shows", href: "/tv/popular" },
  { label: "Airing Today", href: "/tv/airing-today" },
  { label: "On TV", href: "/tv/on-tv" },
  { label: "Top Rated", href: "/tv/top-rated" },
]

export const actorItems: NavItem[] = [
  { label: "Popular People", href: "/people/popular" },
]
