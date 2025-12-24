import axios  from "axios";

const apiClient=axios.create({
   baseURL:import.meta.env.VITE_UNSPLASH_PICTURE_API,
   timeout:5000,
});

apiClient.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token');
  if(token) config.headers.Authorization=`Bearer ${token}`;
  return config;
});


apiClient.interceptors.response.use(
  (response)=>response.data,
  (error)=>{
    return Promise.reject(error);
  }
);

export default apiClient;
