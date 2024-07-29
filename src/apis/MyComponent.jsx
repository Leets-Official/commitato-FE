import React from 'react';
import UseApiRequest from './useapirequest';

const MyComponent = () => {
  const {
    data: loginData,
    error: loginError,
    loading: loginLoading,
  } = UseApiRequest(
    'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/login/github',
    'GET',
  );

  const {
    data: commitTestData,
    error: commitTestError,
    loading: commitTestLoading,
  } = UseApiRequest(
    'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/commit/test/fetch',
    'POST',
  );

  const {
    data: commitData,
    error: commitError,
    loading: commitLoading,
  } = UseApiRequest(
    'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/commit/fetch',
    'POST',
  );

  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = UseApiRequest(
    'http://ec2-43-201-143-81.ap-northeast-2.compute.amazonaws.com:8080/user/search?githubId=woneeeee',
    'GET',
  );

  return (
    <div>
      {loginLoading && <p>Loading login...</p>}
      {loginError && <p>Login error: {loginError.message}</p>}
      {loginData && <p>Login data: {JSON.stringify(loginData)}</p>}

      {commitTestLoading && <p>Loading commit test data...</p>}
      {commitTestError && <p>Commit test error: {commitTestError.message}</p>}
      {commitTestData && (
        <p>Commit test data: {JSON.stringify(commitTestData)}</p>
      )}

      {commitLoading && <p>Loading commit data...</p>}
      {commitError && <p>Commit error: {commitError.message}</p>}
      {commitData && <p>Commit data: {JSON.stringify(commitData)}</p>}

      {userLoading && <p>Loading user data...</p>}
      {userError && <p>User error: {userError.message}</p>}
      {userData && <p>User data: {JSON.stringify(userData)}</p>}
    </div>
  );
};

export default MyComponent;
