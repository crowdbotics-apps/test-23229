import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial182848Navigator from '../features/Tutorial182848/navigator';
import NotificationList182820Navigator from '../features/NotificationList182820/navigator';
import Settings182819Navigator from '../features/Settings182819/navigator';
import Settings182811Navigator from '../features/Settings182811/navigator';
import UserProfile182809Navigator from '../features/UserProfile182809/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial182848: { screen: Tutorial182848Navigator },
NotificationList182820: { screen: NotificationList182820Navigator },
Settings182819: { screen: Settings182819Navigator },
Settings182811: { screen: Settings182811Navigator },
UserProfile182809: { screen: UserProfile182809Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
