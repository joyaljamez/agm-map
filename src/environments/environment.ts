import { AppConfig } from 'src/app/shared/models/interfaces/app-config';
import { apiEndpoints } from './rest-api-endpoints';
export const appConfig: AppConfig = {
  environment: 'DEVELOPMENT',
  description: 'Application is under construction - Debugging is enabled here!',
  production: false,
  apiBaseUrls: { 'api-1': 'http://13.232.232.76:8000/' },
  firebase: {},
  apiEndpoints: apiEndpoints,
};
export const environment = Object.assign(appConfig);
