import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Task } from './models';

const main = async () => {

  const task = new Task({ title: 'Title1', status: 'OK' });
  await DataStore.save(task);

  const tasks = await DataStore.query(Task, Predicates.ALL);

  console.log(tasks);
};

main();