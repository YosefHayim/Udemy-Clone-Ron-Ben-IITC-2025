import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null, // Começa vazio
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload; // Atualiza o estado com os dados do usuário
    },
  },
});

export const { setUser } = userSlice.actions; // Exporta a ação
export default userSlice.reducer; // Exporta o reducer
