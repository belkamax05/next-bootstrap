const removeUrlParam = ({ asPath, paramName }) =>
  asPath.replace(new RegExp(`([?&])${paramName}=[^&]*(&|$)`), '$1').replace(/([?&])$/, '');

export default removeUrlParam;
