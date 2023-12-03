import BackgroundService from 'react-native-background-actions';

const sleep = (time: any) =>
  new Promise<void>(resolve => setTimeout(() => resolve(), time));

export const veryIntensiveTask = async (taskDataArguments: any) => {
  const {delay} = taskDataArguments;
  for (let i = 0; BackgroundService.isRunning(); i++) {
    // console.log(i);
    await sleep(delay);
  }
};

export const startBackgroundService = async () => {
  const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane',
    parameters: {
      delay: 1000,
    },
  };

  await BackgroundService.start(veryIntensiveTask, options);
};

export const stopBackgroundService = async () => {
  await BackgroundService.stop();
};
