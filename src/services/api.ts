import { Restaurant, AvailableSlot, BookingRequest, Booking } from '../types/api';

const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'The Sizzling Grill',
    cuisine: 'Steakhouse',
    location: 'Dublin',
    imageUrl: '/images/restaurant1.jpg',
    rating: 4.5,
    hasEarlyBird: true,
    hasLastMinute: false,
  },
  {
    id: '2',
    name: 'Bella Italia',
    cuisine: 'Italian',
    location: 'Cork',
    imageUrl: '/images/restaurant2.jpg',
    rating: 4.2,
    hasEarlyBird: false,
    hasLastMinute: true,
  },
  {
    id: '3',
    name: 'Sushi Zen',
    cuisine: 'Japanese',
    location: 'Galway',
    imageUrl: '/images/restaurant3.jpg',
    rating: 4.8,
    hasEarlyBird: true,
    hasLastMinute: true,
  },
  {
    id: '4',
    name: 'Tapas Bar',
    cuisine: 'Spanish',
    location: 'Limerick',
    imageUrl: '/images/restaurant4.jpg',
    rating: 4.0,
    hasEarlyBird: false,
    hasLastMinute: false,
  },
  {
    id: '5',
    name: 'The Curry House',
    cuisine: 'Indian',
    location: 'Waterford',
    imageUrl: '/images/restaurant5.jpg',
    rating: 4.6,
    hasEarlyBird: true,
    hasLastMinute: false,
  },
  {
    id: '6',
    name: 'Fish & Chips Co.',
    cuisine: 'Seafood',
    location: 'Sligo',
    imageUrl: '/images/restaurant6.jpg',
    rating: 4.3,
    hasEarlyBird: false,
    hasLastMinute: true,
  },
  {
    id: '7',
    name: 'Burger Palace',
    cuisine: 'American',
    location: 'Killarney',
    imageUrl: '/images/restaurant7.jpg',
    rating: 4.1,
    hasEarlyBird: true,
    hasLastMinute: true,
  },
  {
    id: '8',
    name: 'Pizza Express',
    cuisine: 'Pizza',
    location: 'Dundalk',
    imageUrl: '/images/restaurant8.jpg',
    rating: 4.4,
    hasEarlyBird: false,
    hasLastMinute: false,
  },
  {
    id: '9',
    name: 'Thai Orchid',
    cuisine: 'Thai',
    location: 'Athlone',
    imageUrl: '/images/restaurant9.jpg',
    rating: 4.7,
    hasEarlyBird: true,
    hasLastMinute: false,
  },
  {
    id: '10',
    name: 'Mexican Fiesta',
    cuisine: 'Mexican',
    location: 'Wexford',
    imageUrl: '/images/restaurant10.jpg',
    rating: 3.9,
    hasEarlyBird: false,
    hasLastMinute: true,
  },
];

const getRestaurants = async (): Promise<Restaurant[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockRestaurants;
};

// Update the getAvailability method to use correct types
const getAvailability = async (restaurantId: string, date: string): Promise<{ restaurantId: string; date: string; availableSlots: AvailableSlot[] }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock data
  return {
    restaurantId,
    date,
    availableSlots: [
      {
        time: "17:30",
        type: "earlyBird",
        offerId: "offer123"
      },
      {
        time: "18:00",
        type: "earlyBird",
        offerId: "offer456"
      },
      {
        time: "19:30",
        type: "regular"
      },
      {
        time: "20:30",
        type: "lastMinute",
        discount: "20%"
      }
    ]
  };
};

// Ensure createBooking adheres to the BookingRequest type
const createBooking = async (booking: BookingRequest): Promise<Booking> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Mock response data
  return {
    id: `booking-${Math.random().toString(36).substring(2, 9)}`,
    status: "confirmed",
    restaurantId: booking.restaurantId,
    restaurantName: "Sample Restaurant", // In a real app, you'd fetch this from the restaurant data
    date: booking.date,
    time: booking.time,
    partySize: booking.partySize,
    customerName: booking.customerName,
    confirmationCode: `DINE${Math.floor(10000 + Math.random() * 90000)}`,
  };
};

export const apiService = {
  getRestaurants,
  getAvailability,
  createBooking,
};
