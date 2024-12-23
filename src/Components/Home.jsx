import React from 'react'
import Navbar from './Navbar'
import Repo from './Repo'
import Repolist from './Repolist'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row gap-0 w-full h-full'>
      <div className='md:w-[15%]'>
      <Navbar />
      </div>
      <div className='md:w-[85%] md:p-6 bg-[#FAFAFA]'>
      <div className='md:w-full bg-white  overflow-y-scroll h-full md:rounded-xl border border-[#E9EAEB]'>
      <Repo />
      <Repolist name="design-system" privacy="Public" tech="React" storage="7320 KB" lastUpdated="1 day"/>
      <Repolist name="codeant-ci-app" privacy="Private" tech="Javascript" storage="5871 KB" lastUpdated="2 days"/><Repolist name="analytics-dashboard" privacy="Private" tech="Python" storage="4521 KB" lastUpdated="5 days"/><Repolist name="mobile-app" privacy="Public" tech="Swift" storage="3096 KB" lastUpdated="3 days"/><Repolist name="e-commerce-platform" privacy="Private" tech="Java" storage="6210 KB" lastUpdated="6 days"/><Repolist name="blog-website" privacy="Public" tech="HTML/CSS" storage="1876 KB" lastUpdated="4 days"/>
      <Repolist name="social-network" privacy="Private" tech="PHP" storage="5432 KB" lastUpdated="7 days"/>
      <Repolist name="design-system" privacy="Public" tech="React" storage="7320 KB" lastUpdated="1 day"/>
      <Repolist name="codeant-ci-app" privacy="Private" tech="Javascript" storage="5871 KB" lastUpdated="2 days"/>
      </div>
      </div>
    </div>
  )
}

export default Home
