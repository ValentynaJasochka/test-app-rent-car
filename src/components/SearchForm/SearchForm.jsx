import { carsBrand } from '../../constants/searchForm';
import { useState } from 'react';
import { Button, Label,Form } from './SearchForm.styled';
import { toast } from 'react-toastify';

const carsBrandTolowercase = carsBrand.map(el => el.toLocaleLowerCase());

export const SearchForm = ({ handleSearch }) => {
  const [chosenModel, setChosenModel] = useState('');

  const handleChosenModel = event => {
    setChosenModel(event.currentTarget.value.trim().toLowerCase());
  };
  const changeFilter = event => {
    event.preventDefault();
    const car = chosenModel.trim().toLowerCase();

    if (!carsBrandTolowercase.includes(car)) {
      if (car === '') {
        setChosenModel('');
      } else {
        toast.warn('No car model. Enter another request, please!');
        return;
      }
    }
    handleSearch(chosenModel);
  };

  return (
    <>
      <Form onSubmit={changeFilter}>
        <Label>
          <div>Car brand</div>
         <div>
         <input
            list="car-models"
            name="brand"
            placeholder="Enter the text"
            value={chosenModel}
            onChange={handleChosenModel}
          />
          <datalist id="car-models" value={chosenModel}>
            {carsBrand.map(el => (
              <option key ={el}>{el}</option>
            ))}
          </datalist>
         </div>
        </Label>

        <Label>
         <div> Prise/ 1 hour</div>
          <select name="prise">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </Label>
        <Label>
         <div> Сar mileage/km</div>
          <div>
            <input type="text" name="from" placeholder="From" />
          <input type="text" name="from" placeholder="To" />
          </div>
        </Label>
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default SearchForm;
