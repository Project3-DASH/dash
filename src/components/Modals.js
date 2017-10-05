import React from 'react';
import PropTypes from 'prop-types';
import { ReactPageClick } from './ModalClick';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';


const styles = {
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '40%',
    height: '40%',
    marginTop: '-20%',
    marginLeft: '-20%',

    fontSize: 30,
    textAlign: 'center',

    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10
  },
  shade: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  },
  content: {
    padding: 50
  }
};

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} = ShareButtons;

export const Modals = ({onClose, notifyOnTouchEnd, ...rest}) => (
  <div>
    <div className="shade" style={styles.shade}/>
    <ReactPageClick notify={onClose} notifyOnTouchEnd={notifyOnTouchEnd}>
      <div className="popup" style={styles.popup}>
        <div className="content" {...rest} />
      </div>
    </ReactPageClick>
  </div>
);
Modals.propTypes = {
  onClose: PropTypes.func.isRequired,
  notifyOnTouchEnd: PropTypes.bool
};
Modals.defaultProps = {
  notifyOnTouchEnd: undefined
};

export default Modals