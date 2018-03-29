import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'github',
  url: 'https://github.com/kazuaki-p/react-sample',
  goFullScreen: false, 
  showStoriesPanel: true, 
  showAddonPanel: false, 
  showSearchBox: false, 
  addonPanelInRight: false
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
