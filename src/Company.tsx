import React from 'react';
import SVG from './SVG';

const Company = React.memo(() => {
  return (
    <>
      <h1>About Us</h1>
      <p>We are a consultancy offering services in DevOps and development.</p>
      <h1>Technologies</h1>
      <div>
        <SVG
          height={100}
          width={100}
          path={'/static/image/tags/aws.svg'}
          initialGrayscale={100}
        />
        <SVG
          height={100}
          width={100}
          path={'/static/image/tags/azure.svg'}
          initialGrayscale={100}
        />
        <SVG
          height={100}
          width={100}
          path={'/static/image/tags/google-cloud-platform.svg'}
          initialGrayscale={100}
        />
      </div>
    </>
  );
});

export default Company;
