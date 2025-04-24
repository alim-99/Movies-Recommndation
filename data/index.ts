export interface NavItem {
  label: string
  href: string
}

export interface movieItemData {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  media_type: string;
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
  { label: "Popular People", href: "/actors/popular" },
  { label: "Born Today", href: "/actors/born-today" },
]
