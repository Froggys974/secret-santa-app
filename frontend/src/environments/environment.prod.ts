import { Environment } from './environment.model';

//add url for prod when
export const environment: Environment = {
  production: true,
  baseApiUrl: 'https://secret-santa-app-98yr.onrender.com',
  baseUrl: 'https://secret-santa-app-sigma.vercel.app/',
  security: {
    allowedOrigins: 'https://secret-santa-app-sigma.vercel.app/', 
  },
};
