import { Link } from 'react-router-dom';

import { logoWhite } from '../../../assets/img';
import { startGoogleSignIn } from '../../../store/auth';
import { useAppDispatch } from '../../../store';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <div className="login">
      <div className="login__containter">
        <div className="login__wrap">
          <Link className="login__logo" to="/news-feed">
            <img
              className="login__pic"
              src={logoWhite}
              alt="login pic"
              aria-label="logo-img"
            />
          </Link>
          <div className="login__info">
            All your favourite games in one place
          </div>
          <div className="games">
            <a className="games__item" href="#">
              <div className="games__preview">
                <img className="games__pic" src="gamesrc" alt="games pic" />
              </div>
              <div className="games_details">
                <div className="games__title">Persona 5</div>
                <div className="games__category">RPG</div>
              </div>
            </a>

            <a className="games__item" href="#">
              <div className="games__preview">
                <img className="games__pic" src="gamesrc" alt="games pic" />
              </div>
              <div className="games_details">
                <div className="games__title">Persona 5</div>
                <div className="games__category">RPG</div>
              </div>
            </a>

            <a className="games__item" href="#">
              <div className="games__preview">
                <img className="games__pic" src="gamesrc" alt="games pic" />
              </div>
              <div className="games_details">
                <div className="games__title">Persona 5</div>
                <div className="games__category">RPG</div>
              </div>
            </a>
          </div>
          <Link className="login__add" to="/search">
            <svg className="icon icon-add-square">
              <use xlinkHref="img/sprite.svg#icon-add-square"></use>
            </svg>
            Discover more
          </Link>
        </div>

        <div className="login__form">
          <Link className="login__close" to="/news-feed">
            <svg className="icon icon-arrow-left">
              <use xlinkHref="img/sprite.svg#icon-arrow-left"></use>
            </svg>
          </Link>
          <h3 className="login__title h3">Sign up</h3>
          <div className="login__line">
            <div className="login__text">Already a user</div>
            <Link className="login__link" to="/auth/login">
              Login now
            </Link>
          </div>

          <div className="login__row">
            <div className="login__col">
              <div className="field">
                <label htmlFor="FirstName" className="field__label">
                  First name
                </label>
                <div className="field__wrap">
                  <input
                    id="FirstName"
                    name="FirstName"
                    className="field__input"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="login__col">
              <div className="field">
                <label htmlFor="LastName" className="field__label">
                  Last name
                </label>
                <div className="field__wrap">
                  <input
                    id="LastName"
                    name="LastName"
                    className="field__input"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="EmailAddress" className="field__label">
              Email Address
            </label>
            <div className="field__wrap">
              <input
                id="EmailAddress"
                name="EmailAddress"
                className="field__input"
                type="email"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="Password" className="field__label">
              Password
            </label>
            <div className="field__wrap">
              <input
                id="Password"
                name="Password"
                className="field__input"
                type="password"
              />
            </div>
          </div>

          <button className="login__btn btn btn_purple btn_wide">
            Continue
          </button>
          <div className="login__or">Sign up by Google</div>
          <button
            className="login__btn btn btn_blue btn_wide"
            onClick={onGoogleSignIn}
          >
            Google Account
          </button>
        </div>
      </div>
    </div>
  );
};
