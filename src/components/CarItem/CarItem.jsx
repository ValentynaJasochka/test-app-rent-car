import { useDispatch} from 'react-redux';

import { Btn, FavoriteBTN, Img, ImgWrapper, Item } from './CarItem.styled';
// import { ReactComponent as FavoriteMark } from '../../image/heart.svg';
import { handleFavorite } from '../../redux/FavoriteSlice';

// import { selectShowModal } from '../../redux/selectors';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const CarItem = ({
  model,
  make,
  type,
  description,
  year,
  rentalPrice,
  img,
  address,
  rentalCompany,
  functionalities,
  id,
}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const setFavorite = id => {
   
    dispatch(handleFavorite(id));
  };

  return (
    <>
      <Item>
        <ImgWrapper>
          <Img src={img} alt={description} />
        </ImgWrapper>

        <p>
          {make}
          {year}
          {rentalPrice}
        </p>
        <p>{address}
         {rentalCompany}
          {type} 
          {model} 
          {id} 
          {functionalities[0]}</p>
        <Btn type="button" onClick={toggleModal}>Learn more</Btn>
       
        <FavoriteBTN size={18} onClick={() => setFavorite(id)} />
      </Item>

      {showModal && (
        <Modal
          model={model}
          type={type}
          description={description}
          year={year}
          rentalPrice={rentalPrice}
          img={img}
          id={id}
          onClose={toggleModal}
        />
      )}
    </>
  );
};
