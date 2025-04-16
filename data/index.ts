export interface NavItem {
  label: string
  href: string
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