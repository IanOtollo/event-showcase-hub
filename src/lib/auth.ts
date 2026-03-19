
export type Role = "admin" | "editor" | "viewer";

export interface User {
  id: string;
  name: string;
  role: Role;
}

const STORAGE_KEY = "moses_musah_auth_user";

export const auth = {
  login: (name: string, role: Role): User => {
    const user: User = { id: Math.random().toString(36).substr(2, 9), name, role };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },
  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
  getUser: (): User | null => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },
  isAuthenticated: (): boolean => {
    return localStorage.getItem(STORAGE_KEY) !== null;
  },
  hasRole: (roles: Role[]): boolean => {
    const user = auth.getUser();
    return user ? roles.includes(user.role) : false;
  }
};
