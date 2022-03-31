import React, {ReactNode} from 'react';
import {View, Modal, TouchableWithoutFeedback, StyleSheet} from 'react-native';

interface ModalProps {
  children?: ReactNode;
  visible: boolean;
  onDismiss: () => void;
  type?: any;
}

const ModalInfo = ({children, visible, onDismiss}: ModalProps) => {
  const handleDismiss = () => {
    onDismiss();
  };
  return (
    <Modal
      animated
      animationType="slide"
      visible={visible}
      presentationStyle="pageSheet"
      onDismiss={onDismiss}
      onRequestClose={onDismiss}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={styles.onClose} />
      </TouchableWithoutFeedback>
      <View style={[styles.overlay]}>
        <View style={styles.grayLine} />
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 15,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    height: '100%',
  },

  onClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.6,
    backgroundColor: '#17171a',
  },
  grayLine: {
    position: 'absolute',
    width: 50,
    height: 5,
    top: 10,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#A0A0A0',
  },
});

export default ModalInfo;
