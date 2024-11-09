import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/auth.api';

interface login {
  email: string;
  password: string;
}

interface signup {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const loginAsync = createAsyncThunk(
  'login',
  async (credentials: login, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors || error.message);
    }
  }
);

export const signupAsync = createAsyncThunk(
  'signup',
  async (credentials: signup, { rejectWithValue }) => {
    try {
      const response = await authApi.signup(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors || error.message);
    }
  }
);

export const logoutAsync = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
  try {
    const response = await authApi.logout();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.errors || error.message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    status: 'idle',
    errors: null // Add an errors field in the state
  },
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.token = token.token;
      state.user = user;
      state.errors = null; // Clear any previous errors
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.errors = null; // Clear errors on logout
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload; // Store the error message or validation details
      });

    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.user = action.payload;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload; // Store the error message or validation details
      });

    builder
      .addCase(logoutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = 'succeed';
        state.user = null;
        state.token = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.errors = action.payload; // Store the error message or validation details
      });
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
