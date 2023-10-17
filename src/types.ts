export type ID = string | number;

export type Column = {
  id: ID;
  title: string;
};

interface Props {
  column: Column;
}
