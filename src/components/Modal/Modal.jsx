import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalImg,
  ModalContainer,
  AccentText,
  Heder,
  TextBlock,
  Description,
  DescriptionHeder,
  Condition,
  ConditionItem,
  ConditionBox,
  ConditionValue,
  PhoneBtn,
  CloseBtn,
} from './Modal.styled';

import { TextInfo } from 'components/CarItem/CarItem.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({
  model,
  type,
  description,
  year,
  fuelConsumption,
  mileage,
  accessories,
  rentalPrice,
  rentalConditions,
  engineSize,
  city,
  country,
  functionalities,
  img,
  make,
  id,
  onClose,
}) => {
  const chosenRentalConditions = rentalConditions.split('\n');
  const minAge = chosenRentalConditions[0].toString().split(':')
  const formattedMileage =new Intl.NumberFormat("en-IN").format(mileage)
  
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalContainer>
        <ModalImg>
          <img src={img} alt={description} />
        </ModalImg>
        <div>
          <Heder>
            {make} <AccentText>{model}</AccentText>, {year}
          </Heder>
          <TextBlock>
            <TextInfo>{city}</TextInfo>
            <TextInfo>{country}</TextInfo>
            <TextInfo> Id: {id}</TextInfo>
            <TextInfo>Year: {year}</TextInfo>
            <TextInfo>Type: {type}</TextInfo>
          </TextBlock>
          <TextBlock>
            <TextInfo>Fuel Consumption: {fuelConsumption}</TextInfo>
            <TextInfo>Engine Size: {engineSize}</TextInfo>
          </TextBlock>
          <Description>{description}</Description>
          <div>
            <DescriptionHeder>
              Accessories and functionalities:
            </DescriptionHeder>
            <TextBlock>
              {accessories.map(item => (
                <TextInfo key={item}>{item}</TextInfo>
              ))}
            </TextBlock>
            <TextBlock>
              {functionalities.map(item => (
                <TextInfo key={item}>{item}</TextInfo>
              ))}
            </TextBlock>
            <Condition>
              <DescriptionHeder>Rental Conditions:</DescriptionHeder>
              <ConditionBox>                
              <ConditionItem>Minimum age: <ConditionValue>{minAge[1]}</ConditionValue></ConditionItem>
              <ConditionItem>{chosenRentalConditions[1]}</ConditionItem>
              <ConditionItem>{chosenRentalConditions[2]}</ConditionItem>
              <ConditionItem>Mileage: <ConditionValue>{formattedMileage}</ConditionValue></ConditionItem>
              <ConditionItem>Price: <ConditionValue>{rentalPrice}</ConditionValue></ConditionItem>             
              </ConditionBox>             
            </Condition>
            <PhoneBtn href="tel:+380730000000">Rental car</PhoneBtn>
          </div>
        </div>
        <CloseBtn type='button' onClick={onClose} ></CloseBtn>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

{
  /* <Content>              
      
        <Btn href="tel:+380730000000">Rental car</Btn>
        {/* {isModalOpen && <Modal close={closeModal} />} */
}
// </Content> */}
