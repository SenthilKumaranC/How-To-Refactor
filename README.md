# How-To-Refactor

I saw a post to refactor below code in https://dev.to/p42/how-would-you-refactor-this-js-function-4n71
```
const lineChecker = (line, isFirstLine) => {
  let document = ``;

  if (line !== "" && isFirstLine) {
    document += `<h1>${line}</h1>`;
  } else if (line !== "" && !isFirstLine) {
    document += `<p>${line}</p>`;
  } else if (line === "") {
    document += "<br />";
  }

  return document;

};
```

I have refactored like below by creating Spec Units.

```
const specApis = specificationGroup();

specApis.addSpecObject(headerSpecGroup, headerSpecGroupCallback);
specApis.addSpecObject(paragraphSpecGroup, paragraphSpecGroupCallback);
specApis.addSpecObject(isEmpty, breakSpecGroupCallback);

export const lineChecker = (line, isFirstLine) => {
let initialDocument = "";
return specApis.validateSpecs({ initialDocument, line, isFirstLine });
}
```
