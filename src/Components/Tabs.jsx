import React, { useState } from 'react'
import Navtab from './Navtab'
import Repo from '../assets/repo.svg'
import RepoW from '../assets/repo-white.svg'
import AICode from '../assets/nocode.svg'
import AICodeW from '../assets/nocode-white.svg'
import Cloud from '../assets/cloud.svg'
import CloudW from '../assets/cloud-white.svg'
import Book from '../assets/book.svg'
import BookW from '../assets/book-white.svg'
import Settings from '../assets/settings.svg'
import SettingsW from '../assets/settings-white.svg'
import Call from '../assets/call.svg'
import Logout from '../assets/logout.svg'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Repositories") // Default active tab

  const tabs = [
    { icon: Repo, activeIcon: RepoW, tab: "Repositories" },
    { icon: AICode, activeIcon: AICodeW, tab: "AI Code Review" },
    { icon: Cloud, activeIcon: CloudW, tab: "Cloud Security" },
    { icon: Book, activeIcon: BookW, tab: "How to Use" },
    { icon: Settings, activeIcon: SettingsW, tab: "Settings" },
  ]

  const bottomTabs = [
    { icon: Call, tab: "Support" },
    { icon: Logout, tab: "Logout" },
  ]

  return (
    <div className='w-full h-full'>
      <div className='h-full flex flex-col justify-between'>
        <div>
          {tabs.map(({ icon, activeIcon, tab }) => (
            <Navtab
              key={tab}
              icon={activeTab === tab && activeIcon ? activeIcon : icon} // Switch icon for Repositories
              tab={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <div>
          {bottomTabs.map(({ icon, tab }) => (
            <Navtab
              key={tab}
              icon={icon}
              tab={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tabs
