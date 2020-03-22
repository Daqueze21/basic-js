module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        let depthCount = depth;

        for (let i = 0; i < arr.length; i++) {
           if (Array.isArray(arr[i])) {
            let numb = this.calculateDepth(arr[i], depth + 1);
            if(numb>depthCount){ depthCount = numb};
           }
        }
        return depthCount;
    }
};