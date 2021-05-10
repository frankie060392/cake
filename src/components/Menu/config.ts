import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: 'https://bifo.mydefinex.com/',
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: '/pool',
      // },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: 'https://bifo.mydefinex.com/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://bifo.mydefinex.com/pools',
  // },
  // {
  //   label: 'Prediction',
  //   icon: 'PredictionsIcon',
  //   href: 'https://bifo.mydefinex.com/prediction',
  //   status: {
  //     text: 'BETA',
  //     color: 'warning',
  //   },
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://bifo.mydefinex.com/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://bifo.mydefinex.com/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://bifo.mydefinex.com/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://bifo.mydefinex.com/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://bifo.mydefinex.com/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://bifo.mydefinex.com/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://bifo.mydefinex.com',
      },
      {
        label: 'Tokens',
        href: 'https://bifo.mydefinex.com/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://bifo.mydefinex.com/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://bifo.mydefinex.com/accounts',
      }
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://bifo.mydefinex.com/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Contact',
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: 'Merch',
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config
