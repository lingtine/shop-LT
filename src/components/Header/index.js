import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faMagnifyingGlass,
    faShoppingBag,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Header() {
    const menuSubProduct = [
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
        {
            content: 'Áo Nam',
            type: [
                { describe: 'Áo Polo', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Phông', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Dài Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                {
                    describe: 'Áo Sơ Mi Ngắn Tay',
                    to: 'hello',
                    icon: faAngleRight,
                },
                { describe: 'Áo Nỉ', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Hoodie', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Khoác', to: 'hello', icon: faAngleRight },
                { describe: 'Áo Vest', to: 'hello', icon: faAngleRight },
                {
                    describe: 'Áo Sơ Mi Họa Tiết',
                    to: 'hello',
                    icon: faAngleRight,
                },
            ],
        },
    ];

    const optionSales = [
        { to: '/', numberPercentSale: 50 },
        { to: '/', numberPercentSale: 60 },
        { to: '/', priceSale: 89 },
        { to: '/', priceSale: 99 },
        { to: '/', priceSale: 149 },
        { to: '/', priceSale: 299 },
    ];

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
                    <Tippy
                        interactive
                        tabIndex={-1}
                        placement={'bottom'}
                        render={() => (
                            <div
                                tabIndex={-1}
                                className={cx('nav-sub-product')}
                            >
                                {menuSubProduct.map((subProduct) => (
                                    <div className={cx('product-container')}>
                                        <h3>{subProduct.content}</h3>
                                        <ul>
                                            {subProduct.type.map((product) => (
                                                <li>
                                                    <Button
                                                        className={cx(
                                                            'product-item',
                                                        )}
                                                        leftIcon={
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    product.icon
                                                                }
                                                            />
                                                        }
                                                    >
                                                        {product.describe}
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    >
                        <Button
                            to={'/product'}
                            className={cx('header-menu-item')}
                        >
                            Sản phẩm
                        </Button>
                    </Tippy>

                    <Tippy
                        interactive
                        placement="bottom"
                        tabIndex={-1}
                        render={() => (
                            <div className={cx('sale-sub-menu')}>
                                <ul>
                                    {optionSales.map((option) => (
                                        <li>
                                            <Button
                                                className={cx('option-sale')}
                                            >
                                                {option.priceSale
                                                    ? 'Sale đồng giá ' +
                                                      option.priceSale +
                                                      'k'
                                                    : 'Sale ' +
                                                      option.numberPercentSale +
                                                      '%'}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    >
                        <Button
                            to={'/sales'}
                            className={cx('header-menu-item')}
                        >
                            Khuyến mãi
                        </Button>
                    </Tippy>
                    <Button to={'/news'} className={cx('header-menu-item')}>
                        Tin tức
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
