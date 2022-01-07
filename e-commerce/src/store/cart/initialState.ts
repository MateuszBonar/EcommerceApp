export const initialStateCart = {
  id: '',
  created: '',
  line_total: {
    formatted_with_symbol: '',
  },
  subtotal: {
    formatted_with_symbol: '',
  },
  line_items: [],
  total_items: null,
};

export const initialStateModuleCart = {
  carts: initialStateCart,
  error: null,
  isLoading: false,
};
