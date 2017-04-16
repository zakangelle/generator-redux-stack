import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-m'
    changeMonitorKey='ctrl-c'
  >
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
);
