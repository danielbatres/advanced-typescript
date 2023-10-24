export interface StringValidator {
  isAcceptable(s: string): boolean;
}

/**
 * Interface for all users
 */
export interface CustomUser {
  name: string
}

let user: CustomUser;