import React from 'react';
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './normalize.css';
interface SelectProps {
  placeholder: string;
  options: string[];
  width?: string | number;
  height?: string | number;
  bgColor?: string;
  border?: string;
  radius?: string;
  bgColorHover?: string;
}

function Select({
  placeholder,
  options,
  width,
  height,
  bgColor,
  border,
  radius,
  bgColorHover,
}: SelectProps) {
  const [open, setOpen] = React.useState(false);

  const handlerOpen = (state: boolean) => {
    setOpen(!state);
  };

  let Select = styled.div({
    width: width,
    height: height,
    background: bgColor,
    // border: border,
    borderRadius: radius,
  });
  let SelectView = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    background: 'inherit',
    border: border,
    borderRadius: radius,
    cursor: 'pointer',
  });
  let OptionsDiv = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    background: 'inherit',
    borderRadius: radius,
    borderLeft: border,
    borderRight: border,
    borderBottom: border,
  });
  let Options = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    background: 'inherit',
    cursor: 'pointer',
    ':hover': {
      background: bgColorHover,
    },
  });
  return (
    <Select>
      <SelectView onClick={() => handlerOpen(open)}>
        {placeholder}
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </SelectView>
      {open && (
        <OptionsDiv>
          {options.map((opt, index) => (
            <Options key={`opt ${index}+ ${opt}`}>{opt}</Options>
          ))}
        </OptionsDiv>
      )}
    </Select>
  );
}

export default Select;
