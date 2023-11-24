import React, { memo, useCallback, useMemo } from 'react';
import type { ListItemProps as ListItemPropsBase } from 'react-native-paper';
import { Divider, List } from 'react-native-paper';

export interface ListItemProps {
  icon: string;
  title: string;
  items: string[];
  divider?: boolean;
}

const ListItemComponent: React.FC<ListItemProps> = ({
  icon,
  title,
  items,
  divider,
}) => {
  const description = useMemo(
    () =>
      items
        .filter(item => item.trim())
        .map(item => `• ${item}`)
        .join('\n'),
    [items],
  );

  const LeftComponent = useCallback<NonNullable<ListItemPropsBase['left']>>(
    props => <List.Icon {...props} icon={icon} />,
    [icon],
  );

  return (
    <>
      <List.Item title={title} description={description} left={LeftComponent} />

      {divider ? <Divider /> : null}
    </>
  );
};

export const ListItem = memo(ListItemComponent);
