import { selectFavorite } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL } from '../../constants/constants';
import { CarItem } from '../../components/CarItem/CarItem';
import { List } from './Favorites.styled';

axios.defaults.baseURL = URL;


const FavoriteCars = () => {
  const dispatch = useDispatch();
  const [favoriteCars, setFavoriteCars] = useState([]);
  const favoriteId = useSelector(selectFavorite);

  const fetchFavoriteCar = async id => {
    try {
      const response = await axios.get(`/advert/${id}`);

      return response.data;
    } catch (error) {
      toast.error('Oops! Something went wrong! Try reloading the page!');
    }
  };

  useEffect(() => {
    const getFavoritesCars = async () => {
      try {
        const promises = favoriteId.map(id => fetchFavoriteCar(id));
        const fetchResult = await Promise.allSettled(promises);

        const favoritesCars = fetchResult.filter(
          ({ status }) => status === 'fulfilled'
        );
        const result = favoritesCars.map(item => item.value);
        setFavoriteCars(result);
      } catch (error) {}
    };
    getFavoritesCars();
  }, [favoriteId, dispatch]);

  return (
    <>
     
      <List>
        {favoriteCars.map(
          ({  id, model, img, type, description, year, rentalPrice, make,address, rentalCompany,functionalities  }) => (
            <CarItem
            key={id}
            model={model}
            type={type}
            description={description}
            year={year}
            make={make}
            rentalCompany ={rentalCompany}
            rentalPrice={rentalPrice}
            img={img}
            functionalities={functionalities}
            address={address}
            id={id}
            />
          )
        )}
      </List>
    </>
  );
};
export default FavoriteCars;
