function specificationGroup() {
    const specificationMap = [];

    const addSpecObject = (specs, callback) => {
        specificationMap.push({ specs, callback });
    }

    const validateSpecs = (data) => {
        specificationMap.forEach((specObject) => {
            if (specObject.specs(data)) {
                return specObject.callback(data);
            }
        })
    }

    return {addSpecObject,validateSpecs}
}