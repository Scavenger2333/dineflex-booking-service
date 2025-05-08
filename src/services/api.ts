
import { Restaurant, RestaurantDetail, RestaurantAvailability, BookingRequest, BookingResponse } from '../types/api';

const API_BASE_URL = 'https://api.dineflex.ie';

// For demonstration purposes, we'll create mock data and simulate API calls
// In a real application, these would make actual fetch calls to the API

// Mock data for restaurants
const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'La Trattoria',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    location: 'Dublin',
    cuisine: 'Italian',
    hasEarlyBird: true,
    hasLastMinute: true
  },
  {
    id: '2',
    name: 'The Golden Dragon',
    thumbnailUrl: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=800&auto=format&fit=crop',
    location: 'Cork',
    cuisine: 'Chinese',
    hasEarlyBird: true,
    hasLastMinute: false
  },
  {
    id: '3',
    name: 'Seafood Harbor',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop',
    location: 'Galway',
    cuisine: 'Seafood',
    hasEarlyBird: false,
    hasLastMinute: true
  },
  {
    id: '4',
    name: 'Bistro Parisienne',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop',
    location: 'Dublin',
    cuisine: 'French',
    hasEarlyBird: true,
    hasLastMinute: true
  },
  {
    id: '5',
    name: 'The Grill House',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop',
    location: 'Belfast',
    cuisine: 'Steakhouse',
    hasEarlyBird: true,
    hasLastMinute: false
  },
];

// Mock restaurant details
const mockRestaurantDetails: { [key: string]: RestaurantDetail } = {
  '1': {
    id: '1',
    name: 'La Trattoria',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    location: 'Dublin',
    cuisine: 'Italian',
    hasEarlyBird: true,
    hasLastMinute: true,
    description: 'Authentic Italian cuisine in the heart of Dublin. Our chefs prepare traditional dishes using the finest imported ingredients.',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&auto=format&fit=crop'
    ],
    address: '42 Grafton Street, Dublin',
    phone: '+353 1 234 5678',
    openingHours: 'Mon-Fri: 12:00-22:00, Sat-Sun: 13:00-23:00',
    earlyBirdOffers: [
      {
        id: 'early1',
        title: 'Early Dinner Special',
        description: '3 courses for €25',
        availableTimes: '17:00-19:00'
      }
    ],
    lastMinuteAvailable: true
  },
  '2': {
    id: '2',
    name: 'The Golden Dragon',
    thumbnailUrl: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=800&auto=format&fit=crop',
    location: 'Cork',
    cuisine: 'Chinese',
    hasEarlyBird: true,
    hasLastMinute: false,
    description: 'Award-winning Chinese restaurant offering classic dishes alongside innovative specialties. Family-owned for three generations.',
    images: [
      'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&auto=format&fit=crop'
    ],
    address: '15 Patrick Street, Cork',
    phone: '+353 21 987 6543',
    openingHours: 'Mon-Sun: 12:00-23:00',
    earlyBirdOffers: [
      {
        id: 'early2',
        title: 'Early Week Special',
        description: 'Banquet menu for two €50',
        availableTimes: '17:30-19:30, Monday-Thursday'
      }
    ],
    lastMinuteAvailable: false
  },
  // Additional restaurants would be detailed here
};

// API service
export const apiService = {
  // Get all restaurants
  getRestaurants: async (): Promise<Restaurant[]> => {
    // In a real app: return fetch(`${API_BASE_URL}/restaurants`).then(res => res.json());
    return new Promise(resolve => {
      setTimeout(() => resolve(mockRestaurants), 500);
    });
  },

  // Get restaurant by ID
  getRestaurantById: async (id: string): Promise<RestaurantDetail> => {
    // In a real app: return fetch(`${API_BASE_URL}/restaurants/${id}`).then(res => res.json());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const restaurant = mockRestaurantDetails[id];
        if (restaurant) {
          resolve(restaurant);
        } else {
          reject({ code: 'RESTAURANT_NOT_FOUND', message: 'Restaurant not found' });
        }
      }, 500);
    });
  },

  // Get restaurant availability
  getRestaurantAvailability: async (id: string, date: string): Promise<RestaurantAvailability> => {
    // In a real app: return fetch(`${API_BASE_URL}/restaurants/${id}/availability?date=${date}`).then(res => res.json());
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          restaurantId: id,
          date,
          availableSlots: [
            { time: '17:30', type: 'earlyBird', offerId: id === '1' ? 'early1' : 'early2' },
            { time: '18:00', type: 'earlyBird', offerId: id === '1' ? 'early1' : 'early2' },
            { time: '18:30', type: 'earlyBird', offerId: id === '1' ? 'early1' : 'early2' },
            { time: '19:00', type: 'regular' },
            { time: '19:30', type: 'regular' },
            { time: '20:00', type: 'regular' },
            { time: '20:30', type: 'lastMinute', discount: '20%' },
            { time: '21:00', type: 'lastMinute', discount: '25%' }
          ].filter(slot => {
            // Remove lastMinute slots for restaurants that don't offer them
            if (slot.type === 'lastMinute' && !mockRestaurants.find(r => r.id === id)?.hasLastMinute) {
              return false;
            }
            // Remove earlyBird slots for restaurants that don't offer them
            if (slot.type === 'earlyBird' && !mockRestaurants.find(r => r.id === id)?.hasEarlyBird) {
              return false;
            }
            return true;
          })
        });
      }, 500);
    });
  },

  // Create booking
  createBooking: async (bookingData: BookingRequest): Promise<BookingResponse> => {
    // In a real app: return fetch(`${API_BASE_URL}/bookings`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(bookingData)
    // }).then(res => res.json());

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Basic validation
        if (!bookingData.customerEmail.includes('@')) {
          reject({
            code: 'VALIDATION_ERROR',
            message: 'The request contains invalid data',
            details: {
              fields: [
                {
                  field: 'email',
                  code: 'INVALID_FORMAT',
                  message: 'Email address format is invalid'
                }
              ]
            }
          });
          return;
        }

        const restaurant = mockRestaurants.find(r => r.id === bookingData.restaurantId);
        
        if (!restaurant) {
          reject({
            code: 'RESTAURANT_NOT_FOUND',
            message: 'Restaurant not found'
          });
          return;
        }

        resolve({
          id: `booking-${Math.floor(Math.random() * 10000)}`,
          status: 'confirmed',
          restaurantId: bookingData.restaurantId,
          restaurantName: restaurant.name,
          date: bookingData.date,
          time: bookingData.time,
          partySize: bookingData.partySize,
          customerName: bookingData.customerName,
          confirmationCode: `DINE${Math.floor(10000 + Math.random() * 90000)}`
        });
      }, 700);
    });
  },

  // Get booking by ID
  getBookingById: async (id: string): Promise<BookingResponse> => {
    // In a real app: return fetch(`${API_BASE_URL}/bookings/${id}`).then(res => res.json());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock booking - in reality would fetch from API
        if (id.startsWith('booking-')) {
          const randomRestaurantId = Math.floor(Math.random() * mockRestaurants.length + 1).toString();
          const restaurant = mockRestaurants.find(r => r.id === randomRestaurantId) || mockRestaurants[0];
          
          resolve({
            id,
            status: 'confirmed',
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            date: '2023-10-15',
            time: '18:00',
            partySize: 4,
            customerName: 'John Smith',
            confirmationCode: `DINE${Math.floor(10000 + Math.random() * 90000)}`
          });
        } else {
          reject({
            code: 'BOOKING_NOT_FOUND',
            message: 'Booking not found'
          });
        }
      }, 500);
    });
  }
};
