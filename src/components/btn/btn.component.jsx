import PropTypes from 'prop-types';
import './btn.styles.css';

const Btn = ({ type, label, size, full, ...rest }) => {
    let classList = ['btn'];
    type !== Btn.defaultProps.type && classList.push(`btn--${type}`);
    size !== Btn.defaultProps.size && classList.push(`btn--${size}`);
    full && classList.push(`btn--full`);
    classList = classList.join(' ');

    return (
        <button className={classList} {...rest}>{label}</button>
    )
}

Btn.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['standard', 'primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    full: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Btn.defaultProps = {
    type: 'standard',
    size: 'medium',
    full: false,
    disabled: false,
    onClick: undefined,
};

export default Btn;