import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SchoolIcon from '@mui/icons-material/School';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PercentIcon from '@mui/icons-material/Percent';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import PaymentsIcon from '@mui/icons-material/Payments';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Attendance from './Attendance';
import Quiz from './Quiz';
import MyResults from './MyResults';
import PaymentList from './PaymentList';
import StudentProfile from './Student';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Student(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const Screens = [
    {
      name:'Dashboard',
      route:'Student',
      icon: <SchoolIcon />
    },
    {
      name:'Attendance Report',
      route:'Attendance',
      icon: <PercentIcon />
    },
    {
      name:'Quiz',
      route:'Quiz',
      icon: <PsychologySharpIcon />
    },
    {
      name:'My Results',
      route:'MyResults',
      icon: <SchoolIcon />
    },
    {
      name:'Payment List',
      route:'PaymentList',
      icon: <PaymentsIcon />
    },
    {
      name:'Sign Out',
      route:'Login',
      icon: <ExitToApp />
    }
  ]
  const navigate = useNavigate()
  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {Screens.map((x, i) => (
          <ListItem key={x.name} disablePadding>
            <ListItemButton onClick={()=>navigate(x.route) }>
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
            Student Portal
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
          <Route path="Student" element={<StudentProfile />} />
          <Route path="/" element={<StudentProfile />} />
          <Route path="Attendance" element={<Attendance />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="MyResults" element={<MyResults />} />
          <Route path="PaymentList" element={<PaymentList />} />
          {/* <Route path="Login" element={} /> */}
        </Routes>
      </Box>
    </Box>
  );
}