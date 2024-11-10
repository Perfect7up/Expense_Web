import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import authApi from '../../api/auth.api';
import {
  getUserToken,
  setUserToken,
  getStoredUser,
  setStoredUser,
  removeLocalData
} from '../../utils/storage';

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface User {
  id: string;
  full_name: string;
  email: string;
  // Add any other user fields you may have
}

interface Token {
  token: string;
}

// Define the structure of the API response for login and signup
interface AuthResponse {
  user: User;
  token: Token;
}

// Define the structure of the auth slice state
interface AuthState {
  token: string | null;
  user: User | null;
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  errors: string | null;
}

// Initialize the initial state of the auth slice
const initialState: AuthState = {
  token: getUserToken(), // Initialize from localStorage if available
  user: getStoredUser(), // Initialize from localStorage if available
  status: 'idle',
  errors: null
};

// Async thunk for login
export const loginAsync = createAsyncThunk<AuthResponse, LoginPayload, { rejectValue: string }>(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.errors || error.message);
    }
  }
);

// Async thunk for signup
export const signupAsync = createAsyncThunk<AuthResponse, SignupPayload, { rejectValue: string }>(
  'signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authApi.signup(credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.errors || error.message);
    }
  }
);

// Async thunk for logout
export const logoutAsync = createAsyncThunk<void, void, { rejectValue: string }>(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.logout();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.errors || error.message);
    }
  }
);

// Define the auth slice with typed reducers and extra reducers
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthResponse>) => {
      const { user, token } = action.payload;
      state.token = token.token;
      state.user = user;
      state.errors = null;
      setUserToken(token.token); // Persist to localStorage
      setStoredUser(user); // Persist to localStorage
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.errors = null;
      state.status = 'idle';
      removeLocalData(); // Clear localStorage
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.status = 'succeed';
        state.user = action.payload.user;
        state.token = action.payload.token.token;
        setUserToken(action.payload.token.token); // Persist token
        setStoredUser(action.payload.user); // Persist user
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload || 'An error occurred';
      });

    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupAsync.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.status = 'succeed';
        state.user = action.payload.user;
        state.token = action.payload.token.token;
        setUserToken(action.payload.token.token); // Persist token
        setStoredUser(action.payload.user); // Persist user
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload || 'An error occurred';
      });

    builder
      .addCase(logoutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = 'succeed';
        state.user = null;
        state.token = null;
        removeLocalData(); // Clear localStorage on logout
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload || 'An error occurred';
      });
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
