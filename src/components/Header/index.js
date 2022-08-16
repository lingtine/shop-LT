import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faMagnifyingGlass,
    faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('top-bar')}>
                <p>
                    Hotline Mua Hàng: 0973 285 886 | Hotline CSKH: 1900 886 803
                    - Ext 1 | Email CSKH: web@360boutique.vn
                </p>
            </div>
            <div className={cx('header-main')}>
                <div className={cx('header-mid', 'header-main-separate')}>
                    <Button to={'/'}>
                        <img
                            className={cx('header-logo')}
                            src={
                                'https://360boutique.vn/wp-content/uploads/2021/10/LOGO-360-DUNG-TAM-THOI-MAU-DEN-05.png'
                            }
                            alt={'logo'}
                        />
                    </Button>
                    <div className={cx('header-search')}>
                        <input
                            className={cx('header-input')}
                            placeholder="Tìm kiếm sản phẩm"
                        ></input>
                        <button className={cx('header-search--icon')}>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={cx('action')}>
                        <Button className={cx('action-item')} to={'/account'}>
                            {<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
                        </Button>
                        <Button className={cx('action-item')}>
                            {
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                ></FontAwesomeIcon>
                            }
                        </Button>
                        <Button className={cx('action-item')}>
                            {
                                <FontAwesomeIcon
                                    icon={faShoppingBag}
                                ></FontAwesomeIcon>
                            }
                        </Button>
                    </div>
                </div>

                <div className={cx('header-menu', 'header-main-separate')}>
                    <Button to={'/about-us'} className={cx('header-menu-item')}>
                        Giới Thiệu
                    </Button>
                    <Button to={'/product'} className={cx('header-menu-item')}>
                        Sản phẩm
                    </Button>
                    <Button to={'/sales'} className={cx('header-menu-item')}>
                        Khuyến mãi
                    </Button>
                    <Button to={'/news'} className={cx('header-menu-item')}>
                        Tin tức
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
