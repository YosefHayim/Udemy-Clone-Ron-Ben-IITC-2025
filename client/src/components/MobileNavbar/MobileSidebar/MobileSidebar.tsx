import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {
  firstDividerList,
  secondDividerList,
  thirdDividerList,
} from '@/utils/mobileSidebarCategories';
import { IoIosArrowForward } from 'react-icons/io';
import ChangeLanguage from '@/components/Navbar/DropDownMenu/ChangeLanguage/ChangeLanguage';

const style = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'start',
  ':hover': {
    background: '#EDE5FA',
  },
};

const MobileSidebar = ({ showSidebar, setShowSidebar }) => {
  const DrawerList = (
    <Box sx={{ width: 250, fontSize: '14px' }} role="presentation">
      <List>
        {firstDividerList.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                width: '100%',
                margin: '1px',
                color: '#6d28d2',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                ':hover': {
                  background: '#EDE5FA',
                },
              }}
            >
              <div className="flex w-full items-center justify-between">
                <p>{text}</p>
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ border: '1px solid gray-100' }} />
      <List>
        <ListItemButton
          sx={{
            width: '100%',
            margin: '1px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'start',
            ':hover': {
              background: '#EDE5FA',
            },
          }}
        >
          Certification preparation <IoIosArrowForward />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <List sx={{ width: '100%', marginLeft: '25px', fontWeight: 700, color: 'gray' }}>
          Most popular
        </List>
        {secondDividerList.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                width: '100%',
                margin: '1px',
                overflow: 'unset',
                borderRadius: '5px',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                ':hover': {
                  background: '#EDE5FA',
                },
              }}
            >
              <p>{text}</p>
              <IoIosArrowForward />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <List sx={{ width: '100%', marginLeft: '25px', fontWeight: 700, color: 'gray' }}>
          More from Udemy
        </List>
        {thirdDividerList.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                width: '100%',
                margin: '1px',
                overflow: 'unset',
                borderRadius: '5px',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'start',
                ':hover': {
                  background: '#EDE5FA',
                },
              }}
            >
              {text}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="text-black">
      <Drawer open={showSidebar} onClose={() => setShowSidebar(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
