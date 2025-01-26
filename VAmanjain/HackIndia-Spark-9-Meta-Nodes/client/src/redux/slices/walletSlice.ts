import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  address: string | null;
}

const initialState: WalletState = {
  address: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress(state, action: PayloadAction<string | null>) {
      state.address = action.payload;
    },
  },
});

export const { setWalletAddress } = walletSlice.actions;
export default walletSlice.reducer;
