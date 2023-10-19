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
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import SchoolIcon from '@mui/icons-material/School';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CourseList from './CourseList';
import RegisterationControl from './RegisterationControl';
import Result from './Result';
import StudentList from './StudentList';
import Quiz from './Quiz';
import CourseForm from './CourseForm';
import StudentDetail from './StudentDetail';
import StudentForm from './StudentForm';
import AddQuiz from './AddQuiz';
import AddFaculty from './AddFaculty';
import FacultyDetail from './FacultyDetail';
import FacultyList from './FacultyList';
import Profile from './Profile';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Institute(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const Screens = [
  {
    name:'Dashboard',
    route:'Institute',
    icon: <SchoolIcon />
  },
  {
    name:'Course List',
    route:'CourseList',
    icon: <SchoolIcon />
  },
  {
    name:'Registeration Control',
    route:'RegisterationControl',
    icon: <ControlCameraIcon />
  },
  {
    name:'Result',
    route:'Result',
    icon: <SchoolIcon />
  },
  {
    name:'Faculty List',
    route:'FacultyList',
    icon: <PeopleAltIcon />
  },
  {
    name:'Student List',
    route:'StudentList',
    icon: <PeopleAltIcon />
  },
  {
    name:'Quiz',
    route:'Quiz',
    icon: <PsychologyAltIcon />
  },
]
const navigate = useNavigate()
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
            Institute Portal
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
        <Route path='/' element={<Profile />} />
        <Route path='Institute' element={<Profile />} />
          <Route path='CourseList' element={<CourseList />} />
          <Route path='CourseForm' element={<CourseForm />} />
          <Route path='RegisterationControl' element={<RegisterationControl />} />
          <Route path='Result' element={<Result />} />
          <Route path='StudentList' element={<StudentList />} />
          <Route path='StudentDetail' element={<StudentDetail />} />
          <Route path='StudentForm' element={<StudentForm />} />
          <Route path='FacultyList' element={<FacultyList />} />
          <Route path='FacultyDetail' element={<FacultyDetail />} />
          <Route path='AddFaculty' element={<AddFaculty />} />
          <Route path='Quiz' element={<Quiz />} />
          <Route path='AddQuiz' element={<AddQuiz />} />
        </Routes>
      </Box>
    </Box>
  );
}