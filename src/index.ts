import Amplify from "@aws-amplify/core";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Task, Note } from "./models";

const main = async () => {

  const task = new Task({ title: 'Title1', status: 'OK' });
  await DataStore.save(task);

  console.log(task);
};

main();