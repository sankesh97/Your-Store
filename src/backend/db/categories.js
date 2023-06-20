import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: 'Laptops',
    description:
      'Experience the perfect blend of power and mobility with laptops, offering sleek designs, cutting-edge technology, and limitless possibilities at your fingertips.',
    imgLink: './images/categories/laptop-category.jpg',
  },
  {
    _id: uuid(),
    category: 'Phones',
    description:
      'Unleash the world in your palm, connecting you to loved ones, entertainment, and endless opportunities, anytime, anywhere.',
    imgLink: './images/categories/mobile-phone-category.jpg',
  },
  {
    _id: uuid(),
    category: 'Televisions',
    description:
      'Transform your living space into a captivating cinematic experience, with stunning visuals and immersive audio that bring every moment to life.',
    imgLink: './images/categories/television-category.jpg',
  },
];
