import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ model,
  type,
  description,
  year,
  rentalPrice,
  img,
  id, onClose}) => {
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
      <ModalImg>
        <img src={img} alt={description} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};

{/* <Content>
        <ImgContainer>
          <Img src={img} alt="" />
        </ImgContainer>
        <MainText>
          <h2>
            {make}
            <TextAccent> {model}</TextAccent>, {year}
          </h2>
        </MainText>
        <AdditionalTextBlock>
          <AdditionalText>{city}</AdditionalText>
          <AdditionalText>{country}</AdditionalText>
          <AdditionalText>Id: {id}</AdditionalText>
          <AdditionalText>Year: {year}</AdditionalText>
          <AdditionalText>Type: {type}</AdditionalText>
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          <AdditionalText>Fuel Consumption: {fuelConsumption}</AdditionalText>
          <AdditionalText>Engine Size: {engineSize}</AdditionalText>
        </AdditionalTextBlock>
        <Description>{description}</Description>
        <BlockTitle>Accessories and functionalities:</BlockTitle>
        <AdditionalTextBlock>
          {accessories.map(item => (
            <AdditionalText key={item}>{item}</AdditionalText>
          ))}
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          {functionalities.map(item => (
            <AdditionalText key={item}>{item}</AdditionalText>
          ))}
        </AdditionalTextBlock>
        <BlockTitle>Rental Conditions:</BlockTitle>
        <ConditionList>
          {parsedRentalConditions.map(item => (
            <Condition key={item}>{item}</Condition>
          ))}
          <Condition>
            Mileage: <Value>{formattedMileage}</Value>
          </Condition>
          <Condition>
            Price: <Value>{rentalPrice}</Value>
          </Condition>
        </ConditionList>
        <Btn href="tel:+380730000000">Rental car</Btn>
        {/* {isModalOpen && <Modal close={closeModal} />} */}
      // </Content> */}
