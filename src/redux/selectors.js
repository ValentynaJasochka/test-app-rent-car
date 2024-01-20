export const selectFavorite = state => state.favorite.id;
export const selectCars= state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectLoadMore = state => state.cars.loadMore;

