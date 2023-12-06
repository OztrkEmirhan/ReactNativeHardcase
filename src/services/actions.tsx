import BackgroundService from 'react-native-background-actions';

class TaskCounter {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  setCounter = (counter: number) => {
    this.counter = counter;
  };

  getCounter = () => {
    return this.counter;
  };
}

export const taskCounter = new TaskCounter();

const sleep = (time: any) =>
  new Promise<void>(resolve => setTimeout(() => resolve(), time));

export const veryIntensiveTask = async (taskDataArguments: any) => {
  const {delay} = taskDataArguments;
  for (let i = 0; BackgroundService.isRunning(); i++) {
    taskCounter.setCounter(taskCounter.getCounter() + 1000);
    await sleep(delay);
  }
};

export const startBackgroundService = async () => {
  taskCounter.setCounter(0);
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
  return taskCounter.getCounter();
};
