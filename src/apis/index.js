import { signFactory } from './signAPIs';
import { authFactory } from './authAPIs';

const baseUrl = process.env.REACT_APP_API_URL;

const signAPIs = signFactory({
  baseUrl: `${baseUrl}/oauth2/authorization`,
});

const authAPIs = authFactory({
  baseUrl: `${baseUrl}/auth`,
});

export { signAPIs, authAPIs };
