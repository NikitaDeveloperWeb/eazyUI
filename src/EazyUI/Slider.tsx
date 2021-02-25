import React from 'react';
import styled from '@emotion/styled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
interface SliderProps {
  photos: string[];
}

function Slider({ photos }: SliderProps) {
  const [photo, setPhoto] = React.useState(0);

  const handlerPhotosNext = (photo: number) => {
    photo++;
    if (photo < photos.length) {
      setPhoto(photo);
    } else {
      photo = 0;
      setPhoto(photo);
    }
  };
  const handlerPhotosPrew = (photo: number) => {
    photo--;
    if (photo >= 0) {
      setPhoto(photo);
    } else {
      photo = photos.length - 1;
      setPhoto(photo);
    }
  };

  let SliderWrapper = styled.div({
    width: 500,
    height: 400,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #E7E7EE',
    borderRadius: 10,
  });
  let Photo = styled.div({ width: '100%', heigth: '100%' });
  let Image = styled.img({
    width: '100%',
    heigth: '100%',
  });
  let Pult = styled.div({
    width: '100%',
    height: 50,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  return (
    <SliderWrapper>
      <Photo>
        <Image src={photos[photo]} />
      </Photo>
      <Pult className="pult">
        <SkipPreviousIcon onClick={() => handlerPhotosNext(photo)} />
        <SkipNextIcon onClick={() => handlerPhotosPrew(photo)} />
      </Pult>
    </SliderWrapper>
  );
}

export default Slider;
