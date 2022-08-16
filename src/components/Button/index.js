import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({ href, to, children, primary, className, ...passProps }) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
        [className]: className,
    });

    const props = {};

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    return (
        <Comp className={classes} {...props} {...passProps}>
            {children}
        </Comp>
    );
}

export default Button;
