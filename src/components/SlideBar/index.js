import styles from './SlideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SlideBar() {
    return <div className={cx('wrapper')}>SlideBar</div>;
}

export default SlideBar;
