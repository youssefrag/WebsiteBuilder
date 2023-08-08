export interface User {
  name: string;
  email: string;
}

export interface UserSliceState {
  user: User | null;
}
