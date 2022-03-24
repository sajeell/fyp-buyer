import { useNavigate } from 'react-router-dom'
import { Navigation } from 'react-minimal-side-navigation'
import { useDispatch, useSelector } from 'react-redux'

import './ProfileSidebar.css'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { drawerPage, setDrawerPage } from '../../../redux/loader/loader.action'

const ProfileSidebar = () => {
  const dispatch = useDispatch()
  const activeItemId = useSelector((state) => state.loader.activeItemId)
  const navigate = useNavigate()

  return (
    <div className='profilesidebar-wrapper'>
      <Navigation
        activeItemId={activeItemId}
        onSelect={({ itemId }) => {
          dispatch(drawerPage(itemId))
          return navigate(itemId)
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
