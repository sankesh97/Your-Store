import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Sankesh',
    lastName: 'Jain',
    email: 'sankeshjain8497@gmail.com',
    password: 'sankesh97',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    wishlist: [],
    address: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        streetAddress: 'Anjani Towers',
        city: 'Hyderabad',
        house: '110',
        postal: '500016',
        phone: '0987654321',
      },
    ],
  },
];
