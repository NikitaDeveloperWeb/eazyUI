import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
interface DocumetationBlockProps {
  title: string;
  description: string;
}
function DocumentationBlock({ title, description }: DocumetationBlockProps) {
  const [open, setOpen] = React.useState(false);

  const handlerOpen = (state: boolean) => {
    setOpen(!state);
  };
  return (
    <div className="documentation__block">
      <h2
        onClick={() => {
          handlerOpen(open);
        }}>
        {title} {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </h2>
      <div className={open ? 'documentation__block__description' : 'close'}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DocumentationBlock;
