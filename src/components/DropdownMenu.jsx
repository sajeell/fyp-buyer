import { useState } from 'react'
import { DropdownItem, Dropdown, DropdownToggle } from 'reactstrap'

import './Components.css'

const DropdownMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className='dropdown-component mt-3'>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default DropdownMenu
