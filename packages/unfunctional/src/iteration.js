// @flow

export function asyncMap<A, B>(fn: (A) => B)  {
    return async (data: Array<A>): Array<B> => {
        const allItems = (await data)
            .map((ii, key) => Promise.resolve(ii).then(data => fn(data, key)))

        return Promise.all(allItems);
    }
}
