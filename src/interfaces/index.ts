import { IAuthOptions } from 'node-sp-auth';

export interface ISSLConf {
  key: string;
  cert: string;
}

export interface ILRSettings {
  siteUrl: string;
  spFolder: string;
  watchBase: string;
  creds: IAuthOptions;
  ssl?: ISSLConf;
  port?: number;
  host?: string;
  protocol?: 'https' | 'http';
}

export interface ILRClientSettings {
  protocol?: string;
  host?: string;
  port?: number;
}

export interface ILREmittedObject {
  filePath: string;
  body?: string;
}
