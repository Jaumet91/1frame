import { logo, logoWhite } from '../../assets/img';

export const Sidebar = () => {
  return (
    <aside className="sidebar visible">
      <div className="sidebar__top">
        <a className="sidebar__logo" href="index">
          <img
            aria-label="logo-img"
            className="sidebar__pic sidebar__pic_white"
            src={logo}
            alt="light-logo"
          />
          <img
            aria-label="dark_logo-img"
            className="sidebar__pic sidebar__pic_black"
            src={logoWhite}
            alt="dark-logo"
          />
        </a>
        <button aria-label="burguer-btn" className="sidebar__burguer"></button>
        <button aria-label="open_close-btn" className="sidebar__close">
          <svg className="icon icon-close">
            <use xlinkHref="img/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>

      <div className="sidebar__wrapper">
        <div className="sidebar__inner">
          <div className="sidebar__group">
            <div className="sidebar__menu">
              <ul>
                <li>News Feed</li>
                <li>Trending</li>
                <li>Platforms</li>
                <li>Genres</li>
              </ul>
            </div>
          </div>
          <div className="sidebar__group">
            <div className="sidebar__caption caption-sm">
              <span>1Frame Gaming</span>
            </div>
            <div className="sidebar__menu">
              <ul>
                <li>Settings</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__banner">
          <div className="sidebar__bg"></div>
          <div className="sidebar__details">
            <div className="sidebar_title h5">
              {' '}
              Say Hello to the creator's page
            </div>
            <button
              aria-label="contact-tbn"
              className="sidebar__btn btn btn_purple btn_wide"
            >
              Hello!
            </button>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <label className="switch switch_theme js-switch-theme">
          <input className="switch__input" type="checkbox" />
          <span className="switch__in">
            <span className="switch__box"></span>
            <span className="switch__icon">
              <svg className="icon icon-moon">
                <use xlinkHref="img/sprite.svg#icon-moon"></use>
              </svg>
              <svg className="icon icon-sun">
                <use xlinkHref="img/sprite.svg#icon-sun"></use>
              </svg>
            </span>
          </span>
        </label>
      </div>
    </aside>
  );
};
