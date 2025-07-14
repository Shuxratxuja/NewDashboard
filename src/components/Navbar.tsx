import { useNavigate } from 'react-router-dom'
import InputComponent from './Input'
import { Avatar, Button, Popconfirm, Popover } from 'antd'
import Cookies from 'js-cookie'


// const navigate = useNavigate()

//   const handleLogout = () => {
//     Cookies.remove('token') 
//     navigate('/login') 
//   }

const content = (
  
  <div className='flex flex-col gap-2'>
    <p>Content</p>
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      okText="Yes"
      cancelText="No"
      // onConfirm={handleLogout}
    >
      <Button danger>Log Out</Button>
    </Popconfirm>
  </div>
)




type NavbarProps = {
  headTitle: string,
}

export const Navbar = ({ headTitle }: NavbarProps) => {

  return (
    <div className='border-b border-b-[#363740] w-[1280px] '>
      <div className='flex justify-between pl-[60px] pr-[60px] pt-[35px] pb-[35px]'>
        <p className='font-bold text-[32px] leading-[92%]'>{headTitle}</p>
          <div className='flex items-center gap-4'>
          <InputComponent />
          <Popover content={content} title="Settings" trigger="click">
            <Avatar size={40} />
          </Popover>
        </div> 
      </div>
    </div>
  )
}
