import React from 'react';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import GitHubIcon from '@material-ui/icons/GitHub';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
function PanelSetting() {
  return (
    <div className="panelSetting">
      <Brightness5Icon />
      <a href="https://github.com/NikitaDeveloperWeb/EazyUIComponents">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default PanelSetting;
