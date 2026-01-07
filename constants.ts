import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "GTA V",
    price: 1499.00,
    platform: "PC",
    image: "https://picsum.photos/400/600?random=1",
    description: "Experience the ultimate open-world adventure in Los Santos. Includes Grand Theft Auto Online.",
    rating: 4.8,
    stock: 50
  },
  {
    id: 2,
    name: "Green Hell",
    price: 799.00,
    platform: "PC",
    image: "https://picsum.photos/400/600?random=2",
    description: "A sweltering struggle for survival in the Amazonian rainforest. Psychological survival simulator.",
    rating: 4.5,
    stock: 25
  },
  {
    id: 3,
    name: "God of War Ragnarök",
    price: 2499.00,
    platform: "PS5",
    image: "https://picsum.photos/400/600?random=3",
    description: "Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives.",
    rating: 4.9,
    stock: 15
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    price: 1999.00,
    platform: "PC",
    image: "https://picsum.photos/400/600?random=4",
    description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power and glamour.",
    rating: 4.2,
    stock: 100
  },
  {
    id: 5,
    name: "Assassin's Creed Valhalla",
    price: 2199.00,
    platform: "Xbox",
    image: "https://picsum.photos/400/600?random=5",
    description: "Become Eivor, a legendary Viking raider on a quest for glory.",
    rating: 4.6,
    stock: 40
  },
  {
    id: 6,
    name: "Baldur's Gate 3",
    price: 2599.00,
    platform: "PC",
    image: "https://picsum.photos/400/600?random=6",
    description: "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal.",
    rating: 4.9,
    stock: 10
  }
];

export const DEMO_ADMIN_USER = {
  email: 'admin@neongamers.com',
  password: 'DemoAdmin123!'
};
