import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PaymentIcon from '@mui/icons-material/Payment';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Institute from '../institute/dashboard';
import InstiuteForm from './InstiuteForm';
import RegisteredInstitute from './RegisteredInstitute';
import RegisterAdmin from './RegisterAdmin';
import PaymentDetail from './PaymentDetail';
import Main from './Main';
import Dashboard from './Main';
const drawerWidth =  220;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Admin(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate()
  const Screens = [
    {
      name: 'Dashboard',
      route: 'Admin',
      icon: <SchoolIcon />
    },
    {
      name: 'Registered Institute',
      route: 'RegisteredInstitute',
      icon: <SchoolIcon />
    },
    {
      name: 'Institute Form',
      route: 'InstituteForm',
      icon: <AddCircleOutlineIcon />
    },
    {
      name: 'Register Admin',
      route: 'RegisterAdmin',
      icon: <SupervisorAccountIcon />
    },
    {
      name: 'Activation & Payment Detail',
      route: 'PaymentDetail',
      icon: <PaymentIcon />
    }
  ]
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {Screens.map((x, i) => (
          <ListItem key={x.name} disablePadding>
            <ListItemButton onClick={()=>navigate(x.route)}>
              <ListItemIcon>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:'black',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       <Routes>
       <Route path='/' element={<Dashboard />}/>
       <Route path='Admin' element={<Dashboard />}/>
       <Route path='RegisteredInstitute' element={<RegisteredInstitute />}/>
       <Route path='InstituteForm' element={<InstiuteForm/>}/>
       <Route path='RegisterAdmin' element={<RegisterAdmin />}/>
       <Route path='PaymentDetail' element={<PaymentDetail />}/>
       </Routes>
      </Box>
    </Box>
  );
}