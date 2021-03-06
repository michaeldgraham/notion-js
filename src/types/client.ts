import { User } from "@firebase/auth-types";
import { Actions } from "./actions";
import { Metrics } from "./metrics";
import { SkillsClient } from "./skill";
import { Credentials } from "./credentials";
import { ChangeSettings } from "./settings";

/**
 * @internal
 */
export interface Client {
  user: User | null;
  actions: Actions;
  disconnect(): Promise<any>;
  getInfo(): Promise<any>;
  login?(credentails: Credentials): Promise<any>;
  onNamespace(namespace: string, callback: Function): Function;
  offNamespace(namespace: string, listener: Function): void;
  metrics: Metrics;
  skills: SkillsClient;
  timestamp: number;
  changeSettings(settings: ChangeSettings): Promise<void>;
}
