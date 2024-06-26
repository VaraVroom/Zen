import icecreamAnimation from '@/assets/animations/icecream.json'
import volunteerAnimation from '@/assets/animations/volunteer.json'
import gameAnimation from '@/assets/animations/game.json'
import picnicAnimation from '@/assets/animations/picnic.json'
import napAnimation from '@/assets/animations/nap.json'

const rewards = [
  {
    id:0,
    name: 'Ice cream',
    animationData: icecreamAnimation,
    duration: '20 mins',
    how: 'http://neurosci.co.uk/portfolio/ice-cream-makes-you-happy',
    description: [
      'Ice cream activates the part of the brain called the Orbitofrontal cortex (OFC), which indicates the positive emotional pleasure.',
    ],
    quote: {
      description:
        '“You cannot buy happiness, but you can buy ice cream, and that is kind of the same thing.”',
      author: '— Unknown',
    },
  },
  {
    id:1,
    name: 'Volunteer',
    animationData: volunteerAnimation, 
    duration: '30 mins',
    how: 'https://www.youtube.com/watch?v=nj9LNjB5i4Q',
    description: ['Volunteer for a social cause.', 'Help someone in need.'],
    quote: {
      description:
        '“Remember that the happiest people are not those getting more, but those giving more.”',
      author: '— H. Jackson Brown Jr.',
    },
  },
  {
    id:2,
    name: 'Game',
    animationData: gameAnimation,
    duration: '10 mins',
    how: 'https://www.gamedesigning.org/why-video-games-are-good',
    description: ['Play your favorite game for 10 minutes.'],
    quote: {
      description: '“Life is more fun if you play games.”',
      author: '— Roald Dahl',
    },
  },
  {
    id:3,
    name: 'Picnic',
     animationData: picnicAnimation,
    duration: '30 mins',
    how:
      'https://washburnreview.org/6932/news/psychology-picnic-brings-food-and-conversation',
    description: [
      'Find a spot in the shade.',
      'Invite friends, family and plan for activities.',
      'Opt for foods that are easy to eat.',
    ],
    quote: {
      description: '“Nothing is better than a picnic.”',
      author: '— Zooey Deschanel',
    },
  },
  {
    id:4,
    name: 'Nap',
    animationData: napAnimation,
    duration: '20 mins',
    how:
      'https://www.health.harvard.edu/newsletter_article/sleep-and-mental-health',
    description: ['20 minutes of sleep.'],
    quote: {
      description: '“No day is so bad it can’t be fixed with a nap.”',
      author: '— Carrie Snow',
    },
  },
]

export default rewards