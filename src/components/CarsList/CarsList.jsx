import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCarsThunk } from '../../redux/CarsThunk';
import { CarItem } from '../CarItem/CarItem';
import { ToastContainer } from 'react-toastify';
import { selectCars, selectLoadMore } from '../../redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { List } from './CarsList.styled';
import { LoadMoreBtn } from 'components/LoadBTN/LoadBtn';
import { SearchForm } from '../SearchForm/SearchForm';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const btnLoadMore = useSelector(selectLoadMore);
  const [page, setPage] = useState(1);
  const [model, setModel] = useState('');

  useEffect(() => {
    dispatch(getCarsThunk(page));
  }, [dispatch, page]);

  const onClickLoadMore = () => {
    setPage(page => page + 1);
  };
  const handelCarModelSearch = model => {
    setModel(model);
  };
  const filteredCars = cars.filter(({ make }) =>
    model ? make.trim().toLowerCase() === model.trim().toLowerCase() : true
  );

  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" />
      <SearchForm handleSearch={handelCarModelSearch} />
      <List>
        {filteredCars.map(
          ({ id, model, img, type, description, year, rentalPrice, mileage, rentalConditions, make,address, rentalCompany,functionalities,fuelConsumption,accessories,  engineSize }) => (
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
              mileage={mileage}
              accessories={accessories}
              functionalities={functionalities}
              engineSize={engineSize}
              fuelConsumption={fuelConsumption}
              rentalConditions={rentalConditions}
              address={address}
              id={id}
            />
          )
        )}
      </List>
      {btnLoadMore && !model && (
        <LoadMoreBtn
          onClickRender={() => {
            onClickLoadMore();
            dispatch(getCarsThunk(page + 1));
          }}
        />
      )}
    </>
  );
};
