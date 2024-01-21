import { BackLink } from "./Catalog.styled";
import {  useSelector } from 'react-redux';
import { CarsList } from "components/CarsList/CarsList";
import { selectIsLoading } from "../../redux/selectors";
import { Loader } from "components/Loader/Loader";
const Catalog = () => {
  const isLoading = useSelector(selectIsLoading) 
  return (
    <>
      <BackLink >Go back</BackLink>     
      <CarsList/>
      {isLoading && <Loader/>}

    </>
  );
};
export default Catalog;
