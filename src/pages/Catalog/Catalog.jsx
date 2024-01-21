
import {  useSelector } from 'react-redux';
import { CarsList } from "components/CarsList/CarsList";
import { selectIsLoading } from "../../redux/selectors";
import { Loader } from "components/Loader/Loader";
const Catalog = () => {
  const isLoading = useSelector(selectIsLoading) 
  return (
    <>
     
      <CarsList/>
      {isLoading && <Loader/>}

    </>
  );
};
export default Catalog;
