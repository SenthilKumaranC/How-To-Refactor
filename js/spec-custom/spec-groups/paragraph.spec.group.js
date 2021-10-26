import { isEmpty } from "../spec-units/isEmpty.spec.unit";
import { isFirstLine } from "../spec-units/isFirstLine.spec.unit";

export const paragraphSpecGroup = (data) => !isEmpty(data) && !isFirstLine(data);