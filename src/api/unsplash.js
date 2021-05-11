import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID xn7SvQQrGqrEsBAZl0FfLmj_ToEJ08m_RfHBL1AQKYQ',
  },
});
