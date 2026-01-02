export interface Frontmatter {
  title: string;
  ogImage?: string;
  description: string;
  author: string;
  datetime: string;
  slug: string;
  featured: boolean;
  draft: boolean;
  tags: string[];
  searchKey: string;
}

export type SocialObjects = {
  name: SocialMedia;
  icon: string;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Facebook"
  | "Instagram"
  | "Mail"
  | "Twitter"
  | "YouTube"
  | "Pinterest";
