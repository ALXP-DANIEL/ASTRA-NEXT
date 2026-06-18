import {
  BriefcaseIcon,
  EnvelopeIcon,
  HouseIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "@phosphor-icons/react";

export const Icons = {
  Layout: {
    Navigation: {
      Home: HouseIcon,
      Work: BriefcaseIcon,
      About: UserIcon,
      Contact: EnvelopeIcon,
    },

    Theme: {
      Sun: SunIcon,
      Dark: MoonIcon,
    },
  },
} as const;
