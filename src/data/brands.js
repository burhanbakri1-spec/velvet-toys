import snacklesCover from '../assets/images/snackles-cover-a31fe95e7336c25bf1a66b9fd322e8f9.png';
import mainBlaster from '../assets/images/main-blaster-mobile-37eeae3470e288df79778cc88b3b788b.png';
import collection from '../assets/images/collection-4dce34bf45802e2e4724c17b51b0980b.png';

const CDN = 'https://cdn.sanity.io/images/j1qnzlrr/production';

const brands = [
  { slug: '5-surprise', name: '5 Surprise', description: 'Unbox the surprise!', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
  { slug: 'ballers', name: 'Ballers', description: 'Slam dunk fun!', image: `${CDN}/e6ef12b320486bf1e6161d2b06399edc0f095fc7-2560x1440.webp` },
  { slug: 'bunch-o-balloons', name: 'Bunch O Balloons', description: 'Fill and tie water balloons in seconds!', image: `${CDN}/d352d7ec51afbee7c8514acd4390199c95691a95-2560x1440.webp` },
  { slug: 'bunch-o-bubbles', name: 'Bunch O Bubbles', description: 'Bubble-blowing fun!', image: `${CDN}/d352d7ec51afbee7c8514acd4390199c95691a95-2560x1440.webp` },
  { slug: 'coco-cones', name: 'Coco Cones', description: 'Sweet treat surprises!', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
  { slug: 'fidget', name: 'Fidget', description: 'Fidget your way!', image: collection },
  { slug: 'fuggler', name: 'Fuggler', description: 'The ugliest monster ever!', image: `${CDN}/27f01e2dfdabdb244b65c4d6cf86da4fb77dff7d-2560x1440.webp` },
  { slug: 'max', name: 'MAX', description: 'Maximum play!', image: `${CDN}/f3561e9077acad819a7bbe3481d9d169d62d3fe2-2560x1465.jpg` },
  { slug: 'max-build-more', name: 'MAX Build More', description: 'Build bigger!', image: `${CDN}/f3561e9077acad819a7bbe3481d9d169d62d3fe2-2560x1465.jpg` },
  { slug: 'metal-machines', name: 'Metal Machines', description: 'Die-cast metal vehicles!', image: collection },
  { slug: 'mini-brands', name: 'Mini Brands', description: 'Mini versions of your favorite brands!', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
  { slug: 'my-mini', name: 'My Mini', description: 'Your mini world!', image: `${CDN}/faa0311147a3e8e77cda476590f51f1c86653081-2560x1440.webp` },
  { slug: 'oosh', name: 'OOSH', description: 'Squishy sensory toys!', image: collection },
  { slug: 'pets-alive', name: 'Pets Alive', description: 'Interactive pets that come to life!', image: `${CDN}/c159a14eb64ff582c77665fcb2a120bd6845fd4a-2560x1440.webp` },
  { slug: 'rainbocorns', name: 'Rainbocorns', description: 'Magical rainbow friends!', image: `${CDN}/2f7b8822be7d58302a9bb42326e050e97d6864c9-4096x2797.webp` },
  { slug: 'robo-alive', name: 'Robo Alive', description: 'Robots that come alive!', image: `${CDN}/c159a14eb64ff582c77665fcb2a120bd6845fd4a-2560x1440.webp` },
  { slug: 'smashers', name: 'Smashers', description: 'Smash to collect!', image: collection },
  { slug: 'snackles', name: 'Snackles', description: 'Cuddly snack characters!', image: snacklesCover },
  { slug: 'sparkle-girlz', name: 'Sparkle Girlz', description: 'Sparkle and shine!', image: collection },
  { slug: 'xshot', name: 'X-Shot', description: 'The ultimate blaster battle!', image: mainBlaster },
  { slug: 'xshot-water', name: 'X-Shot Water', description: 'Water blaster fun!', image: mainBlaster },
];

export const brandProducts = {
  'mini-brands': [
    { slug: 'mini-brands', name: 'Mini Brands', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'create-disney-snacks', name: 'Create Disney Snacks', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'create-krispy-kreme', name: 'Create Krispy Kreme', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'disney-store-mini-brands', name: 'Disney Store Mini Brands', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'fill-the-fridge', name: 'Fill the Fridge', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'foodie-mini-brands', name: 'Foodie Mini Brands', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'kawaii---', name: 'Kawaii', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'kawaii-bouquet', name: 'Kawaii Bouquet', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'kawaii-kitchen', name: 'Kawaii Kitchen', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'magic-cook-kitchen', name: 'Magic Cook Kitchen', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'mini-fashion', name: 'Mini Fashion', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'really-works', name: 'Really Works', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
    { slug: 'toy-mini-brands', name: 'Toy Mini Brands', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
  ],
  'xshot': [
    { slug: 'xshot', name: 'X-Shot', image: mainBlaster },
    { slug: 'xshot-insanity', name: 'X-Shot Insanity', image: mainBlaster },
    { slug: 'xshot-horrorfire', name: 'X-Shot HorrorFire', image: mainBlaster },
  ],
  'xshot-water': [
    { slug: 'xshot-water', name: 'X-Shot Water', image: mainBlaster },
  ],
  'bunch-o-balloons': [
    { slug: 'bunch-o-balloons', name: 'Bunch O Balloons', image: `${CDN}/d352d7ec51afbee7c8514acd4390199c95691a95-2560x1440.webp` },
  ],
  'robo-alive': [
    { slug: 'robo-alive', name: 'Robo Alive', image: `${CDN}/c159a14eb64ff582c77665fcb2a120bd6845fd4a-2560x1440.webp` },
  ],
  'smashers': [
    { slug: 'smashers', name: 'Smashers', image: collection },
  ],
  '5-surprise': [
    { slug: '5-surprise', name: '5 Surprise', image: `${CDN}/bafceebc89068a86cc4cbc1e94749b38f4ceef33-2560x1440.webp` },
  ],
};

export default brands;
