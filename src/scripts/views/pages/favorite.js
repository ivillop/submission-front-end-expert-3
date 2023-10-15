import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { listRestaurantCard } from '../templates/template-restaurant';
import FavoriteRestaurantShow from './liked-restaurants/favorite-restaurant-show';
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurant-view';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#data-kuliner');
    const loadingIndicator = document.querySelector('#loading-indicator');
    const errorMessage = document.querySelector('#error-message');
    try {
      loadingIndicator.style.display = 'flex';
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      // eslint-disable-next-line no-new
      new FavoriteRestaurantShow({ view, favoriteRestaurants: FavoriteRestaurantIdb });
      loadingIndicator.style.display = 'none';
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += listRestaurantCard(resto);
      });
    } catch (error) {
      console.error(error);
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.style.display = 'flex';
      loadingIndicator.style.display = 'none';
      restaurantContainer.style.display = 'none';
    }
  },
};

export default Favorite;
