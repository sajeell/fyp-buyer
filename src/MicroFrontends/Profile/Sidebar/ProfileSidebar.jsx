import './ProfileSidebar.css'

import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

const ProfileSidebar = () => {
  return (
    <div className='profilesidebar-wrapper'>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId='/history'
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: 'History',
            itemId: '/history',
          },
          {
            title: 'Details',
            itemId: '/details',
          },
        ]}
      />
    </div>
  )
}

export default ProfileSidebar
