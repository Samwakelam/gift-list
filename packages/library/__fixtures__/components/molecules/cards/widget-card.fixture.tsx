import { Card, WidgetCard, WidgetCardType } from '../../../../src';

import { mockWidgetData } from '../../../../__synthetic__/widget.data';

export default {
  ['Icon Card']: () => {
    return (
      <Card>
        <WidgetCard widget={mockWidgetData} dispatches={{}} />
      </Card>
    );
  },
  ['Image Card']: () => {
    return (
      <Card>
        <WidgetCard
          widget={mockWidgetData}
          type={WidgetCardType.IMAGE}
          dispatches={{}}
        />
      </Card>
    );
  },
  ['Disabled Icon Card']: () => {
    return (
      <Card>
        <WidgetCard widget={mockWidgetData} dispatches={{}} disabled />
      </Card>
    );
  },
  ['Disabled Image Card']: () => {
    return (
      <Card>
        <WidgetCard
          widget={mockWidgetData}
          type={WidgetCardType.IMAGE}
          dispatches={{}}
          disabled
        />
      </Card>
    );
  },
};
