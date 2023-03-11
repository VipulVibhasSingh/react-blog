import mongoUR from './prod.js';
import mongoURI from './dev.js';

const config = process.env.NODE_ENV === 'production' ? mongoUR : mongoURI;

export default config;