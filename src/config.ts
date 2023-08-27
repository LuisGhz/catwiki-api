import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  catApiKey: process.env.CAT_API_KEY,
  catApiUrl: process.env.CAT_API_URL,
}));
