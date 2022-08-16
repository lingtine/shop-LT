import {
    faEnvelopeOpenText,
    faSquarePhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-footer')}>
                <div className={cx('top-footer-content')}>
                    <FontAwesomeIcon
                        icon={faEnvelopeOpenText}
                    ></FontAwesomeIcon>
                    <span>Đăng kí nhận tin</span>
                </div>
                <div className={cx('top-footer-register')}>
                    <input className={cx('top-footer-input')} />
                    <Button primary>Đăng kí</Button>
                </div>
                <div className={cx('top-footer-contact')}>
                    <FontAwesomeIcon icon={faSquarePhone}></FontAwesomeIcon>
                    <span>Hỗ trợ / Mua hàng: 0908090744</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
