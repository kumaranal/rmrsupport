import {
  UserIcon,
  CreditCardIcon,
  Squares2X2Icon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

type Divider = {
  divider: true;
};

type NavigationItemLink = {
  label: string;
  path: string;
  Icon: (props: { className: string }) => JSX.Element;
  end?: boolean;
};

type NavigationGroup = {
  label: string;
  collapsible?: boolean;
  collapsed?: boolean;
  children: NavigationItemLink[];
};

type NavigationItem = NavigationItemLink | NavigationGroup | Divider;

type NavigationConfig = {
  items: NavigationItem[];
};

const NAVIGATION_CONFIG: NavigationConfig = {
  items: [
    {
      label: 'Home',
      path: '/home',
      Icon: ({ className }: { className: string }) => {
        return <Squares2X2Icon className={className} />;
      },
    },
    {
      label: 'My Info',
      path: '/my-info',
      Icon: ({ className }: { className: string }) => {
        return <UserIcon className={className} />;
      },
    },
    {
      label: 'Help',
      path: 'help',
      Icon: ({ className }: { className: string }) => {
        return <QuestionMarkCircleIcon className={className} />;
      },
    },
    {
      label: 'About',
      path: '/about-us',
      Icon: ({ className }: { className: string }) => {
        return <InformationCircleIcon className={className} />;
      },
    },
    
    {
      label: 'Settings',
      collapsible: false,
      children: [
        {
          label: 'Profile',
          path: '/settings/profile',
          Icon: ({ className }: { className: string }) => {
            return <UserIcon className={className} />;
          },
        },
        {
          label: 'Subscription',
          path: '/settings/subscription',
          Icon: ({ className }: { className: string }) => {
            return <CreditCardIcon className={className} />;
          },
        },
      ],
    },
  ],
};

export default NAVIGATION_CONFIG;
