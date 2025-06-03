// src/services/api.js

import axios from 'axios';

export const fetchAvailableServices = async (serviceType) => {
  try {
    const response = await axios.get(`/api/${serviceType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
  }
};
