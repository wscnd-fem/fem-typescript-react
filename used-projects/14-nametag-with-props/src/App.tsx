import * as React from 'react';

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: 'J Mascis',
  accountId: '123',
  isVerified: true
};

type WithUserProps = {
  user: UserModel;
};

function withCurrentUser(user: UserModel) {
  return function inner<ComponentProps extends WithUserProps>(
    Component: React.FunctionComponent<ComponentProps>
  ) {
    return (props: Omit<ComponentProps, 'user'>) => {
      return <Component {...(props as ComponentProps)} user={user} />;
    };
  };
}

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const WithJMascis = withCurrentUser(currentUser);

const NameTagMascis = WithJMascis(NameTag);

const Application = () => <NameTagMascis salutation="Howdy" />;

export default Application;
