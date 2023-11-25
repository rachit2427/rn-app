import type { PropsWithChildren } from 'react';
import React, { memo, useCallback, useState } from 'react';
import type { ButtonProps } from 'react-native-paper';
import { Button, Menu } from 'react-native-paper';

interface ButtonWithMenuProps extends ButtonProps {
  buttonTitle: string;
  onOpen?: () => void;
  onClose?: () => void;
  active?: boolean;
}

const ButtonWithMenuComponent: React.FC<
  PropsWithChildren<ButtonWithMenuProps>
> = ({ buttonTitle, onOpen, onClose, active, children, ...props }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = useCallback(() => {
    setVisible(true);
    onOpen?.();
  }, [onOpen]);

  const closeMenu = useCallback(() => {
    setVisible(false);
    onClose?.();
  }, [onClose]);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button
          mode={active ? 'contained' : 'contained-tonal'}
          {...props}
          onPress={openMenu}
        >
          {buttonTitle}
        </Button>
      }
      anchorPosition="bottom"
    >
      {children}
    </Menu>
  );
};

export const ButtonWithMenu = memo(ButtonWithMenuComponent);
