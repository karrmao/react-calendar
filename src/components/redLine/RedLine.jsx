import React, { useState, useEffect } from 'react';
import moment from 'moment';

const RedLine = () => {
  // let getMinutes = Number(moment().format('mm'));//D't work! Why?
  // let getMinutes = new Date().getMinutes(); //D't work! Why?

  const [marginTop, setCurrentMinutes] = useState(
    Number(moment().format('mm'))
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentMinutes(Number(moment().format('mm'))),
      1000 * 60
    );
    return () => {
      clearInterval(interval);
    };
  }, [marginTop]);

  return <div className="red-line" style={{ marginTop }}></div>;
};

export default RedLine;
