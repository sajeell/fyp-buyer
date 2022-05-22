import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { drawerPage } from '../../../redux/loader/loader.action'
import './ProfileSidebar.css'

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
