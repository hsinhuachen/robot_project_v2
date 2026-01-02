import type { SocialObjects } from "./types";
import SiteJson from "@data/site.json"

export const SITE = SiteJson;

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    icon: "icon-facebook",
    href: "https://www.facebook.com/",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    icon: "icon-instagram",
    href: "https://www.instagram.com/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Twitter",
    icon: "icon-twitter",
    href: "https://twitter.com/",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    icon: "icon-youtube",
    href: "https://www.youtube.com/",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  }
];

