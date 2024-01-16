// Factory Function representing a Hashmap
const HashMap = () => {
    
    // Properties
    const buckets = new Array(16); // Array of buckets
    let _capacity = 0; // Number of buckets
    let _loadFactor = 0.75; // 75% of the buckets array is filled (time to resize it)

    // Methods
    const hash = (string) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        return hashCode;
    };

    const set = (key, value) => {
        const index = hash(key);
        
        // Test if the index is out of bound
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else {
            buckets[index] = (key, value);
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
            throw new Error("Trying to access index out of bound");
        } else {
            if (buckets[index].key == key) {
                return buckets[index].value;
            } else {
                throw new Error("Keys don't match");
            }
        }
    }

    const has = (key) => {
        const index = hash(key);

        // Test if the index is in the array
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else if (buckets[index] && buckets[index].key == key) {
            return true
        } else {
            return false
        }
    }

    const remove = (key) => {
        const index = hash(key);

        // Test if the index is out of bound
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        } else if (buckets.has(index)) {
            buckets.splice(index, 1) // ESTO ESTA MAL PORQUE LO QUE TENGO QUE COMPROBAR ES LA KEY
            return true
        } else {
            return false
        }
    }

    const length = () => {
        const filteredArray = buckets.filter(bucket => bucket !== undefined && bucket !== null);
        return filteredArray.length;
    }

    const clear = () => {
        const len = buckets.length
        buckets = new Array(len)
    }

    const keys = () => {
        const keys = [];


    }
};