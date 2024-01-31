import React, { useState } from "react";

// Higher Order Component for Authentication
const withAuthentication = (WrappedComponent, { onLogin, onLogout } = {}) => {
  const AuthenticationWrapper = (props) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
      // Simulate authentication logic
      // In a real application, this would involve checking credentials against a server
      setUser({ username });

      // Call the onLogin function if provided
      if (onLogin) {
        onLogin({ username });
      }
    };

    const logout = () => {
      setUser(null);

      // Call the onLogout function if provided
      if (onLogout) {
        onLogout();
      }
    };

    return (
      <WrappedComponent {...props} user={user} login={login} logout={logout} />
    );
  };

  return AuthenticationWrapper;
};

// Component that will be wrapped by the HOC
const Profile = ({ user, login, logout }) => {
  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in:</p>
          <button onClick={() => login("john_doe", "password123")}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

// Wrap Profile component with the Authentication HOC
const AuthenticatedProfile = withAuthentication(Profile, {
  onLogin: ({ username }) => {
    console.log(`User ${username} logged in.`);
  },
  onLogout: () => {
    console.log("User logged out.");
  }
});

console.log(AuthenticatedProfile);

export default AuthenticatedProfile;
