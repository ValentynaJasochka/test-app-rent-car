import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';

import {
  Btn,
  FavoriteBTN,
  Img,
  ImgWrapper,
  Item,
  MainTextBlock,
  MainTextInfo,
  TextBlock,
  TextContainer,
  TextInfo,
} from './CarItem.styled';
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
  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const [showModal, setShowModal] = useState(false);
  const favoriteCarsID = useSelector(selectFavorite)
  const isFavorite = favoriteCarsID.includes(id)

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

        <TextContainer>
          <MainTextBlock>           
              <MainTextInfo>{`${make}, ${year}`}</MainTextInfo>
            <MainTextInfo>{rentalPrice}</MainTextInfo>
          </MainTextBlock>
          <TextBlock>
            <TextInfo>{city}</TextInfo>
            <TextInfo>{country}</TextInfo>
            <TextInfo>{rentalCompany}</TextInfo>
            <TextInfo>Premium</TextInfo>
          </TextBlock>
          <TextBlock>
            <TextInfo>{type}</TextInfo>
            <TextInfo>{model}</TextInfo>
            <TextInfo>{id}</TextInfo>
            <TextInfo>{functionalities[0]}</TextInfo>{' '}
          </TextBlock>
        </TextContainer>
        <Btn type="button" onClick={toggleModal}>
          Learn more
        </Btn>

        <FavoriteBTN size={18} isFavorite={isFavorite} onClick={() => setFavorite(id)} />
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
