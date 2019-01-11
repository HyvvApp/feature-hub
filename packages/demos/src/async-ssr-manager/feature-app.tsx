import {Card, Label} from '@blueprintjs/core';
import {AsyncSsrManagerV1} from '@feature-hub/async-ssr-manager';
import {FeatureAppDefinition} from '@feature-hub/core';
import {ReactFeatureApp} from '@feature-hub/react';
import * as React from 'react';

const featureAppDefinition: FeatureAppDefinition<
  ReactFeatureApp,
  undefined,
  {'s2:async-ssr-manager': AsyncSsrManagerV1}
> = {
  id: 'test:hello-world',

  dependencies: {
    's2:async-ssr-manager': '^1.0'
  },

  create: env => {
    let subject = 'World';
    const asyncSsrManager = env.featureServices['s2:async-ssr-manager'];
    asyncSsrManager.rerenderAfter((async () => (subject = 'Universe'))());

    return {
      render: () => (
        <Card style={{margin: '20px'}}>
          <Label>Hello, {subject}!</Label>
        </Card>
      )
    };
  }
};

export default featureAppDefinition;