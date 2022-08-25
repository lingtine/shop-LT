import style from './Banner.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(style);

function Banner() {
    const banners = [
        {
            src: 'https://360boutique.vn/wp-content/uploads/2022/08/Web.jpg',
            to: '/sales',
        },
        // {
        //     src: 'https://360boutique.vn/wp-content/uploads/2022/07/Banner-web.jpg',
        // },
        // {
        //     src: 'https://360boutique.vn/wp-content/uploads/2022/06/Web-2.jpg',
        // },
        // {
        //     src: 'https://360boutique.vn/wp-content/uploads/2022/06/web-1.jpg',
        // },
        // {
        //     src: 'https://360boutique.vn/wp-content/uploads/2022/06/Web.jpg',
        // },
        // {
        //     src: 'https://360boutique.vn/wp-content/uploads/2022/06/Banner-web.png',
        // },
    ];
    const [isActive, setIsActive] = useState(3);
    return (
        <div className={cx('wrapper')}>
            {banners.map((banner, index) => {
                return (
                    <div
                        className={cx(
                            'banner',
                            isActive === index ? 'active' : '',
                        )}
                    >
                        <Link to={banner.to ? banner.to : ''}>
                            <img
                                className={cx('banner-img')}
                                src={banner.src}
                            />
                        </Link>
                        <div></div>
                    </div>
                );
            })}
        </div>
    );
}

export default Banner;
