import { FC, PropsWithChildren } from "react";
import './style.scss';

interface IPropsTable extends PropsWithChildren {
  className?: string;
}

interface IPropsTableHeader {
  title: string;
  onClose?: () => void;
}

interface IPropsTextElementTable {
  text: string;
}

const Table: FC<IPropsTable> = (props) => {
  const { children, className } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

const TableHeader: FC<IPropsTableHeader> = (props) => {
  const { title, onClose } = props;

  return (
    <div className="p-1 flexRow containerTableHeader">
      <p className="m-0 fs-s bold">{title}</p>
      {onClose && <button onClick={onClose}>Volver</button>}
    </div>
  );
};

const TextElementTable: FC<IPropsTextElementTable> = (props) => {
  const { text } = props;

  return (
    <p className="p-1 textElementTable">{text}</p>
  );
};


export { Table, TableHeader, TextElementTable };