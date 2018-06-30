import { Observable } from "rxjs";
import BosClient from "./bos/index";
import IOptions from "./options.i";

const defaultOptions = {
  cloud: false,
  autoConnect: true
};

export class Notion extends BosClient {
  
  constructor(options?: IOptions) {
    if (!options.deviceId) {
      throw new Error("Notion: deviceId is mandatory");
    }
    super({
      ...defaultOptions,
      ...options
    });
  }

  private getMetric(metric, ...props) {
    this.subscribe(metric, ...props);

    return new Observable(observer => {
      this.onMetric(metric, (...data) => {
        observer.next(...data);
      });
      return () => {
        this.unsubscribe(metric);
      };
    });
  }

  public status(...props) {
    return this.getMetric("status", ...props);
  }

  public brainwaves(...props) {
    return this.getMetric("sample", ...props);
  }

  public awareness(...props) {
    return this.getMetric("awareness", ...props);
  }

  public emotion(...props) {
    return this.getMetric("emotion", ...props);
  }

  public kinesis(...props) {
    return this.getMetric("kinesis", ...props);
  }

  public facialExpression(...props) {
    return this.getMetric("facialExpression", ...props);
  }

  public channelAnalysis(...props) {
    return this.getMetric("channelAnalysis", ...props);
  }

  public acceleration(...props) {
    return this.getMetric("acceleration", ...props);
  }
}

export default Notion;