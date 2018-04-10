import { push } from 'react-router-redux';

// Navigation
export const gotoSignUp = () => push('/signup');
export const gotoHome = () => push('/home');
export const gotoProfile = (userId) => push(`/profile/${userId}`);
export const gotoFriends = () => push('/friends');
export const gotoRewards = () => push('/rewards');
export const gotoActivities = () => push('/activities');
export const gotoCurrentGame = () => push('/ingame');
export const gotoPostGame = () => push('/postgame');
export const gotoLogin = () => push('/');
