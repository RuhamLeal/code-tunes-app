import { CLEAN_UPDATED_USER } from './types.js';

export default function cleanUpdatedUserMessage() {
  return {
    type: CLEAN_UPDATED_USER,
  };
}
