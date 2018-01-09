import * as React from 'react';
import { Button } from 'material-ui';

// export const MaterialUiButton = (props: {}) => {
//   return (
//     <Button raised={true} color="primary">
//       Hello World
//     </Button>
//   );
// };

export class MaterialUiButton extends React.Component<{}> {
  constructor(props: any) {
    super(props);
    console.log('MaterialUIButton constructor');
  }

  render() {
    return (
      <Button raised={true} color="primary">
        Hello World
      </Button>
    );
  }
}