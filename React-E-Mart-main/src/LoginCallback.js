import React, { useEffect, useState } from 'react';
import { getTokenFromUrl, decodeToken } from './useAuth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { idToken } = getTokenFromUrl();
    if (idToken) {
      const userInfo = decodeToken(idToken);
      console.log('Decoded Token:', userInfo);
      localStorage.setItem('id_token', idToken);
      setUser(userInfo);
      // optionally: clean URL
      window.history.replaceState(null, '', '/');
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Your SaaS App</h1>
      {user ? (
        <p>Hello, {user.email || user.username}</p>
      ) : (
        <a href="https://YOUR_COGNITO_DOMAIN/oauth2/authorize?...">Login</a>
      )}
    </div>
  );
}

export default App;
