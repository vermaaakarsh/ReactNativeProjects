import { registerRootComponent } from 'expo';

import MyApp from './MyMenu';
import Standard from './Standard';
import Scientific from './Scientific';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MyApp);
