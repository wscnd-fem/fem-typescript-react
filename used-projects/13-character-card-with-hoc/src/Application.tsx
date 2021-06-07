import * as React from 'react';
import { CharacterInformation } from './CharacterInformation';
import type { Character } from './characters';
import type { CharacterProps } from './CharacterInformation';
import { fetchCharacter } from './characters';
import { Loading } from './Loading';

function withCharacter<T extends CharacterProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof CharacterProps>) => {
    // function withCharacter<T>(
    //   Component: React.FunctionComponent<T & CharacterProps>
    // ) {
    //   return (props: T) => {
    const [character, setCharacter] = React.useState<Character | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;

    // return character && <Component {...props} character={character} />;
    return character && <Component {...(props as T)} character={character} />;
  };
}

type TestProps = {
  the: number;
  one: string;
};

const OtherComponent: React.FunctionComponent<TestProps> = (props) => {
  return <b>hello</b>;
};

const WithCharacterInformation = withCharacter(CharacterInformation);

const WithCharacterComponent = withCharacter(OtherComponent); //should error

const Application = () => {
  return (
    <main>
      <WithCharacterInformation />
    </main>
  );
};

export default Application;
