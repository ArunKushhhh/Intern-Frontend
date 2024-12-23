import React from 'react';
import LoginButton from './LoginButton';
import GithubLogo from '../assets/github.svg';
import BitbucketLogo from '../assets/bitbucket.svg';
import AzureLogo from '../assets/azure.svg';
import GitlabLogo from '../assets/gitlab.svg';
import SsoLogo from '../assets/sso.svg';

const LoginOptions = ({ activeMethod }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6">
      {activeMethod === 'SAAS' && (
        <>
          <LoginButton imgSrc={GithubLogo} text="Github" path='/Home'/>
          <LoginButton imgSrc={BitbucketLogo} text="Bitbucket" path={''}/>
          <LoginButton imgSrc={AzureLogo} text="Azure Devops" path={''}/>
          <LoginButton imgSrc={GitlabLogo} text="Gitlab" path={''}/>
        </>
      )}
      {activeMethod === 'Self Hosted' && (
        <>
          <LoginButton imgSrc={GitlabLogo} text="Gitlab" path={''}/>
          <LoginButton imgSrc={SsoLogo} text="SSO" path={''}/>
        </>
      )}
    </div>
  );
};

export default LoginOptions;
