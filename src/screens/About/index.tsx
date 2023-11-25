import React, { memo, useCallback, useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

import { API_BASE_URL, AUTHOR_LINKEDIN_URL } from '@env';

import { translations } from '@src/service/translations';
import { Spacing } from '@src/utils/spacing';

const AboutComponent: React.FC = () => {
  const [requestedUrl, setRequestedUrl] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const hideDialog = useCallback(() => {
    setShowDialog(false);
    setRequestedUrl('');
  }, []);

  const openLink = useCallback(async (url: string) => {
    setRequestedUrl(url);
    try {
      await Linking.openURL(url);
    } catch {
      setShowDialog(true);
    }
  }, []);

  const onPressVisitApi = useCallback(() => openLink(API_BASE_URL), [openLink]);

  const onPressFollowOnLinkedIn = useCallback(
    () => openLink(AUTHOR_LINKEDIN_URL),
    [openLink],
  );

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={styles.textAlignCenter}>
        {translations.screens.about.createdBy}
      </Text>

      <Text
        variant="bodyMedium"
        style={[styles.spacing, styles.textAlignCenter]}
      >
        {translations.screens.about.description}
      </Text>

      <Button
        mode="contained-tonal"
        style={styles.spacing}
        icon="open-in-new"
        onPress={onPressVisitApi}
      >
        {translations.screens.about.cta.visitApi}
      </Button>

      <Button
        mode="contained"
        style={styles.spacing}
        icon="open-in-new"
        onPress={onPressFollowOnLinkedIn}
      >
        {translations.screens.about.cta.followOnLinkedIn}
      </Button>

      <Portal>
        <Dialog visible={showDialog} onDismiss={hideDialog}>
          <Dialog.Title>{translations.screens.about.dialog.title}</Dialog.Title>

          <Dialog.Content>
            <Text variant="bodyMedium">
              {`${translations.screens.about.dialog.description}\n${requestedUrl}`}
            </Text>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={hideDialog}>
              {translations.screens.about.dialog.cta}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  spacing: {
    marginTop: Spacing.md,
  },
});

export const About = memo(AboutComponent);
