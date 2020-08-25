import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentPath } from '../../../../actions/path';

const Imaginarium = ({ setCurrentPath, location: pathname }) => {
  useEffect(() => {
    setCurrentPath(pathname);
  }, []);

  return <div>Imaginarium</div>;
};

export default connect(null, { setCurrentPath })(Imaginarium);
