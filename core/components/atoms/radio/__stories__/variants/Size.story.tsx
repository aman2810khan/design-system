import * as React from 'react';
import Radio, { Size } from '../../index';

// CSF format story
export const size = () => {

  const sizes: Size[] = ['tiny', 'regular'];

  const name = 'gender';

  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      {
        sizes.map((RadioSize, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%' }}>
              <Radio
                size={RadioSize}
                label={RadioSize.charAt(0).toUpperCase() + RadioSize.slice(1)}
                name={name}
                value={RadioSize}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Radio/Variants',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
