import { RESET_AUTH } from './types.js';

export default function resetAuthorized() {
  return {
    type: RESET_AUTH,
  };
}
