type ButtonProps = {
  children: string;
};

type ButtonTypes = {
  primary: boolean;
  secondary: boolean;
  destructive: boolean;
};

type PrimaryButtonProps = {
  primary: boolean;
  secondary?: never;
  destructive?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary: boolean;
  destructive?: never;
};

type DestructiveButtonProps = {
  primary?: never;
  secondary?: never;
  destructive: boolean;
};

// NOTE: not working
// type Mapper<T, U> = {
//   [K in keyof T]: {
//     [J in keyof T]: K extends J ? boolean & U : never;
//   };
// };

// type MappedButtonTypes = Mapper<ButtonTypes, ButtonProps>;
// type PrimaryButtonProps = MappedButtonTypes['primary'];
// type SecondaryButtonProps = MappedButtonTypes['secondary'];
// type DestructiveButtonProps = MappedButtonTypes['destructive'];

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const Button: React.FunctionComponent<
  PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps
> = ({ children, primary = false, secondary = false, destructive = false }) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
