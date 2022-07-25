import React from 'react';
import { Account, Avatars, Client, Databases } from 'appwrite';

const PROJECT_ID = '62df0c6ad480b277a643'; //Update this to your project
const ENDPOINT = 'http://localhost/v1';
const APP_DATABASE_ID = "default";


const client = new Client();
client.setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

const database = new Databases(client, APP_DATABASE_ID);
const account = new Account(client);
const avatars = new Avatars(client);

const Context = React.createContext({client, database, account,avatars});

const Component = ({ children }) => (
  <Context.Provider value={{client, database, account,avatars}}>{children}</Context.Provider>
);

export const useApi = () => React.useContext(Context);

export default Component;