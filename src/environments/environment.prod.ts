
import {AppConfig} from "src/app/shared/models/interfaces/app-config";
import {apiEndpoints} from "./rest-api-endpoints";
export const appConfig: AppConfig = {
  environment: 'PRODUCTION',
  description: 'Application is in production mode!',
  production: true,
  apiBaseUrls: {'api-1': 'http://localhost:3000/','api-2': 'http://localhost:3000/'},
  firebase: {
  },
  apiEndpoints: apiEndpoints
};
export const environment = Object.assign(appConfig);

