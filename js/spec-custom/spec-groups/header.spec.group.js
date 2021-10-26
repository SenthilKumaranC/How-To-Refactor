import { isEmpty } from "../spec-units/isEmpty.spec.unit";
import { isFirstLine } from "../spec-units/isFirstLine.spec.unit";

export const headerSpecGroup = (data) => !isEmpty(data) && isFirstLine(data);