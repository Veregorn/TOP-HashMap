// Factory Function representing a Hashmap
const HashMap = () => {
    
    // Properties
    let buckets = new Array(16); // Array of buckets
    let _capacity = 0; // Number of buckets
    let _loadFactor = 0.75; // 75% of the buckets array is filled (time to resize it)

    // Methods
    const hash = (string) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        return hashCode % buckets.length;
    };

    const set = (key, value) => {
        const index = hash(key);
        
        // Test if the index is out of bound
        if (index < 0 || index >= buckets.length) {
            throw new Error("Set Method: Trying to access index out of bound");
        } else {
            buckets[index] = [key, value];
            _capacity++;
        }

        // Resize the buckets array if needed
        if (_capacity / buckets.length > _loadFactor) {
            buckets.length *= 2;
        }
    }

    const get = (key) => {
        const index = hash(key);

        // Test if the index is out of bound
        if (index < 0 || index >= buckets.length) {
            throw new Error("Get Method: Trying to access index out of bound");
        } else {
            if (buckets[index][0] == key) {
                return buckets[index][1];
            } else {
                throw new Error("Keys don't match");
            }
        }
    }

    const has = (key) => {
        const index = hash(key);

        // Test if the index is in the array
        if (index < 0 || index >= buckets.length) {
            throw new Error("Has Method: Trying to access index out of bound");
        } else if (buckets[index] && buckets[index][0] == key) {
            return true
        } else {
            return false
        }
    }

    const remove = (key) => {
        const index = hash(key);

        // Test if the index is out of bound
        if (index < 0 || index >= buckets.length) {
            throw new Error("Remove Method: Trying to access index out of bound");
        } else if (has(key)) {
            buckets.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    const length = () => {
        const filteredArray = buckets.filter(bucket => bucket !== undefined && bucket !== null);
        return filteredArray.length;
    }

    const totalLength = () => {
        return buckets.length;
    }

    const clear = () => {
        const len = buckets.length
        buckets = new Array(len)
    }

    const keys = () => {
        const keys = [];
        const filteredArray = buckets.filter(bucket => bucket !== undefined && bucket !== null);
        for (let i = 0; i < filteredArray.length; i++) {
            const element = filteredArray[i];
            keys.push(element[0]);
        }
        return keys;
    }

    const values = () => {
        const values = [];
        const filteredArray = buckets.filter(bucket => bucket !== undefined && bucket !== null);
        for (let i = 0; i < filteredArray.length; i++) {
            const element = filteredArray[i];
            values.push(element[1]);
        }
        return values;
    }

    const entries = () => {
        const entries = [];
        const filteredArray = buckets.filter(bucket => bucket !== undefined && bucket !== null);
        for (let i = 0; i < filteredArray.length; i++) {
            const element = filteredArray[i];
            entries.push([element[0], element[1]]);
        }
        return entries;
    }

    // Return the object
    return {
        set,
        get,
        has,
        remove,
        length,
        totalLength,
        clear,
        keys,
        values,
        entries
    };
};

module.exports = HashMap;