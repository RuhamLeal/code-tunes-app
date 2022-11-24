import { CLEAN_REGISTERED_USER } from './types.js';

export default function cleanRegisterMessage() {
  return {
    type: CLEAN_REGISTERED_USER,
  };
}
