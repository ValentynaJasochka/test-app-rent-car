

// import updateSearchParams from 'utils/updateSearchParams';
// import { useSearchParams } from 'react-router-dom';
// import { SearchParamsKeys } from 'constants/index';
import { Button } from './LoadBtn.styled';


export const LoadMoreBtn = ({onClickRender}) => {


  return (
    <>
    <Button type='button'  onClick={onClickRender}> Load more</Button>
    </>
  );
};

