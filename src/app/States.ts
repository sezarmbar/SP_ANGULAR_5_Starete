import { HomeComponent } from './home/home.component';
import { UmfrageComponent } from './umfrage/umfrage.component';

export const  helloState = { name: 'hello', url: '/hello',  component: HomeComponent }; 
export const  aboutState = { name: 'about', url: '/about',  component: UmfrageComponent };
export const APP_STATES = [
  helloState,
  aboutState
];