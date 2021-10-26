import { breakSpecGroupCallback } from "./spec-callbacks/break.spec.callback";
import { headerSpecGroup } from "./spec-groups/header.spec.group";
import { paragraphSpecGroup } from "./spec-groups/paragraph.spec.group";
import { isEmpty } from "./spec-units/isEmpty.spec.unit";


/*const lineChecker = (line, isFirstLine) => {
    let document = ``;
  
    if (line !== "" && isFirstLine) {
      document += `<h1>${line}</h1>`;
    } else if (line !== "" && !isFirstLine) {
      document += `<p>${line}</p>`;
    } else if (line === "") {
      document += "<br />";
    }
  
    return document;
  
  };*/

const specApis = specificationGroup();

specApis.addSpecObject(headerSpecGroup, headerSpecGroupCallback);
specApis.addSpecObject(paragraphSpecGroup, paragraphSpecGroupCallback);
specApis.addSpecObject(isEmpty, breakSpecGroupCallback);

const lineChecker = (line, isFirstLine) => {
    let initialDocument = "";
    return specApis.validateSpecs({ initialDocument, line, isFirstLine });
}




