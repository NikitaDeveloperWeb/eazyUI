import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import CloseIcon from '@material-ui/icons/Close';
interface ModalProps {
  title?: string;
  content?: JSX.Element | Element | JSX.Element[] | Element[];
}

function Modal({ title, content }: ModalProps) {
  const [open, setOpen] = React.useState(false);

  const handlerOpen = (state: boolean) => {
    setOpen(!state);
  };

  let ButtonModal = styled.div({});
  let Modal = styled.div({
    position: 'absolute',
    zIndex: 10000,
    width: '100vw',
    height: '100vh',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  let HeaderModal = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
  let HeaderTitle = styled.h2({ display: 'flex', flexDirection: 'row' });
  let ModalContent = styled.div({
    width: 400,
    height: '0 auto',
    padding: 10,
    borderRadius: 10,
  });
  let Content = styled.div({
    width: '100%',
    height: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  });
  return (
    <div>
      <ButtonModal>
        <Button
          type="button"
          width={200}
          heigth={30}
          bgColor="#707ED7"
          bgColorHover="#4B5ED7"
          fontColor="#fff"
          radius="5px"
          typeButtons="primory"
          value="Открыть"
          border="none"
          onClick={() => {
            handlerOpen(open);
          }}
        />
      </ButtonModal>
      {open && (
        <Modal>
          <ModalContent>
            <HeaderModal>
              <HeaderTitle>{title}</HeaderTitle>
              <CloseIcon
                onClick={() => {
                  handlerOpen(open);
                }}
              />
            </HeaderModal>
            <Content>{content}</Content>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default Modal;
