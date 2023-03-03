import { AppConfig } from 'src/app/shared/models/interfaces/app-config';
import { apiEndpoints } from './rest-api-endpoints';
export const appConfig: AppConfig = {
  environment: 'PRODUCTION',
  description: 'Application is in production mode!',
  production: true,
  apiBaseUrls: {
    'api-1': 'http://13.232.232.76:8000/',
  },
  agmApiKey: 'AIzaSyBcnxNl_ozX_BPVYMGxX09UORrlBe0JwjA',
  firebase: {},
  apiEndpoints: apiEndpoints,
};
export const environment = Object.assign(appConfig);
