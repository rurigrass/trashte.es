import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I AM THE PAGE</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  //   children: PropTypes.oneOf([
  //     PropTypes.arrayOf(PropTypes.node),
  //     PropTypes.node,
  //   ]),
  children: PropTypes.any,
};
