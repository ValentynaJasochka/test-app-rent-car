import { carsBrand } from '../../constants/searchForm';
import { useState } from 'react';
import { Button, Label, Form, Select, Headers, SelectPrise, Input } from './SearchForm.styled';
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
          <Headers>Car brand</Headers>
          <div>          
            <Select id="car-models" width="224px"  onChange={handleChosenModel}>
              <option value="" >
                Enter the text
              </option>
              {carsBrand.map(el => (
                <option key={el} value={el} selected={el===chosenModel}>
                  {el}
                </option>
              ))}
            </Select>
          </div>
        </Label>

        <Label>
          <Headers> Prise/ 1 hour</Headers>
          <SelectPrise name="prise">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </SelectPrise>
        </Label>
        <Label>
          <Headers> Сar mileage/km</Headers>
          <div>
            <Input type="text" name="from" placeholder="From" />
            <Input type="text" name="from" placeholder="To" />
          </div>
        </Label>
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default SearchForm;


