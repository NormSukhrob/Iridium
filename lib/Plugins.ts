import {Core} from "./Core";
import {Model} from "./Model";
import * as Skmatc from "skmatc";

export interface Plugin {
    newModel? (model: Model<any, any>);
    newInstance? (instance: any, model: Model<any, any>);
    validate?: Skmatc.Validator | Skmatc.Validator[];
}