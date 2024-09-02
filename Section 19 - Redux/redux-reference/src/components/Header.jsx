import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authenticationActions } from '../store/AuthenticationSlice';

const Header = () => {

  const isAuthenticated = useSelector(state => state.authenticationReducer.isAuthenticated)

  const dispatch = useDispatch();
  const logout = () => {dispatch(authenticationActions.logout())}

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated &&
                <ul>
                <li>
                  <a href='/'>My Products</a>
                </li>
                <li>
                  <a href='/'>My Sales</a>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
