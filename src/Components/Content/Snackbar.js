import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
  state = {
    open: true,
    vertical: 'bottom',
    horizontal: 'right',
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { value, show } = this.props;
    const { vertical, horizontal, open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open && show}
          onClose={this.handleClose}
          ContentProps={{ 'aria-describedby': 'message-id', }}
          message={<span id="message-id">{value}</span>}
        />
      </div>
    );
  }
}

export default PositionedSnackbar;