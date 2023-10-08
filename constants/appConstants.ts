import * as Production from './production';
import * as Staging from './staging';
import { isProductionMode } from './appConfig';

export const BASE_API_URL = isProductionMode
  ? Production.BASE_API_URL
  : Staging.BASE_API_URL;