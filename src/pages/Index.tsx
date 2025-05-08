
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Restaurant } from '../types/api';
import { apiService } from '../services/api';
import Header from '../components/Header';
import RestaurantGrid from '../components/RestaurantGrid';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'earlyBird' | 'lastMinute'>('all');

  const { data: restaurants, isLoading } = useQuery({
    queryKey: ['restaurants'],
    queryFn: apiService.getRestaurants
  });

  // Filter restaurants based on search term and filter type
  useEffect(() => {
    if (!restaurants) return;

    let filtered = restaurants;
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        restaurant => 
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply type filter
    if (selectedFilter === 'earlyBird') {
      filtered = filtered.filter(restaurant => restaurant.hasEarlyBird);
    } else if (selectedFilter === 'lastMinute') {
      filtered = filtered.filter(restaurant => restaurant.hasLastMinute);
    }
    
    setFilteredRestaurants(filtered);
  }, [restaurants, searchTerm, selectedFilter]);

  return (
    <div className="min-h-screen bg-dineflex-offwhite">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Find Your Perfect Dining Experience</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover restaurants offering early bird and last-minute dining deals across Ireland.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="max-w-md mx-auto relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search restaurants, cuisines, or locations" 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedFilter === 'all'
                  ? 'bg-dineflex-charcoal text-white'
                  : 'bg-white text-dineflex-charcoal hover:bg-gray-100'
              }`}
            >
              All Restaurants
            </button>
            <button
              onClick={() => setSelectedFilter('earlyBird')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedFilter === 'earlyBird'
                  ? 'bg-dineflex-burgundy text-white'
                  : 'bg-white text-dineflex-burgundy hover:bg-gray-100'
              }`}
            >
              Early Bird Offers
            </button>
            <button
              onClick={() => setSelectedFilter('lastMinute')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedFilter === 'lastMinute'
                  ? 'bg-dineflex-gold text-dineflex-charcoal'
                  : 'bg-white text-dineflex-charcoal hover:bg-gray-100'
              }`}
            >
              Last Minute Deals
            </button>
          </div>
        </div>
        
        <RestaurantGrid 
          restaurants={filteredRestaurants || []} 
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Index;
