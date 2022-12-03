import { useSession } from 'next-auth/react';

const User = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div className="a">

      <main className="b">
        <div className="c">
          {loading && <div className="fff">Loading...</div>}
          {
            session
              && (
              <>
                <h1 className="d">Welcome, {session.user.name ?? session.user.email}!</h1>
                <p style={{ marginBottom: '10px' }}> </p> <br />
                <img src={session.user.image} alt="" className="g" />
              </>
              )
            }
          {
            !session
              && (
              <>
                <p className="e">Please log in to continue</p>
                <img src="https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png" alt="" className="f" />
              </>
              )
           }
        </div>
      </main>
    </div>
  );
};

export default User;
